$(document).ready(function () {


    $(".menu-button").click(function () {
        document.getElementsByTagName("nav")[0].classList.toggle("open-menu");

    });


    if (document.getElementsByClassName("portfolio-box").length <= 6) {
        document.getElementsByClassName("portfolio-more")[0].style.display = "none";

    }


   
});