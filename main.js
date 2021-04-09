const navButton = document.getElementById("#bar");
const navBar = document.querySelector("nav");
const body = document.querySelector("body");

function showNav() {
    navBar.style.visibility = "visible";
    navBar.style.transform = "translateX(-50%) scale(1, 1)";
}

function unShowNav() {
    if (navBar.style.visibility === "visible") {
        navBar.style.visibility  = "hidden";
        navBar.style.transform = "translateX(-50%) scale(0, 1)";
    }
}
