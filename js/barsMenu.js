document.querySelector(".menu").addEventListener("click", animateBars);
document.querySelector(".menu").addEventListener("click", animateNav);
document.querySelector(".responsive_display").addEventListener("click", animateNav);


var line1 = document.querySelector(".line1__bars-menu");
var line2 = document.querySelector(".line2__bars-menu");
var line3 = document.querySelector(".line3__bars-menu");

var lateralNav = document.querySelector(".responsive_display");

function animateBars() {
    line1.classList.toggle("activeline1__bars-menu");
    line2.classList.toggle("activeline2__bars-menu");
    line3.classList.toggle("activeline3__bars-menu");
}

function animateNav() {
    lateralNav.classList.toggle("active_nav");
}