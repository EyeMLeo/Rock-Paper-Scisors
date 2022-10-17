'use strict'
console.log('main.js');


/*
Player Opponent

paper rock          player wins
paper scissors      Oppoinent wins
paper paper         draw  

rock paper          Opponent wins
rock scissors       player wins
rock rock           draw

scissors paper      player wins
scissors rock       opponent wins
csissors scissors   draw
*/
// PLAYER RNUMBER TO SYMBOL
    // temporary maths
let playerNumber
playerNumber=(Math.random()*2+1).toFixed(0)
playerNumber=+playerNumber
// console.log(playerNumber)

let playerChoice;
if (playerNumber===1) {
    playerChoice="rock";
} else if (playerNumber===2) {
        playerChoice="paper";
} else if(playerNumber===3) {
    playerChoice="scissors";}
    
    console.log("player plays " +playerChoice)
// / PLAYER RNUMBER TO SYMBOL
// OPPONENT RNUMBER TO SYMBOL
let opponentNumber=(Math.random()*2+1).toFixed(0)
opponentNumber=+opponentNumber
// console.log(opponentNumber)

var opponentChoice;
if (opponentNumber===1) {
    opponentChoice="rock";
} else if (opponentNumber===2) {
        opponentChoice="paper";
} else if(opponentNumber===3) {
    opponentChoice="scissors";}
    
    console.log("opponent plays " +opponentChoice)
// /OPPONENT RNUMBER TO SYMBOL

// Who wins IFS

/*
Player Opponent

scissors rock       opponent wins

*/


if (playerChoice===opponentChoice) {
    console.log("It's a draw");
} else if(playerChoice==="paper"&&opponentChoice==="rock") {
    console.log('paper beats rock - player wins');
} else if(playerChoice==="paper"&&opponentChoice==="scissors") {
    console.log('rock beats paper - player looses');
} else if(playerChoice==="rock"&&opponentChoice==="paper") {
    console.log('paper beats rock - player looses');
} else if(playerChoice==="rock"&&opponentChoice==="scissors") {
    console.log('rock beats scissors - player wins');
} else if(playerChoice==="scissors"&&opponentChoice==="paper") {
    console.log('scissors beat paper - player wins');
} else if(playerChoice==="scissors"&&opponentChoice==="rock") {
    console.log('rock beat scissors - player looses');

}else{
    console.log('some error?');
    
}


// Function Ill NEED UNIVERSAL TO CALL


// function to call for opponents choice
function opponentChoiceF() {
        // I generate opponent number
    let opponentNumber=(Math.random()*2+1).toFixed(0);
opponentNumber=+opponentNumber
        // I make number to one of the symbols

if (opponentNumber===1) {
    opponentChoice="rock";
} else if (opponentNumber===2) {
        opponentChoice="paper";
} else if(opponentNumber===3) {
    opponentChoice="scissors";}
    
    console.log("opponent plays " +opponentChoice)
}



            // INSERT PLAYER CHOICE HERE
            function compare(playerChoice){
        // here I compare symbols
    if (playerChoice===opponentChoice) {
        document.getElementById("BattleZone").innerHTML = "It's a draw";
        document.getElementById("BattleZone").style.color = "gray";
    } else if(playerChoice==="paper"&&opponentChoice==="rock") {
        document.getElementById("BattleZone").innerHTML = 'paper beats rock - player wins';
        document.getElementById("BattleZone").style.color = "green";
    } else if(playerChoice==="paper"&&opponentChoice==="scissors") {
        document.getElementById("BattleZone").innerHTML = 'rock beats paper - player looses';
        document.getElementById("BattleZone").style.color = "red";
    } else if(playerChoice==="rock"&&opponentChoice==="paper") {
        document.getElementById("BattleZone").innerHTML = 'paper beats rock - player looses';
        document.getElementById("BattleZone").style.color = "red";
    } else if(playerChoice==="rock"&&opponentChoice==="scissors") {
        document.getElementById("BattleZone").innerHTML = 'rock beats scissors - player wins';
        document.getElementById("BattleZone").style.color = "green";
    } else if(playerChoice==="scissors"&&opponentChoice==="paper") {
        document.getElementById("BattleZone").innerHTML = 'scissors beat paper - player wins';
        document.getElementById("BattleZone").style.color = "green";
    } else if(playerChoice==="scissors"&&opponentChoice==="rock") {
        document.getElementById("BattleZone").innerHTML = 'rock beat scissors - player looses';
        document.getElementById("BattleZone").style.color = "red";
    
    }else{
        document.getElementById("BattleZone").innerHTML = 'some error?';
        
    }
    
}



/*
I press on symbol
it goes to javascript
it converts to var rock paper or scissors
Javascript generates Opponent answer
they are matched who wins
I get answer generated MAYBE SCORE
result goes to HTML 
ANSWER PRINTED ON HTML


KONFETI IF WON
MAYBE LIFE BARS

*/

// "playerChoiceRockF()"

function playerChoiceRockF() {
    document.getElementById("playerChoice").innerHTML = "Player chose ROCK";
    opponentChoiceF();
    document.getElementById("opponentChoice").innerHTML =  `Opponent chose ${opponentChoice.toUpperCase()}`;
   compare("rock");

  }

// "playerChoicePaperF()"
function playerChoicePaperF() {
    document.getElementById("playerChoice").innerHTML = "Player chose Paper";
    compare("paper");
    opponentChoiceF();
       document.getElementById("opponentChoice").innerHTML = `Opponent chose ${opponentChoice.toUpperCase()}`;
  }


// "playerChoiceScissorsF()"
function playerChoiceScissorsF() {
    document.getElementById("playerChoice").innerHTML = "Player chose Scissors";
    compare("scissors");
    opponentChoiceF();
    document.getElementById("opponentChoice").innerHTML = `Opponent chose ${opponentChoice.toUpperCase()}`;
}