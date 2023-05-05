/**
 * Decalring constants for the DOM elements
 * and possible choices
 */

const buttons = document.getElementsByClassName("planets");
const score = document.getElementById("score-area");
const choices = ["planet1", "planey2", "planet3"];



/**
 * Add event listener to the buttons
 */



for (let button of buttons) {

    button.addEventListener("click", function ()  {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice)
    });

}

/**
 * The game. accepts the player choice from 
 * the data-choice
 */

function playGame(playerChoice) {
    let computerChoice = math.floor(Math.random() * 3);


    let result = checkWinner(choices[computerChoice.choice], choices[playerChoice]);

    updateScore(result);
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



