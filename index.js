var arr =["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]
var randomNumber1 =Math.floor((Math.random()*6));
 var randomNumber2 =Math.floor((Math.random()*6));

function choosepic(){
 
 document.querySelector(".img2").setAttribute("src", arr[randomNumber2])

  document.querySelector(".img1").setAttribute("src", arr[randomNumber1]);
   
  
}
choosepic()
if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
   }

   else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML
                    = (" player 2 WINS!");
    }

    else {
    document.querySelector("h1").innerHTML
                    = ("player1  WINS!");
   }