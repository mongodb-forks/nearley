
// Generated automatically by nearley, version 0.3.0
// http://github.com/Hardmath123/nearley
export type TokenValue = any;

export interface Token {
    produce: (generator: any, context: any) => any;
    name?: string;
    test?: (value: TokenValue) => any;
};

export interface Literal {
    literal: string;
}

export type NearleySymbol = Token | Literal | RegExp | string

export interface NearleyRule {
    name: string;
    symbols: NearleySymbol[];
    postprocess?: (d: any[], loc?: number, reject?: {}) => any;
    updateContext?: (generator: any, context: any) => any;
}

export interface Compiled {
    ParserRules: NearleyRule[];
    ParserStart: string;
}

export function compileGrammar(): Compiled {
    // Bypasses TS6133. Allow declared but unused functions.
    // tslint:disable-next-line
    function id(d: any[]): any { return d[0]; }

    const noSpaces = /^\S*$/;
    const word: NearleySymbol = {
        test: (w) => w.match(noSpaces),
        produce: () => Function.prototype,
    };
    
    const ws: NearleySymbol = {
        test: (s) => s === " ",
        produce: () => null,
    };
    const number: NearleySymbol = {
        test: (n) => Number.isInteger(n),
        produce: () => null,
    };

    // tslint:disable-next-line: variable-name
    const ParserRules: NearleyRule[] = [
    {"name": "second$string$1", "symbols": [{"literal":"s"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}], "postprocess": d => d.join(''), "updateContext": (generator, context) => context},
    {"name": "second$string$2", "symbols": [{"literal":"t"}, {"literal":"e"}, {"literal":"x"}, {"literal":"t"}], "postprocess": d => d.join(''), "updateContext": (generator, context) => context},
    {"name": "second", "symbols": ["second$string$1", word, "second$string$2"], "updateContext": 
        // this function is not actually used, it's just to check that it will be added to 'updateContext'.
        function(context) {
            // pretend we modify context
            return context;
        }
        },
    {"name": "second$string$3", "symbols": [{"literal":"s"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}], "postprocess": d => d.join(''), "updateContext": (generator, context) => context},
    {"name": "second$string$4", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":"k"}, {"literal":"e"}, {"literal":"n"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}], "postprocess": d => d.join(''), "updateContext": (generator, context) => context},
    {"name": "second", "symbols": ["second$string$3", "second$string$4"], "updateContext": (generator, context) => context},
    {"name": "main", "symbols": [number, ws, number, ws, "second"], "updateContext": (generator, context) => context}
];

    // tslint:disable-next-line: variable-name
    const ParserStart = "main";

    return {ParserRules, ParserStart};
}
