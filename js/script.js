/* ========== TOPボタン ========== */
const message =
document.getElementById("top-btn");

window.addEventListener("scroll", function () {
    if(window.scrollY > 0){
        message.style.opacity = "1";
    }else{
        message.style.opacity = "0";
    }
});


/* ========= NAV ========== */

const header =
document.getElementById("header");

const nav =
document.getElementById("nav");

const navinner =
document.getElementById("nav-inner");

const links =
document.querySelectorAll(".nav-link");

nav.addEventListener("click", function () {

    navinner.classList.toggle("active");
    header.classList.toggle("menu-open");

    if (navinner.classList.contains("active")) {
        nav.textContent = "×";
    } else {
        nav.textContent = "☰";
    }

});

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navinner.classList.remove("active");
        header.classList.remove("menu-open");
        nav.textContent = "☰";

    });

});


/* ========= フォーム =========== */
const form =
document.getElementById("contact-form");

const modal =
document.getElementById("modal");

const modalClose =
document.getElementById("modal-close");

form.addEventListener(
"submit",
async function(e){

    e.preventDefault();

    const data =
    new FormData(form);

    const response =
    await fetch(
        form.action,
        {
            method:"POST",
            body:data,
            headers:{
                "Accept":"application/json"
            }
        }
    );

    if(response.ok){

        modal.classList.add("active");

        form.reset();

    }else{

        alert("送信に失敗しました");

    }

});

modalClose.addEventListener(
"click",
function(){

    modal.classList.remove(
        "active"
    );

});