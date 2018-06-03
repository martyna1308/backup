/*CUSTOMER SAY*/

const box = document.getElementsByClassName("customer-container");

const box1 = document.getElementById("customer-container1");

const box2 = document.getElementById("customer-container2");

const box3 = document.getElementById("customer-container3");

const box4 = document.getElementById("customer-container4");

const dot = document.getElementsByClassName("customer-dot");

const dot1 = document.getElementById("customer-dot1");

const dot2 = document.getElementById("customer-dot2");

const dot3 = document.getElementById("customer-dot3");

const dot4 = document.getElementById("customer-dot4");
console.log(dot.length);
dot1.addEventListener("click", function() {
    box1.style.display = "flex";
    box2.style.display = "none";
    box3.style.display = "none";
    box4.style.display = "none";
    
    for(let i = 0; i<dot.length-1; i++) {
        dot[i].style.backgroundColor = "#7b7b7b"
    };
    
    dot1.style.backgroundColor = "black";
    
})

dot2.addEventListener("click", function() {
    box2.style.display = "flex";
    box1.style.display = "none";
    box3.style.display = "none";
    box4.style.display = "none";
    
    for(let i = 0; i<dot.length-1; i++) {
        dot[i].style.backgroundColor = "#7b7b7b"
    };
    
    dot2.style.backgroundColor = "black";
})

dot3.addEventListener("click", function() {
    box3.style.display = "flex";
    box2.style.display = "none";
    box1.style.display = "none";
    box4.style.display = "none";
    
    for(let i = 0; i<dot.length; i++) {
        dot[i].style.backgroundColor = "#7b7b7b"
    };
    
    dot3.style.backgroundColor = "black";
})

dot4.addEventListener("click", function() {
    box4.style.display = "flex";
    box2.style.display = "none";
    box3.style.display = "none";
    box1.style.display = "none";
    
    for(let i = 0; i<dot.length-1; i++) {
        dot[i].style.backgroundColor = "#7b7b7b"
    };
    
    dot4.style.backgroundColor = "black";
})

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







