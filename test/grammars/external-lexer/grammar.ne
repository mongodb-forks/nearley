# Use %token to match any token of that type instead of "token":
multiplication -> %number %ws %times %ws %number {% ([first, , , , second]) => first * second %}

# Literal strings now match tokens with that text:
trig -> "sin" %number
