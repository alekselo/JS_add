"use strict";
let num = 266219;

let result = 1;
num
  .toString()
  .split("")
  .forEach(function (elem) {
    result *= elem;
  });
console.log(result);

result = result ** 3;

console.log(+String(result).slice(0, 2));
