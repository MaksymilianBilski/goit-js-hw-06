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

