document.querySelector("button").addEventListener("click",handleClick);


function handleClick() {
  

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // dice has 6 sides - "+1" para evitar o 0 - math.floor adicionado para arrendondar o numero

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png to dice6.png

var randomImageSource = "images/" + randomDiceImage; // para mostrar onde estao as imagens - pasta imagens (the source)


var image1 = document.querySelectorAll("img")[0];  // selecionando a tag img - [0] porque ele quer pegar a primeira tag img

image1.setAttribute("src", randomImageSource); // dizendo o que a tag image deve fazer = BEHAVIOR




var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;


var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Play 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!!";
}

}
