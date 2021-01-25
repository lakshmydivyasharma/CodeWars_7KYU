https://www.codewars.com/kata/544e2c60908f2da03600022a/train/javascript


7 kyu
Convert between radians and degrees
16376% of 87294 of 580priyankaherur1 Issue Reported
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Extend the Math object (JS) or module (Ruby and Python) to convert degrees to radians and viceversa. The result should be rounded to two decimal points. Note that all methods of Math object are static.

Example:

Math.degrees(Math.PI) //180deg
Math.radians(180) //3.14rad

Object.prototype.degrees=function (x){
  return ((''+(x*(180/Math.PI)).toFixed(2)).replace(/(\.0*$|0*$)/g,'')+'deg')
}
Object.prototype.radians=function (x){
  return ((''+(x/(180/Math.PI)).toFixed(2)).replace(/(\.0*$|0*$)/g,'')+'rad')
}
