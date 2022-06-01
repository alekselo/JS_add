"use strict";

// Первое дополнительное;
let arr = [
  "2364896",
  "4456489",
  "7564896",
  "2956489",
  "6704893",
  "5564894",
  "3564895",
];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].startsWith("2") || arr[i].startsWith("4")) {
    console.log(arr[i]);
  }
}

// Второе дополнительное;

for (let i = 1; i < 100; i++) {
  let count = 0;
  for (let j = 2; j <= i && count < 2; ++j) {
    if (i % j == 0) {
      count++;
    }
  }
  if (count < 2) {
    console.log(i + " делится на " + i + " и 1");
  }
}
