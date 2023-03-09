const sideBar = document.querySelector(".sidebar");

const closeBtn = document.querySelector(".close-btn");
const sideBarToggle = document.querySelector(".sidebar-toggle");

closeBtn.addEventListener("click", function () {
  sideBar.classList.toggle("show-sidebar");
});

sideBarToggle.addEventListener("click", function () {
  sideBar.classList.toggle("show-sidebar");
});
