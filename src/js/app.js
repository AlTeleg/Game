export default function Game () {
  Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    const fieldArray = Array.from(document.querySelectorAll(".game_field"));
    let count = 0;
    const counter = document.querySelector(".counter");
    const img = new Image();
    img.src = 'img/goblin.png';
    img.alt = 'goblin'
    fieldArray.random().appendChild(img);
  
    setInterval(() => {
      const next = fieldArray.random();
  
      if (img.parentElement !== next) {
        next.appendChild(img);
      }
    }, 200);
  
    img.addEventListener("click", () => {
      count += 1;
      if (count === 1) {
        counter.textContent = "You got me once";
      } else {
        counter.textContent =
          "You got me " + '"' + count.toString() + '" ' + "times";
      }
    });
  });
}



