const menu = document.querySelector(".menu");
const list = document.querySelector(".menu-collapse");

menu.addEventListener("click", function() {
    console.log("pyk");
    list.classList.toggle("menu-visible");
})