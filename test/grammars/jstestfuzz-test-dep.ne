@preprocessor jstestfuzz

@{%
const noSpaces = /^\S*$/;
const word: NearleySymbol = {
    test: (w) => w.match(noSpaces)
};
%}

second -> "some " %word "text"
second -> "some " "tokenhere"
