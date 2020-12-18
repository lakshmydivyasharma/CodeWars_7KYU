https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c/train/javascript

7 kyu
Numbers to Letters
501188% of 524962 of 2,300A.Partridge
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.

// set up the letters to numbers in a hashmap const = obj
// map through object, replcae letter with number
// join the numnbers together

function switcher(x){
  const obj={
              1:'z',
              2:'y',
              3:'x',
              4:'w',
              5:'v',
              6:'u',
              7:'t',
              8:'s',
              9:'r',
              10:'q',
              11:'p',
              12:'o',
              13:'n',
              14:'m',
              15:'l',
              16:'k',
              17:'j',
              18:'i',
              19:'h',
              20:'g',
              21:'f',
              22:'e',
              23:'d',
              24:'c',
              25:'b',
              26:'a',
              27:'!',
              28:'?',
              29:' '}

  return x.map(v=>obj[v*1]).join('')
}
