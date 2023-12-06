let eyePassword = document.querySelector(".eye-password");
let passwordLine = document.querySelector(".passowrd-line");
let textboxPwSignIn = document.querySelector(".text-box-password");
let textboxEmailSignIn = document.querySelector(".text-box-email-signin");
let btnSignIn = document.querySelector(".btn-sign-in");
let button = document.querySelector(".sign-in-button");
let warningPassword = document.querySelector(".warning-signin-pw");
let warningEmail = document.querySelector(".warning-signin");
warningEmail.style.display = "none";
warningPassword.style.display = "none";
button.style.backgroundColor = "lightblue";
let test = true;

eyePassword.addEventListener("click", hidePassword);
function hidePassword() {
  if (passwordLine.style.display === "none") {
    passwordLine.style.display = "block";
    textboxPwSignIn.type = "password";
  } else {
    passwordLine.style.display = "none";
    textboxPwSignIn.type = "text";
  }
}
//
// email login validation code
//
textboxEmailSignIn.addEventListener("blur", function (event) {
  let textBoxValue = textboxEmailSignIn.value;
  let specialChars = /[@]/;
  if (
    textBoxValue.length > 25 ||
    textBoxValue.length < 12 ||
    textBoxValue.length === 0 ||
    !specialChars.test(textBoxValue)
  ) {
    warningEmail.style.display = "flex";
    btnSignUp.addEventListener("click", function (event) {
      if (test) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
        alert("You must use email like example@gmail.com");
      }
    });
    textboxEmailSignIn.style.borderColor = "#2f80ed";
  } else {
    test = false;
    button.style.backgroundColor = "#2f80ed";
    warningEmail.style.display = "none";
  }
});

//conditions when clicking btn
btnSignUp.addEventListener("click", function (event) {
  let textBoxValue = textboxEmailSignIn.value;
  if (textBoxValue === "") {
    warningEmail.style.display = "flex";
    event.preventDefault();
  }
});

// password login validation code
//

textboxPwSignIn.addEventListener("blur", function (event) {
  let textBoxValue = textboxPwSignIn.value;
  // console.log(textBoxValue.length);
  let specialChars = /[$&@#%*&+_?!]/;
  if (
    textBoxValue.length <= 8 ||
    textBoxValue.length > 20 ||
    textBoxValue.length === 0 ||
    !specialChars.test(textBoxValue)
  ) {
    warningPassword.style.display = "flex";
    btnSignIn.addEventListener("click", function (event) {
      if (test) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
        alert(
          "You must use strong password more than 8 chars and contains special characters($&@#%*&+_?!)"
        );
      }
    });
  } else {
    test = false;
    button.style.backgroundColor = "#2f80ed";
    warningPassword.style.display = "none";
  }
});
//conditions when clicking btn
btnSignIn.addEventListener("click", function (event) {
  let textBoxValue = textboxPwSignIn.value;
  if (textBoxValue === "") {
    if (test) {
      event.preventDefault(); // Prevent the default behavior of the anchor tag
      alert(
        "You must use strong password more than 8 chars and contains special characters($&@#%*&+_?!)"
      );
    }
    warningPassword.style.display = "flex";
    event.preventDefault();
  }
});
