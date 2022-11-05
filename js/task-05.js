const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    output.textContent = "Anonymous";
  }
});

// const input = document.getElementById("name-input");
// const output = document.getElementById("name-output");
// input.addEventListener("input", insertValue);

// function insertValue() {
//   if (input.value === "") {
//     return (output.textContent = "Anonymous");
//   }
//   return (output.textContent = input.value);
// }
