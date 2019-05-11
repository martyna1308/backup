$(document).ready(function () {


    $(".menu-button").click(function () {
        document.getElementsByTagName("nav")[0].classList.toggle("open-menu");

    });


    if (document.getElementsByClassName("portfolio-box").length <= 6) {
        document.getElementsByClassName("portfolio-more")[0].style.display = "none";

    }


<<<<<<< HEAD
    $(".portfolio-box").click(function (e) {
        document.getElementsByClassName("container-portfolio")[0].classList.toggle("portfolio-clicked");
        document.body.classList.toggle("gallery-overflow");
        let targetsMasks = document.getElementsByClassName("portfolio-mask");
        let targetsBoxes = document.getElementsByClassName("portfolio-box");

        for(let j = 0; j<targetsBoxes.length; j++) {
           targetsBoxes[j].classList.toggle("hide-me");
        };

        for (let i in targetsMasks) {
            if (e.target === targetsMasks[i]) {
                console.log(targetsBoxes[i]);
                targetsBoxes[i].style.display = "flex";
            }
        }
    })

//test2

=======
   
>>>>>>> 1431bef5e8ef6bcd83ceb414b896caebf0f7020c
});