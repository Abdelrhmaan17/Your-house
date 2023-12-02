let eyePassword1 = document.querySelector(".eye-password-create");
let passwordLineCreate = document.querySelector(".password-line-create");
let passwordTextBoxCreate = document.querySelector(".text-box-create");
eyePassword1.addEventListener("click", hidePassword);
function hidePassword() {
  if (passwordLineCreate.classList.contains("hide-password-line")) {
    passwordLineCreate.classList.remove("hide-password-line");
    passwordTextBoxCreate.type = "text";
  } else {
    passwordLineCreate.classList.add("hide-password-line");
    passwordTextBoxCreate.type = "password";
  }
}
//
// Validation
//
let btnSignUp = document.querySelector(".btn-sign-up");
let button = document.querySelector(".sign-up-button");
let warning = document.querySelector(".warning-login");
warning.classList.add("hide-password-line");
button.style.backgroundColor = "lightblue";

// conditions after leaving field
passwordTextBoxCreate.addEventListener("blur", function (event) {
  let textBoxValue = passwordTextBoxCreate.value;
  // console.log(textBoxValue.length);
  let specialChars = /[$&@#%*&+_?!]/;
  if (
    textBoxValue.length <= 8 ||
    textBoxValue.length > 20 ||
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
    passwordTextBoxCreate.style.borderColor = "#2f80ed";
  } else {
    button.style.backgroundColor = "#2f80ed";
    warning.classList.add("hide-password-line");
  }
});
//conditions when clicking btn
btnSignUp.addEventListener("click", function (event) {
  let textBoxValue = passwordTextBoxCreate.value;
  if (textBoxValue === "") {
    warning.classList.remove("hide-password-line");
    event.preventDefault();
  }
});
