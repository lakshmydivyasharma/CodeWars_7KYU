https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

7 kyu
Odd or Even?
1666590% of 3,78710,099 of 30,250ethaning
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Task:
Given a list of numbers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Example:
odd_or_even([0])          ==  "even"
odd_or_even([0, 1, 4])    ==  "odd"
odd_or_even([0, -1, -5])  ==  "even"

// use reduce method
// accumulator and current value
// use %2 bc it divides it. then say "if even, yes then even else give me odd"


function oddOrEven(array) {
   return array.reduce((start,next)=>start+next,0)%2==0?`${'even'}`:`${'odd'}`
}
