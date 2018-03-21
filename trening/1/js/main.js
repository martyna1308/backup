var menu = document.querySelector("#menu ul");
var button = document.querySelector("#menu button");
var menuIcon1 = document.querySelector(".fa-bars");
var menuIcon2 = document.querySelector(".fa-times");
var circle = document.querySelector("#relax-grey img");

menuIcon1.addEventListener("click", function () {
    menu.style.display = "flex";
    menu.style.right = 0; 
    
    menuIcon1.style.visibility = "hidden";
    menuIcon2.style.visibility = "visible";
})

menuIcon2.addEventListener("click", function () {
    menu.style.right = "-100%";
    menuIcon2.style.visibility = "hidden";
    menuIcon1.style.visibility = "visible";
    menu.style.display = "none";
})

$(window).scroll(function () {
    var theta = 20;

    
    $("#circle").css({
        "transform": "rotate(' + theta + 'deg)",
        "-webkit-transform": "rotate(' + theta + 'deg)",
        "-moz-transform": "rotate(' + theta + 'deg)"
    
    });
});





