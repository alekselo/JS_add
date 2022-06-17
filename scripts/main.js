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
};

DomElement.prototype.content = function () {
  if (this.selector[0] === ".") {
    const newDiv = document.createElement("div");
    const newClass = this.selector.slice(1);
    newDiv.classList.add(newClass);
    newDiv.style.height = this.height;
    newDiv.style.width = this.width;
    newDiv.style.background = this.bg;
    newDiv.style.fontSize = this.fontSize;
    newDiv.textContent = newSelector;
    document.body.prepend(newDiv);
  } else if (this.selector[0] === "#") {
    const newParagraph = document.createElement("p");
    const newId = this.selector.slice(1);
    newParagraph.setAttribute("id", newId);
    newParagraph.style.height = this.height;
    newParagraph.style.width = this.width;
    newParagraph.style.background = this.bg;
    newParagraph.style.fontSize = this.fontSize;
    newParagraph.textContent = newSelector;
    document.body.prepend(newParagraph);
  }
};

const newContent = new DomElement(newSelector, "100px", "100px", "red", "22px");
newContent.content();
