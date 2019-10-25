const moo = require('moo');

const lexer = moo.compile({
    Hello: /Hello/,
    World: /World/,
});

module.exports = {lexer: lexer};
