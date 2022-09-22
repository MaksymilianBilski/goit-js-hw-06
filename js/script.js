//ZADANIE 1

let newArr = [];
let newArr2 = [];

const categories = document.querySelectorAll("h2");
const category = document.querySelectorAll("h2");
const elements = document.querySelectorAll(".item ul");

for (const element of category) {
  newArr.push(element);
}
for (const element of elements) {
  const el = element.querySelectorAll("li");
  newArr2.push(el.length);
}
for (let i = 0; i < elements.length; i++) {
  console.log("Category" + ": " + newArr[i].textContent);
  console.log("Elements: " + newArr2[i]);
}

//ZADANIE 2

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.getElementById("ingredients");

for (let i = 0; i <= ingredients.length - 1; i++) {
  const item = document.createElement("li");
  item.innerHTML = ingredients[i];
  item.classList.add("item");
  list.append(item);
}

console.log(list);

//ZADANIE 3
// DODAĆ CSSY !!!!
// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];
// const gallery = document.querySelector(".gallery");
// images.forEach((number, index) => {
//   gallery.insertAdjacentHTML(
//     "afterbegin",
//     `<li><img src=${number.url}, alt=${number.alt}></img></li>`
//   );
// });

//ZADANIE 4

// PRÓBA NA IFIE?

/* const button = document.querySelector("button");
const incrButton = document.querySelector(`button[data-action="increment"]`);
const decrButton = document.querySelector(`button[data-action="decrement"]`);
console.log(incrButton);
let counterValue = 0;
incrButton.addEventListener("click", () => {
  if (incrButton.dataset.action === "increment") {
    console.log("+1");
  } else if (decrButton.dataset.action === "decrement") {
    console.log("-1");
  }
}); */

const button = document.querySelector("button");
const incrButton = document.querySelector(`button[data-action="increment"]`);
const decrButton = document.querySelector(`button[data-action="decrement"]`);
const value = document.querySelector("#value");
let counterValue = 0;

incrButton.addEventListener("click", () => {
  incrButton.dataset.action === "increment";
  counterValue += 1;
  value.innerHTML = `${counterValue}`;
});

decrButton.addEventListener("click", () => {
  decrButton.dataset.action === "decrement";
  counterValue -= 1;
  value.innerHTML = `${counterValue}`;
});

console.log(counterValue);

//ZADANIE 5
const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});

//ZADANIE 6
const input2 = document.querySelector("#validation-input");
input.addEventListener("click", () => {
  input.blur();
});
