const form = document.querySelector(".login-form");
const button = document.querySelector(`button[type="submit"]`);
const emailInput = document.querySelector(`input[type="email"]`);
const pass = document.querySelector(`input[type="password"]`);
const returnObj = {};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("All fields should be filled!");
  }
  returnObj.password = password.value;
  returnObj.email = email.value;
  console.log(returnObj);
  form.reset();
});
