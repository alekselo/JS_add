"use strict";
const getData = () => {
  return fetch("db.json").then((response) => response.json());
};

const sendData = (data) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json(data))
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

getData()
  .then((data) => {
    console.log(data);
    sendData(data);
  })
  .catch((error) => console.log(error));
