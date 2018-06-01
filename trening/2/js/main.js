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

/*ARROW*/
const arrow = document.querySelector("#container-browse i.fas");

setInterval(function jumpArrow(){
    arrow.style.bottom = "+20px";
    
}

, 2000);


/*MENU*/
const menu = document.getElementById("menu");
const menuButton = document.getElementById("menu-button"); 
const menuItem = document.getElementsByClassName("menu-item");
const menuIcon = document.querySelector("#menu-button i");


menuButton.addEventListener("click", function() {
    if (document.querySelector("#menu ul").className === "close") {
        console.log('dziala');
        menu.style.height = "auto";
        menuIcon.className = "fas fa-times";
    }
});

if
document.querySelector("#menu ul") {
    
}






