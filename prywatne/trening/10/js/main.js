/* ------ MENU --------*/
let menu = document.querySelector(".hide-menu");

let button = document.querySelector(".menu-more");

button.addEventListener("click", function() {
    menu.classList.toggle("hide-menu-click");
    document.querySelector(".header .container").classList.toggle("container-clicked");
   
})
