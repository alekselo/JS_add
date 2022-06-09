"use strict";
const btn = document.getElementById("btn");
const inputRange = document.querySelector("input[type = range]");
const rangeSpan = document.getElementById("range-span");
const inputText = document.querySelector("input[type=text]");
const textSpan = document.getElementById("text-span");
const square = document.getElementById("square");
const circle = document.getElementById("circle");
const eBtn = document.getElementById("e_btn");

eBtn.style.display = "none";

btn.addEventListener("click", function () {
  let color = inputText.value;
  square.style.backgroundColor = color;
  inputText.value = "";
});

inputRange.addEventListener("change", function () {
  rangeSpan.textContent = inputRange.value;
  circle.style.width = inputRange.value + "%";
  circle.style.height = inputRange.value + "%";
});
