const form = document.querySelector(".content-form"),
  input = document.querySelector(".input"),
  button = document.querySelector(".btn"),
  error = document.querySelector(".input-error"),
  emailRegex = /^\S+@\S+\.\S+$/;

function validateEmail(email) {
  return emailRegex.test(email);
}

function handleInputValidation() {
  const inputValue = input.value;

  if (!validateEmail(inputValue)) {
    error.classList.replace("inactive", "flex");
    input.classList.add("error");
  } else {
    error.classList.replace("flex", "inactive");
    input.classList.remove("error");
  }
}

input.addEventListener("keyup", handleInputValidation);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  handleInputValidation();

  try {
    if (!input.classList.contains("error")) {
      form.submit();
      alert('Thank you for subscribing!');
    }
  } catch (error) {
    alert('Something went wrong while subscribing.')
  } 
});
