let categoryNumber = 0;
const body = document.body;
const list = body.firstElementChild;
const categories = list.children;
for (const category of categories) {
  categoryNumber += 1;
}
console.log("Number of categories: " + categoryNumber);
console.log(body);
console.log(list);

const tests = document.querySelectorAll("h2");
const testsNumber = document.querySelectorAll(".item ul");

let arr = 1;
for (const num of testsNumber) {
  console.log(num.children);
  arr += 1;
}
console.log(testsNumber);
console.log(tests);
for (const test of tests) {
  console.log("Category: " + test.textContent);
}
console.log(arr);
