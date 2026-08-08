const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menu.onclick = (e) => {
    e.stopPropagation();
    nav.classList.toggle("active");
};

document.onclick = () => {
    nav.classList.remove("active");
};

nav.onclick = (e) => {
    e.stopPropagation();
};

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.onclick = () => {
        nav.classList.remove("active");
    };
});