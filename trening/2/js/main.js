/*CUSTOMER SAY*/
const customers = document.getElementsByClassName("customer-container");
const dots = document.getElementsByClassName("customer-dot");
const customerOne = document.getElementById("customer-container1");
const customerTwo = document.getElementById("customer-container2");
const customerThree = document.getElementById("customer-container3");
const customerFour = document.getElementById("customer-container4");

const dotOne = document.getElementById("customer-dot1");
const dotTwo = document.getElementById("customer-dot2");
const dotThree = document.getElementById("customer-dot3");
const dotFour = document.getElementById("customer-dot4");

let numberSlide = 0;
sliderCustomers();
let numberSlideChange = setInterval(sliderCustomers, 3000);

function sliderCustomers() {
    for (i = 0; i < customers.length; i++) {
      customers[i].style.display = "none"; 
    }
    
    numberSlide++;
    
    if (numberSlide > customers.length) {numberSlide = 1} 
    customers[numberSlide-1].style.display = "flex"; 
     
    
    function clearColor(){
        dots[0].style.backgroundColor = "#7b7b7b";
        dots[1].style.backgroundColor = "#7b7b7b";
        dots[2].style.backgroundColor = "#7b7b7b";
        dots[3].style.backgroundColor = "#7b7b7b";
        };
    
    if(numberSlide === 1){
       clearColor();
       dotOne.style.backgroundColor = "black";
       }
    
    if(numberSlide === 2){
        clearColor();
       dotTwo.style.backgroundColor = "black";
       }
    if(numberSlide === 3){
       clearColor();
        dotThree.style.backgroundColor = "black";
       }
    if(numberSlide === 4){
       clearColor();
        dotFour.style.backgroundColor = "black";
       }
    
}

dotOne.addEventListener("click", function() {
    clearInterval(numberSlideChange);
    for ( let i=0; i<dots.length; i++ ) {
        dots[i].style.backgroundColor = "#7b7b7b";
        dots[0].style.backgroundColor = "black";
        customers[i].style.display = "none";
        customers[0].style.display = "flex";
    }
});

dotTwo.addEventListener("click", function() {
    clearInterval(numberSlideChange);
    for (let i=0; i<dots.length; i++) {
        dots[i].style.backgroundColor = "#7b7b7b";
        dots[1].style.backgroundColor = "black";
        customers[i].style.display = "none";
        customers[1].style.display = "flex";
    }
});

dotThree.addEventListener("click", function() {
    clearInterval(numberSlideChange);
    for (let i=0; i<dots.length; i++) {
        dots[i].style.backgroundColor = "#7b7b7b";
        dots[2].style.backgroundColor = "black"; 
        customers[i].style.display = "none";
        customers[2].style.display = "flex";
    }
});

dotFour.addEventListener("click", function() {
    clearInterval(numberSlideChange);
    for (let i=0; i<dots.length; i++) {
        dots[i].style.backgroundColor = "#7b7b7b";
        dots[3].style.backgroundColor = "black";
        customers[i].style.display = "none";
        customers[3].style.display = "flex";
    }
});


/*MENU*/
const menu = document.querySelector(".menu-close");
const menuButton = document.getElementById("menu-button"); 
const menuItem = document.getElementsByClassName("menu-item");
const menuIcon = document.querySelector("#menu-button i");

menuButton.addEventListener("click", function() {
    if(menu.className === "menu-close") {
        menu.className += " menu-on";
    
    } else if (menu.className === "menu-close menu-on") {
        menu.className = "menu-close"
    }        
})


/*PORTFOLIO*/

const portfolioWeb = document.getElementsByClassName("web");
const portfolioPrint = document.getElementsByClassName("print");
const portfolioAll = document.getElementsByClassName("portfolio-photo");

const buttonWeb = document.getElementById("category-web");
const buttonPrint = document.getElementById("category-print");
const buttonAll = document.getElementById("category-all");

const viewAll = document.querySelector("#container-browse");

function wysokoscPortfolio() {
    const portfolioAllActual = document.getElementsByClassName("portfolio-photo");
    
    if (portfolioAllActual.length > 9 ) {
        for (let a = 9; a < portfolioAllActual.length; a++) {
        portfolioAllActual[a].style.display = "none";
        }
    }
};

wysokoscPortfolio();


buttonWeb.addEventListener("click", function () {

    for (let i = 0; i < portfolioAll.length; i++) {
        portfolioAll[i].style.display = "none";
    }

    for (let j = 0; j < portfolioWeb.length; j++) {
        portfolioWeb[j].style.display = "block";
    }

    wysokoscPortfolio();
});

buttonPrint.addEventListener("click", function() {
    
    for (let i = 0; i<portfolioAll.length; i++) { 
        portfolioAll[i].style.display = "none";
    }
    
    for (let j = 0; j<portfolioPrint.length; j++) { 
        portfolioPrint[j].style.display = "block";
    }
    
    wysokoscPortfolio();
});

buttonAll.addEventListener("click", function() {
    
    for (let i = 0; i<portfolioAll.length; i++) { 
        portfolioAll[i].style.display = "block";
    }
    
    wysokoscPortfolio();
});

viewAll.addEventListener("click", function() {
    for (let i = 0; i<portfolioAll.length; i++) { 
        portfolioAll[i].style.display = "block";
    }
    
    document.querySelector("#container-browse i").className = "fas fa-angle-up";
    
    viewAll.className += "open";
    
})







