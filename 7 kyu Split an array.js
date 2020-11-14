https://www.codewars.com/kata/550aea365951383698000727/train/javascript

7 kyu
Split an array
16-784% of 145557 of 568cgeorg
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Split an array of objects into 2 arrays based on truthiness of a provided property. The return value should be an array whose first element is an array of the truthy values, and whose second element is an array of the falsey values.

Javascript example:

var obj1 = { prop: true },
    obj2 = { prop: false };

split([obj1, obj2], 'prop');
// [[obj1], [obj2]]
CoffeeScript example:

obj1 = { prop: true }
obj2 = { prop: false }

split [obj1, obj2], 'prop'
# [[obj1], [obj2]]


// array split
// return key value pair

function split(arr, prop)
{
  return [
    arr.filter(function (a) { return a[prop]; }),
    arr.filter(function (a) { return !a[prop]; })
  ];
}
