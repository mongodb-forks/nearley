// Node-only

var Writable = require('stream').Writable;
var util = require('util');

function StreamWrapper(parser) {
    Writable.call(this);
    this._parser = parser;
}

util.inherits(StreamWrapper, Writable);

StreamWrapper.prototype._write = function write(chunk, encoding, callback) {
    this._parser.feed(chunk.toString());
    callback();
};

function LexerStreamWrapper(parser) {
    StreamWrapper.call(this, parser);
}

util.inherits(LexerStreamWrapper, StreamWrapper);

LexerStreamWrapper.prototype._write = function write(chunk, encoding, callback) {
    // To support having lexer files be valid javascript files, the special nearley syntax is
    // hardcoded into to the chunk. Ideally we would write a more native solution for this.
    chunk = '@{% ' + chunk.toString() + ' %} @lexer lexer\n';

    // Now we call _write() with the amended 'chunk'.
    StreamWrapper.prototype._write.call(this, chunk, encoding, callback);
}

module.exports = {StreamWrapper, LexerStreamWrapper};
