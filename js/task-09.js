// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const button = document.querySelector(`button[type="button"]`);
// const body = document.querySelector("body");
// const text = document.querySelector(".color");
// console.log(text.textContent);

// button.addEventListener("click", () => {
//   text.textContent = body.style.backgroundColor = getRandomHexColor();
// });

const text = document.querySelector(".color");
const btn = document.querySelector(".change-color");
const body = document.querySelector("body");

function getRandomHexColor() {
  return (text.textContent = body.style.backgroundColor =
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`);
}

btn.addEventListener("click", getRandomHexColor);
