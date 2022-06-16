"use strict";

const todoControl = document.querySelector(".todo-control"),
  headerInput = document.querySelector(".header-input"),
  todoList = document.querySelector(".todo-list"),
  todoCompleted = document.querySelector(".todo-completed");
const setTodo = function () {
  localStorage.setItem("todo", JSON.stringify(todoData));
};
let todoData = [];

const render = function () {
  todoList.innerHTML = "";
  todoCompleted.innerHTML = "";

  todoData.forEach(function (item) {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    li.innerHTML =
      '<span class="text-todo">' +
      item.value +
      "</span>" +
      '<div class="todo-buttons">' +
      '<button class="todo-remove"></button>' +
      '<button class="todo-complete"></button>' +
      "</div>";

    if (item.completed) {
      todoCompleted.append(li);
    } else {
      todoList.append(li);
    }

    li.querySelector(".todo-complete").addEventListener("click", function () {
      item.completed = !item.completed;
      setTodo();
      render();
    });

    li.querySelector(".todo-remove").addEventListener("click", function () {
      let task = todoData.indexOf(item);
      if (task >= 0) {
        todoData.splice(task, 1);
      }
      setTodo();
      render();
    });
  });
};

todoControl.addEventListener("submit", function (event) {
  event.preventDefault();
});

todoControl.addEventListener("submit", function () {
  if (headerInput.value === "") {
    alert("Укажите задачу!");
  } else {
    const newTodo = {
      value: headerInput.value,
      completed: false,
    };
    todoData.push(newTodo);
    setTodo();
    render();
    headerInput.value = "";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("todo")) {
    todoData = JSON.parse(localStorage.getItem("todo"));
  }
  render();
});

render();
// console.log(localStorage);
