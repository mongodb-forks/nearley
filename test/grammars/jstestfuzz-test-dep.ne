@preprocessor jstestfuzz

@{%
var noSpaces = /^\S*$/;
var word = {test: function(w) {
    return w.match(noSpaces);
}};
%}

second -> "some " %word "text"
