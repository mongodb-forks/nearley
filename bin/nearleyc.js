#!/usr/bin/env node

var fs = require('fs');
var nearley = require('../lib/nearley.js');
var opts = require('commander');
var Compile = require('../lib/compile.js');
var StreamWrapper = require('../lib/stream.js').StreamWrapper;
var LexerStreamWrapper = require('../lib/stream.js').LexerStreamWrapper;


var version = require('../package.json').version;

opts.version(version, '-v, --version')
    .arguments('<file.ne>')
    .option('-l, --lexer [filename.js]', 'File with lexer to use with grammar', null)
    .option('-o, --out [filename.js]', 'File to output to (defaults to stdout)', false)
    .option('-e, --export [name]', 'Variable to set parser to', 'grammar')
    .option('-q, --quiet', 'Suppress linter')
    .option('--nojs', 'Do not compile postprocessors')
    .parse(process.argv);


var lexer = opts.lexer ? fs.createReadStream(opts.lexer) : null;
var input = opts.args[0] ? fs.createReadStream(opts.args[0]) : process.stdin;
var output = opts.out ? fs.createWriteStream(opts.out) : process.stdout;

var parserGrammar = nearley.Grammar.fromCompiled(require('../lib/nearley-language-bootstrapped.js'));
var parser = new nearley.Parser(parserGrammar);
var generate = require('../lib/generate.js');
var lint = require('../lib/lint.js');

function parseLexer(callback) {
    lexer
        .pipe(new LexerStreamWrapper(parser))
        .on('finish', function() {
            callback();
        });
}

function parseGrammar() {
    input
        .pipe(new StreamWrapper(parser))
        .on('finish', function() {
            parser.feed('\n');
            var c = Compile(
                parser.results[0],
                Object.assign({version: version}, opts)
            );
            if (!opts.quiet) lint(c, {'out': process.stderr, 'version': version});
            output.write(generate(c, opts.export));
        });
}

if (opts.lexer) {
    parseLexer(parseGrammar);
} else {
    parseGrammar();
}
