'use strict'

function DomElemet(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

DomElemet.prototype.createElem = function () {
  let inputText = prompt('Пожалуйста, введите . или #');

  switch (inputText) {
    case '.':
      let div = document.createElement('div');
      div.style.cssText = 'height: 100vh; width: 150vh; background: green; font-size: 50px; color:white';
      div.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit error';
      document.body.appendChild(div);
      break;

    case '#':
      let newElement = document.createElement('newElement');
      newElement.style.cssText = 'height: 100vh; width: 140vh; background: yellow; font-size: 40px; color:blue';
      newElement.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit error';
      document.body.appendChild(newElement);
      break;

    default:
      document.write('Oшибка = (((( Будьте внимательны!');
  }
};


let newObject = new DomElemet('.new_object', '70vh', '70vh', 'green', '35px')

newObject.createElem();

console.log(newObject);