const signUpFormCard = document.querySelector(".signup-form-card");
const successCard = document.querySelector(".success-card");
const emailInput = document.querySelector(".email-input");
const subscribeBtn = document.querySelector(".subscribe");
const dismissBtn = document.querySelector(".dismiss");
const errorMessage = document.querySelector(".error-message");

const emailRegex = /^\S+@\S+\.\S+$/;

let hasInvalidEmail = false;

subscribeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let emailInputValue = emailInput.value;

  if (!emailRegex.test(emailInputValue)) {
    emailInput.classList.add("error");
    errorMessage.classList.remove("inactive");
    hasInvalidEmail = true;
    return;
  }

  signUpFormCard.classList.replace("grid", "inactive");
  successCard.classList.replace("inactive", "grid");
});

emailInput.addEventListener("input", function () {
  const emailInputValue = emailInput.value;

  if (hasInvalidEmail) {
    if (!emailRegex.test(emailInputValue)) {
      emailInput.classList.add("error");
      errorMessage.classList.remove("inactive");
    } else {
      emailInput.classList.remove("error");
      errorMessage.classList.add("inactive");
    }
  }
});

dismissBtn.addEventListener("click", function () {
  successCard.classList.add("inactive");
  signUpFormCard.classList.replace("inactive", "grid");
  emailInput.value = "";
});

