let eyePassword = document.querySelector(".eye-password");
let passwordLine = document.querySelector(".passowrd-line");
let passwordTextBox = document.querySelector(".text-box-password");

eyePassword.addEventListener("click", hidePassword);
function hidePassword() {
  if (passwordLine.classList.contains("hide-password-line")) {
    passwordLine.classList.remove("hide-password-line");
    passwordTextBox.type = "text";
} else {
    passwordLine.classList.add("hide-password-line");
    passwordTextBox.type = "password";
  }
}
