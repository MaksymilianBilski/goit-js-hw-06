// const form = document.querySelector(".login-form");
// const button = document.querySelector(`button[type="submit"]`);
// const emailInput = document.querySelector(`input[type="email"]`);
// const pass = document.querySelector(`input[type="password"]`);
// const returnObj = {};

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const {
//     elements: { email, password },
//   } = event.currentTarget;
//   if (email.value === "" || password.value === "") {
//     alert("All fields should be filled!");
//   } else if (email.value !== "" || password.value !== "") {
//     returnObj.password = password.value;
//     returnObj.email = email.value;
//     console.log(returnObj);
//   }
//   form.reset();
// });

//2 METODA
const form = document.querySelector(".login-form");
const email = document.querySelector("input[type=email]");
const password = document.querySelector("input[type=password]");
const obj = {
  password,
  email,
};
form.addEventListener("submit", inputValidate);

function inputValidate(e) {
  e.preventDefault();
  if (password.value === "" || email.value === "") {
    return alert("uzupełnij wszstkie pola!");
  } else {
    (obj.password = password.value), (obj.email = email.value);
    console.log(obj);
  }
  form.reset();
}
