// making dropdown for countries code
// selecting dropdown button, dropdown menu, countrie codes list
let dropdownCountriesBtn = document.querySelector(".dropdown-countries-code");
let dropdownCountriesMenu = document.querySelector(".options-country-code");
let dropdownDefaultCode = document.querySelector(".default-country-code");
let dropdownDefaultCountryImg = document.querySelector(
  ".default-country-code-img"
);
let countriesCodeList = document.querySelectorAll(".countries-codes-list li");
// console.log(countriesCodeList);
let defaultCodeContent = dropdownDefaultCode;
dropdownCountriesBtn.addEventListener("click", showdropdown);
function showdropdown() {
  if (dropdownCountriesMenu.classList.contains("show-dropdown-countries")) {
    // if exist close dropdown menu by removing it
    dropdownCountriesMenu.classList.remove("show-dropdown-countries");
  } else {
    // if not exist show dropdown menu by adding the class
    dropdownCountriesMenu.classList.add("show-dropdown-countries");
  }
}

countriesCodeList.forEach((item) => {
  item.addEventListener("click", function () {
    console.log(defaultCodeContent);
    defaultCodeContent.textContent = item.querySelector("p").textContent;
    dropdownDefaultCountryImg.src =item.querySelector("img").src
  });
});
