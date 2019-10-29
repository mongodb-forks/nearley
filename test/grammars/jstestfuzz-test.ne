@preprocessor jstestfuzz
@include "./jstestfuzz-test-dep.ne"

@{%
var ws = {literal: " "};
var number = {test: function(n) {
    return n.constructor === Number;
}};
%}

main -> %number %ws %number %ws second
