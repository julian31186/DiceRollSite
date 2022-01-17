

//Dice One
var numberOne =Math.floor(1 + Math.random()*6);
var randomDiceImage = "dice" + numberOne + ".png";
var randomImageSource = "assets/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);


//Dice Two
var numberTwo =Math.floor(1 + Math.random()*6); 
var randomDiceImage = "dice" + numberTwo + ".png";
var randomImageSource = "assets/" + randomDiceImage;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource);