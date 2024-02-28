let btn = document.querySelector(".myBtn");
let scrollPt = 200;

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