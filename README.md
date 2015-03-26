--------
Flatten
--------

Saad Bin Shahid
Dated: March 21, 2015



Input: Anything.
Output: An array containing each non-array element in the input, reading from left-to-right.

# Usage

The file exports a module which *only* provides one function. 
Load your function using `fn = require './flatten'` and `fn` is a function.

----

var flatten = require('./flatten.js');

var arrays = 3;
output = flatten.fn(arrays)
console.log(output);
console.log('result should be : [3]');

----

# Test Cases

Below are some test-cases to make this more concrete:-

Input:  3
Output: [3]

Input: { a: 1, b: "hi", c: /xyz/ }
Output [ { a: 1, b: "hi", c: /xyz/ } ]

Input:  [ 1, 2, 5 ]
Output: [ 1, 2, 5 ]

Input:  [ [ 1, [ [ [ 2, 3 ], 4, 5 ], 6 ] ] ]
Output: [ 1, 2, 3, 4, 5, 6 ]

Input:  [ undefined, [ null ] ]
Output: [ undefined, null ]

*/

