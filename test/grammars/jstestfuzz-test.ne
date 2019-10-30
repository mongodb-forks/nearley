@preprocessor jstestfuzz
@include "./jstestfuzz-test-dep.ne"

@{%
const ws: NearleySymbol = {literal: " "};
const number: NearleySymbol = {
    test: (n) => Number.isInteger(n)
};
%}

main -> %number %ws %number %ws second
