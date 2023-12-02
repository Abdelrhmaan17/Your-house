let emailTextBoxCreate = document.querySelector(".text-box");
let btnSignUp = document.querySelector(".btn-sign-up");
let button = document.querySelector(".sign-up-button");
let warning = document.querySelector(".warning-create");
warning.classList.add("hide-password-line");
button.style.backgroundColor = "lightblue";

emailTextBoxCreate.addEventListener("blur", function (event) {
  let textBoxValue = emailTextBoxCreate.value;
  let specialChars = /[@]/;
  if (
    textBoxValue.length > 25 ||
    textBoxValue.length < 12 ||
    textBoxValue.length === 0 ||
    !specialChars.test(textBoxValue)
  ) {
    warning.classList.remove("hide-password-line");
    btnSignUp.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default behavior of the anchor tag
      alert(
        "You must use strong password more than 8 chars and contains special characters($&@#%*&+_?!)"
      );
    });
    emailTextBoxCreate.style.borderColor = "#2f80ed";
  } else {
    button.style.backgroundColor = "#2f80ed";
    warning.classList.add("hide-password-line");
  }
});

//conditions when clicking btn
btnSignUp.addEventListener("click", function (event) {
  let textBoxValue = emailTextBoxCreate.value;
  if (textBoxValue === "") {
    warning.classList.remove("hide-password-line");
    event.preventDefault();
  }
});
