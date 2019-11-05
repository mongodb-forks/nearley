@preprocessor jstestfuzz
@include "./jstestfuzz-test-dep.ne"

@{%
const ws: NearleySymbol = {
    test: (s) => s === " ",
    produce: () => null,
};
const number: NearleySymbol = {
    test: (n) => Number.isInteger(n),
    produce: () => null,
};
%}

main -> %number %ws %number %ws second
