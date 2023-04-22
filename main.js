/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/app.js

function game() {
  Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
  };
  document.addEventListener("DOMContentLoaded", () => {
    const fieldArray = Array.from(document.querySelectorAll(".game_field"));
    let count = 0;
    const counter = document.querySelector(".counter");
    const container = document.querySelector(".game_container");
    const img = new Image();
    img.src = goblin_namespaceObject;
    img.alt = "goblin";
    fieldArray.random().appendChild(img);
    let speed = 360;
    setInterval(() => {
      const next = fieldArray.random();
      if (img.parentElement !== next) {
        next.appendChild(img);
      }
      setTimeout(() => {
        setInterval(() => {
          container.style.transform = "rotate(0deg)";
        }, 3000);
      }, 30000);
    }, speed);
    setTimeout(() => {
      container.style.transform = "rotate(45deg)";
      img.style.transform = "rotate(-45deg)";
    }, 6000);
    setTimeout(() => {
      container.style.transform = "rotate(0deg)";
      img.style.transform = "rotate(0deg)";
    }, 10000);
    setTimeout(() => {
      container.style.transform = "rotate(-45deg)";
      img.style.transform = "rotate(45deg)";
    }, 13000);
    setTimeout(() => {
      setInterval(() => {
        container.style.transform = "rotate(45deg)";
        img.style.transform = "rotate(-45deg)";
      }, 1500);
    }, 18000);
    setTimeout(() => {
      setInterval(() => {
        container.style.transform = "rotate(0deg)";
        img.style.transform = "rotate(0deg)";
      }, 5000);
    }, 20000);
    setTimeout(() => {
      setInterval(() => {
        container.style.transform = "rotate(-45deg)";
        img.style.transform = "rotate(45deg)";
      }, 2000);
    }, 26000);
    img.addEventListener("click", () => {
      count += 1;
      if (count === 1) {
        counter.textContent = "You got me once";
      } else {
        counter.textContent = "You got me " + '"' + count.toString() + '" ' + "times";
      }
    });
  });
}
;// CONCATENATED MODULE: ./src/index.js


game();
/******/ })()
;