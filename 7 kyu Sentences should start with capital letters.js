https://www.codewars.com/kata/5bf774a81505a7413400006a/train/javascript

7 kyu
Sentences should start with capital letters.
10488% of 185613 of 862Bethany
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
In English, all words at the begining of a sentence should begin with a capital letter.

You will be given a paragraph that does not use capital letters. Your job is to capitalise the first letter of the first word of each sentence.

For example,

input:

"hello. my name is inigo montoya. you killed my father. prepare to die."

output:

"Hello. My name is inigo montoya. You killed my father. Prepare to die."

You may assume:

there will be no punctuation besides full stops and spaces

all but the last full stop will be followed by a space and at least one word

FUNDAMENTALSSTRINGS

// first chacter is uppercase
// if ". " then uppercase the letter

function fix(paragraph){
  return paragraph.slice(0,1).toUpperCase()+paragraph.replace(/\. \w/g,v=>v.toUpperCase()).slice(1)
}
