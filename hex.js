const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//first step - fetch the button and color elements into JS
let clickmeButton = document.getElementById("btn");
let bgColor = document.querySelector(".color");

//On clicking the "click me" button, it should change 
//the background color

clickmeButton.addEventListener("click", function() {
    let hexColor = "#";
    for(let i=0;i<6;i++){
    hexColor = hexColor + hex[generateRandom()];
    console.log(hexColor);
 }
 bgColor.textContent = hexColor;
 document.body.style.backgroundColor = hexColor;
})
function generateRandom (){
    return Math.floor(Math.random() * hex.length);
}