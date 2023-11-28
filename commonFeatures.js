// code for burgermenu sidebar responsive design
let sidebarBurgerMenu = document.querySelector(".sidebar-burger-menu");
let sidebar = document.querySelector(".sidebar");
let sidebarContainer = document.querySelector(".sidebar-container");
let closeBtn = document.querySelector(".close-btn");
// on click on burgermenu icon
sidebarBurgerMenu.addEventListener("click", sidebarMenu);
function sidebarMenu() {
  // check if class that contain display sidebar exist
  if (sidebar.classList.contains("show-sidebar")) {
    // if exist close sidebar by removing it
    sidebar.classList.remove("show-sidebar");
    sidebarContainer.classList.remove("show-sidebar-container");
  } else {
    // if not exist show sidebar by adding the class
    sidebar.classList.add("show-sidebar");
    sidebarContainer.classList.add("show-sidebar-container");
  }
}
// on click close sidebar icon
closeBtn.addEventListener("click", closeSidebar);
// if clicked close sidebar by removing class
function closeSidebar() {
  sidebar.classList.remove("show-sidebar");
}
