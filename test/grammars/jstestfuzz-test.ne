@preprocessor jstestfuzz

@{%
const moo = require("moo");

const lexer = moo.compile({
  larrow: '<',
  rarrow: '>',
  integer: /[0-9]+/
});
%}

@lexer lexer

expression -> %larrow %integer %rarrow {% parts => parts.map(p => p.value) %}
