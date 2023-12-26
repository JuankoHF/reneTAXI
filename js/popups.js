document.querySelector(".linck").addEventListener("click", showPopups);
document.querySelector(".close_icon").addEventListener("click", closePopups);
document.querySelector(".close_acount").addEventListener("click", closeAcountPopups);
document.querySelector(".acount").addEventListener("click", showAcountPopups);


let contentForm = document.querySelector(".content_form");
let formService = document.querySelector(".form_service");
let formAcount = document.querySelector(".form_acount");

function showPopups() {
    contentForm.classList.add("show_form");
    formService.classList.add("show_form_service")
}

function closePopups() {
    contentForm.classList.remove("show_form");
    formService.classList.remove("show_form_service");
    
}

function showAcountPopups() {
    contentForm.classList.add("show_form");
    formAcount.classList.add("show_form_service")
}
function closeAcountPopups() {
    contentForm.classList.remove("show_form");
    formAcount.classList.remove("show_form_service");
    
}