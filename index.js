
var randomeNumber1=Math.floor(Math.random() * 6 )+ 1;//1-6

var randomDiceImage="dice" + randomeNumber1 + ".png";// dice1.png-dice6.png

var randomImageSource="images/" + randomDiceImage;//img/dice1.png-img/dice6.png

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2=Math.floor(Math.random() * 6) + 1;

var randomImageSource2="images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// to change the h1

if(randomeNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(randomNumber2 > randomeNumber1){
  document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
