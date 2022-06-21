"use strict";

const newYear = new Date("1 january 2023");
const nowDate = new Date();
const toDay = nowDate.getDay();
const ruTime = nowDate.toLocaleTimeString("ru");

let h1 = document.createElement("h1");
let p1 = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");

document.body.appendChild(h1);
document.body.appendChild(p1);
document.body.appendChild(p2);
document.body.appendChild(p3);

const greeting = (ruTime) => {
  let hour = ruTime.split(":")[0];
  if (hour >= 6 && hour < 12) {
    return `Доброе утро!`;
  } else if (hour >= 12 && hour <= 18) {
    return `Добрый день!`;
  } else if (hour > 18 && hour <= 24) {
    return `Добрый вечер!`;
  } else if (hour >= 0) {
    return `Доброй ночи!`;
  }
};

const dayOfTheWeek = (toDay) => {
  const arrWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  return arrWeek[toDay];
};
const getNoun = (num) => {
  let n = Math.abs(num);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return "дней";
  }
  n %= 10;
  if (n === 1) {
    return "день";
  }
  if (n >= 2 && n <= 4) {
    return "дня";
  }
  return "дней";
};
const times = () => {
  let newYear = new Date("1 january 2023");
  let date = new Date();
  let enTime = date.toLocaleTimeString("en");
  let timeToNewYear = Math.floor(
    (newYear.getTime() - nowDate.getTime()) / 1000 / 60 / 60 / 24
  );
  let doft = dayOfTheWeek(toDay);
  let sayHi = greeting(ruTime);
  let pronun = getNoun(timeToNewYear);
  return { enTime, doft, sayHi, pronun, timeToNewYear };
};
const printMessage = () => {
  let getTime = times();
  h1.textContent = getTime.sayHi;
  p1.textContent = "Сегодня: " + getTime.doft + ".";
  p2.textContent = "Текущее время: " + getTime.enTime;
  p3.textContent =
    "До нового года осталось " + getTime.timeToNewYear + " " + getTime.pronun;
};

setInterval(printMessage, 1000);
