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

function range(startNum, endNum){
   const arr=[];
   for (let i=startNum+1; i<endNum; i++){
   arr.push(i)
}
 return arr
};
