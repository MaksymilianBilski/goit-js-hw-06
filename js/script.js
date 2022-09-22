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
