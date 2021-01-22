https://www.codewars.com/kata/598057c8d95a04f33f00004e/train/javascript

7 kyu
Get the integers between two numbers
8489% of 198556 of 732MarlenAw
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Build a function that can get all the integers between two given numbers.

Example:

(2,9)

Should give you this output back:

[ 3, 4, 5, 6, 7, 8 ]

If startNum is the same as endNum, return an empty array.

NOTES:
two paramters --> a start number and an end number
I need an array to hold the returned values
let i = start numner + 1 (since we need one more AKA 2-9 so start with 3) and also one less than the end num, so 8 would be the last number. i < end num.
push out the numbers and return the array

function range(startNum, endNum){
   const arr=[];
   for (let i=startNum+1; i<endNum; i++){
   arr.push(i)
}
 return arr
};
