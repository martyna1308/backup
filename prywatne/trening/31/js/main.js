//mobile menu

let menuElements = document.getElementsByClassName("main__menuItem");
let menu = document.getElementsByClassName("main__menuList")[0];
let menuButton = document.getElementsByClassName("main__bars")[0];



menuButton.addEventListener("click", () => {

    menu.classList.toggle("main__mobile");

});
