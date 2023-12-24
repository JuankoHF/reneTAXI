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

window.addEventListener('scroll', function() {

    let animateContact = document.getElementById('contact');
    let positionContact = animateContact.getBoundingClientRect().top;
    let linckContact = document.querySelector(".link_whatsapp");

    if(positionContact < 590) {
        linckContact.classList.add("circle_contact");
    }

    if(positionContact > 620) {
        linckContact.classList.remove("circle_contact");
    }
    console.log(positionContact);
})