# Introduction to Pattern Problems

## String Concatenation

left + right  
If any one either left operand or right operand or both are strings, then it converts the other operand as a string also and then joins them.

In string concatenation, if we have both operands as strings, then we just join them together and get a new string.

Let’s say, there are two strings, x and y.  
x = “abc”  
y = “def”

When we do, x += y, JS will create a new string “abcdef” and assign it to variable x.  
JS will not make changes in the old strings.

String concatenation always create new strings and doesn’t update old strings.  
Reason: In JS, strings are immutable (cannot modify themselves).  
If we do any operation on a string in JS, it will always create a new string.
