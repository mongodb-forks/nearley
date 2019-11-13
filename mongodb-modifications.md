# MongoDB Modifications

This file details the modifications made to nearley as compared to the upstream.

## Differences

- Bugfix for https://github.com/kach/nearley/issues/318 (multiple-include)
- Added '--lexer' command line argument to include an external lexer file to be compiled
  with the grammar (https://github.com/mongodb-forks/nearley/commit/9c69672ae79a2f3d0ccd76d3dabf70109a71a113)
- Bugfix for https://github.com/kach/nearley/issues/407 (custom token matcher and string literals)
- Added 'generate.jstestfuzz' preprocessor option to generate a compiled .ts file 
  that exports a compileGrammar function

## Version History

- v0.1.0: Corresponds to nearley v2.16.0
- v0.2.0: Adds '--lexer' CLI argument functionality
- v0.3.0: Adds 'generate.jstestfuzz' preprocessor option, fixes custom token matcher bug
- v0.4.0: Adds '^' and '{^ [code here] ^}' syntax literals to support contextual unparsing
