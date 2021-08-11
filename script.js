// let's create the variables 

var moon = document.getElementById("moon");
var body = document.getElementById("body");
var logo = document.getElementById("logo");
var li = document.getElementById("li");
var li1 = document.getElementById("li1");
var li2 = document.getElementById("li2");
var li3 = document.getElementById("li3");
var li4 = document.getElementById("li4");
var svg = document.getElementById("svg");
var png = document.getElementById("png");



// let's create a function to turn on dark mode or light mode

moon.onclick = function() {
    moon.src = 'images/sun.png';
    svg.src = 'images/2.svg';
    body.style.color = 'white';
    body.style.backgroundColor = 'black';
    li.style.color = 'white';
    li1.style.color = 'white';
    li2.style.color = 'white';
    li3.style.color = 'white';
    li4.style.color = 'white';
}

moon.ondblclick = function() {
    moon.src = 'images/moon.png';
    svg.src = 'images/1.svg';
    body.style.color = 'black';
    body.style.backgroundColor = '#ececec';
    li.style.color = 'black';
    li1.style.color = 'black';
    li2.style.color = 'black';
    li3.style.color = 'black';
    li4.style.color = 'black';
}

// let's animate the svg and the png image

png.addEventListener('mouseenter',() => {
    svg.style.transform = 'translate(-10%, 3%)';
    png.style.transform = 'translate(-10%, 18%)';

})
png.addEventListener('mouseleave',() => {
    svg.style.transform = 'translate(5%, 10%)';
    png.style.transform = 'translateY(18%)';
    png.style.transitionDuration = '2s';
    svg.style.transitionDuration = '4s';

})