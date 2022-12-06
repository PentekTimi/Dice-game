var randomNumber1 = Math.floor(Math.random() * 6) +1;
// console.log(randomNumber1)
var randomNumber2 = Math.floor(Math.random() * 6) +1;
// console.log(randomNumber2)

var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");
image1.setAttribute("src",'images/dice'+randomNumber1+'.png')
image2.setAttribute("src",'images/dice'+randomNumber2+'.png')


// function whoWins () {
//     var text = document.querySelector("h1");
    if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw";
    } else if(randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 wins";
    } else {
        document.querySelector("h1").innerHTML = "Player 2 wins";
    } 
// }
// whoWins();
