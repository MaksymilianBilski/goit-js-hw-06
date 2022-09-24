function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(`button[type="button"]`);
const body = document.querySelector("body");
const text = document.querySelector(".color");
console.log(text.textContent);

button.addEventListener("click", () => {
  text.textContent = body.style.backgroundColor = getRandomHexColor();
});
