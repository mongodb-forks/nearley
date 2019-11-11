"use strict";
exports.__esModule = true;
;
function compileGrammar() {
    // Bypasses TS6133. Allow declared but unused functions.
    // tslint:disable-next-line
    function id(d) { return d[0]; }
    var noSpaces = /^\S*$/;
    var word = {
        test: function (w) { return w.match(noSpaces); },
        produce: function () { return Function.prototype; }
    };
    var ws = {
        test: function (s) { return s === " "; },
        produce: function () { return null; }
    };
    var number = {
        test: function (n) { return Number.isInteger(n); },
        produce: function () { return null; }
    };
    // tslint:disable-next-line: variable-name
    var ParserRules = [
        { "name": "second$string$1", "symbols": [{ "literal": "s" }, { "literal": "o" }, { "literal": "m" }, { "literal": "e" }, { "literal": " " }], "postprocess": function (d) { return d.join(''); }, "updateContext": function (generator, context) { return context; } },
        { "name": "second$string$2", "symbols": [{ "literal": "t" }, { "literal": "e" }, { "literal": "x" }, { "literal": "t" }], "postprocess": function (d) { return d.join(''); }, "updateContext": function (generator, context) { return context; } },
        { "name": "second", "symbols": ["second$string$1", word, "second$string$2"], "updateContext": 
            // this function is not actually used, it's just to check that it will be added to 'updateContext'.
            function (context) {
                // pretend we modify context
                return context;
            }
        },
        { "name": "second$string$3", "symbols": [{ "literal": "s" }, { "literal": "o" }, { "literal": "m" }, { "literal": "e" }, { "literal": " " }], "postprocess": function (d) { return d.join(''); }, "updateContext": function (generator, context) { return context; } },
        { "name": "second$string$4", "symbols": [{ "literal": "t" }, { "literal": "o" }, { "literal": "k" }, { "literal": "e" }, { "literal": "n" }, { "literal": "h" }, { "literal": "e" }, { "literal": "r" }, { "literal": "e" }], "postprocess": function (d) { return d.join(''); }, "updateContext": function (generator, context) { return context; } },
        { "name": "second", "symbols": ["second$string$3", "second$string$4"], "updateContext": function (generator, context) { return context; } },
        { "name": "main", "symbols": [number, ws, number, ws, "second"], "updateContext": function (generator, context) { return context; } }
    ];
    // tslint:disable-next-line: variable-name
    var ParserStart = "main";
    return { ParserRules: ParserRules, ParserStart: ParserStart };
}
exports.compileGrammar = compileGrammar;
