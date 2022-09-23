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
const input5 = document.querySelector("#name-input");
const output5 = document.querySelector("#name-output");
input5.addEventListener("input", (event) => {
  output5.textContent = event.currentTarget.value;
});

//ZADANIE 6
const input6 = document.querySelector(`#validation-input`);
input6.style.border = "3px solid #bdbdbd";
input6.addEventListener("blur", (event) => {
  if (event.currentTarget.value === "" || event.currentTarget.length !== 6) {
    event.currentTarget.placeholder = `Please enter ${(event.currentTarget.dataset.length =
      "6")} symbols`;
    event.currentTarget.style.borderColor = "#f44336";
  } else if (event.currentTarget.value.length === 6) {
    return (event.currentTarget.style.borderColor = "#4caf50");
  }
});

//ZADANIE 7
const input7 = document.querySelector("#font-size-control");
const text7 = document.querySelector("#text");
console.log(text7.textContent);
input7.addEventListener(`change`, () => {
  text7.style.fontSize = `${input7.value}px`;
});

//ZADANIE 8
