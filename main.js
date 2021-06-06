const navButton = document.querySelector(".bar-btn");
const navBar = document.querySelector("nav");

navButton.addEventListener("click", () => {
  navBar.classList.toggle("nav-show");
  console.log("clicked");
});
