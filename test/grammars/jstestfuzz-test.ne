@preprocessor jstestfuzz

@{%
var noSpaces = /^\S*$/;
var word = {test: function(w) {
    return w.match(noSpaces);
}};
var ws = {literal: " "};
var number = {test: function(n) {
    return n.constructor === Number;
}};
%}

main -> %number %ws %number %ws "some " %word "text"
