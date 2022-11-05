// const input = document.querySelector("#validation-input");

// input.addEventListener("blur", (event) => {
//   if (
//     event.currentTarget.value === "" ||
//     event.currentTarget.value.length !== 6
//   ) {
//     input.classList.remove("valid");
//     input.classList.add("invalid");
//   } else {
//     input.classList.remove("invalid");
//     input.classList.add("valid");
//   }
// });

const input = document.querySelector(`#validation-input[data-length]`);
input.addEventListener("input", validate);

function validate() {
  if (input.value.length < input.dataset.length) {
    input.classList.add("invalid");
  }
  if (input.value.length >= input.dataset.length) {
    input.classList.replace("invalid", "valid");
  }
}
