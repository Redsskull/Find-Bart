/**
 * Decalring constants for the DOM elements
 * and possible choices
 */

const buttons = document.getElementsByClassName("planets");
const choices = ["planet1", "planet2", "planet3"];
var computerAnswer = "";
/**
 *functions and definitions 
 *to hide happy and sad bart unless I want them displayed
 */
let happyBarts = document.getElementsByClassName("happybart");
let grumpyBarts = document.getElementsByClassName("grumpybart");

for (let happybart of happyBarts){
    happybart.style.display = "none";
}

for (let grumpybart of grumpyBarts){
    grumpybart.style.display = "none";
}


/**
 * gets computer choice
 * on start game
 */

const startGame = document.getElementById("start-game");
startGame.addEventListener("click", function(){
    for (let happybart of happyBarts){
        happybart.style.display = "none";
    }
    
    for (let grumpybart of grumpyBarts){
        grumpybart.style.display = "none";
    }
    let computerChoice = choices[Math.floor(Math.random()*choices.length)]
    console.log(computerChoice);
    computerAnswer = computerChoice;
});



/**
 * Add event listener to the buttons
 */


for (let button of buttons) {

    button.addEventListener("click", function ()  {
        let playerChoice = this.getAttribute("data-type");
        checkWinner(playerChoice, computerAnswer);
    }); 

}

/**
 * checks winner on computer choice
 * and player choice 
 */
function checkWinner(playerChoice, computerAnswer){
    console.log(computerAnswer);
    console.log(playerChoice);
    if (playerChoice === computerAnswer){
      let playerValue = document.querySelector(`[data-type = ${playerChoice}]`);
      console.log(playerValue);
      let realBart = playerValue.querySelector(".happybart");
      realBart.style.display = "block";
      alert("Bart: thank you, you saved me!")
    }else{
      let computerValue = document.querySelector(`[data-type = ${computerAnswer}]`);
      console.log(computerValue);
      let realBart = computerValue.querySelector(".grumpybart");
      realBart.style.display = "block";
      alert("Bart says: oh no, im sleeping With the frogs tonight");

    }

}



/**
 * button text change on click to display rules
 */
let showRules = document.getElementById("show-rules");
let rules = document.getElementById("my-rules");
rules.style.display = "none";

showRules.addEventListener("click", function(){
    if (rules.style.display === "none") {
        rules.style.display = "block";
    }else
   rules.style.display = "none";

})



