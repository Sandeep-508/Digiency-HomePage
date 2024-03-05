let btn = document.querySelector(".myBtn");
let scrollPt = 200;
let menu = document.querySelector(".menu");
let lg_view = document.querySelector(".lg-view");
let body = document.body;
menu.addEventListener("click", () => {
    lg_view.classList.toggle("show");
    if (lg_view.classList.contains("show")) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "auto";
    }
});

window.addEventListener("scroll", () => {
    if (window.scrollY > scrollPt) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

btn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
});

let links = document.querySelectorAll(".nav-item");

links.forEach(link => {
    link.addEventListener("click", () => {
        lg_view.classList.remove("show");
        body.style.overflow = "auto";
    });
});
