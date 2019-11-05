@preprocessor jstestfuzz

@{%
const noSpaces = /^\S*$/;
const word: NearleySymbol = {
    test: (w) => w.match(noSpaces),
    produce: () => Function.prototype,
};
%}

second -> "some " %word "text"
second -> "some " "tokenhere"
