//1 SPOSÓB
const items = document.querySelectorAll(".item");
const item = document.querySelector(".item");
const child = item.firstElementChild.textContent;
console.log("Number of categories:" + items.length);
console.log("");
for (const it of items) {
  console.log("Category: " + it.firstElementChild.textContent);
  console.log("Elements: " + it.querySelectorAll("li").length);
  console.log("");
}

//2 SPOSÓB
// const category = document.querySelector("#categories");
// const child = category.children;
// console.log("2 sposób: ");
// console.log("Numbr of categories:" + items.length);
//3 SPOSÓB
// let number = 0;
// for (const cat of child) {
//   number += 1;
// }
// console.log("3 sposób: ");
// console.log("Number of categories:" + number);
