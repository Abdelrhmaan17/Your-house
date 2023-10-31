let sidebarBurgerMenu = document.querySelector(".sidebar-burger-menu");
let sidebar = document.querySelector(".sidebar");
let sidebarContainer = document.querySelector(".sidebar-container");
let closeBtn = document.querySelector(".close-btn");


sidebarBurgerMenu.addEventListener("click", sidebarMenu);

function sidebarMenu() {
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
    sidebarContainer.classList.remove("show-sidebar-container");
  } else {
    sidebar.classList.add("show-sidebar");
    sidebarContainer.classList.add("show-sidebar-container");
  }
}

closeBtn.addEventListener("click", closeSidebar);

function closeSidebar() {
  sidebar.classList.remove("show-sidebar");
}