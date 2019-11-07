@preprocessor jstestfuzz

@{%
const noSpaces = /^\S*$/;
const word: NearleySymbol = {
    test: (w) => w.match(noSpaces),
    produce: () => Function.prototype,
};
%}

second -> "some " %word "text" {%
    // this function is not actually used, it's just to check that it will be added to 'updateContext'.
    function(context) {
        // pretend we modify context
        return context;
    }
%}
second -> "some " "tokenhere"
