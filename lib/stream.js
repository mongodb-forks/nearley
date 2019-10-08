// Node-only

var Writable = require('stream').Writable;
var util = require('util');

function StreamWrapper(parser, isLexer) {
    Writable.call(this);
    this._parser = parser;
    this._isLexer = isLexer;
}

util.inherits(StreamWrapper, Writable);

StreamWrapper.prototype._write = function write(chunk, encoding, callback) {
    if (this._isLexer) {
        chunk = '@{% ' + chunk.toString() + ' %} @lexer lexer';
    }
    this._parser.feed(chunk.toString());
    callback();
};

module.exports = StreamWrapper;
