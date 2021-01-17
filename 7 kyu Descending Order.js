https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

7 kyu
Descending Order
134420789% of 13,15239,200 of 105,002TastyOs1 Issue Reported
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321


NOTES:
take in the n, split the number, sort it from greatest to least and join it back as a string


function descendingOrder(n){
  return +(n+'').split('').sort().reverse().join('')
}
