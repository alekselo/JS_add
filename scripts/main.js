"use strict";
const newSelector = prompt(
  "Введите название класса (начиная с точки) или ID (начиная с #)"
);
const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.newElem = function () {
    let newTag;
    if (this.selector[0] === ".") {
      newTag = document.createElement("div");
      const newClass = this.selector.slice(1);
      newTag.classList.add(newClass);
    } else if (this.selector[0] === "#") {
      newTag = document.createElement("p");
      const newId = this.selector.slice(1);
      newTag.setAttribute("id", newId);
    }
    newTag.style.height = this.height;
    newTag.style.width = this.width;
    newTag.style.background = this.bg;
    newTag.style.fontSize = this.fontSize;
    newTag.textContent = newSelector;
    document.body.prepend(newTag);
  };
};

const newContent = new DomElement(newSelector, "100px", "100px", "red", "22px");
newContent.newElem();
