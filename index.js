//Dice One
var numberOne =Math.floor(1 + Math.random()*6);
var randomDiceImage = "dice" + numberOne + ".png";
var randomImageSource = "assets/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);


//Dice Two
var numberTwo =Math.floor(1 + Math.random()*6); 
var randomDiceImage2 = "dice" + numberTwo + ".png";
var randomImageSource2 = "assets/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);


//Conditionals
if (numberOne > numberTwo) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!🚩";
}

else if (numberTwo > numberOne) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}

else  {
    document.querySelector("h1").innerHTML = "Draw!🏳️";
}
    
