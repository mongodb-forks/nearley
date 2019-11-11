# Generated automatically by nearley, version 0.3.0
# http://github.com/Hardmath123/nearley
do ->
  id = (d) -> d[0]

  test = (d)->d.join("")
  
  grammar = {
    Lexer: undefined,
let ParserRules = [
    {"name": "r", "symbols": ["l", "n"], "updateContext": (generator, context) => context},
    {"name": "l", "symbols": ["l", /[A-Z]/], "postprocess": test, "updateContext": (generator, context) => context},
    {"name": "l", "symbols": [], "updateContext": (generator, context) => context},
    {"name": "n", "symbols": ["n", /[0-9]/], "postprocess":  (d) ->
        d[0] + d[1]
        , "updateContext": (generator, context) => context},
    {"name": "n", "symbols": [], "updateContext": (generator, context) => context}
];
    ParserStart: "r"
  }
  if typeof module != 'undefined' && typeof module.exports != 'undefined'
    module.exports = grammar;
  else
    window.grammar = grammar;
