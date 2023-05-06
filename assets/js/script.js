/**
 * Decalring constants for the DOM elements
 * and possible choices
 */

const buttons = document.getElementsByClassName("planets");
const choices = ["planet1", "planet2", "planet3"];
//global variable for the computerAnswer
var computerAnswer = "";

/**
 *functions and definitions 
 *to hide happy and sad bart unless I want them displayed
 */

let happyBarts = document.getElementsByClassName("happybart");
let grumpyBarts = document.getElementsByClassName("grumpybart");

for (let happybart of happyBarts) {
    happybart.style.display = "none";
}

for (let grumpybart of grumpyBarts) {
    grumpybart.style.display = "none";
}


/**
 * gets computer choice on start game click. 
 * function to hide Bart every time it is click again(for a new game)
 * and get the computer choice and store it globally.
 */

const startGame = document.getElementById("start-game");
startGame.addEventListener("click", function () {
    for (let happybart of happyBarts) {
        happybart.style.display = "none";
    }

    for (let grumpybart of grumpyBarts) {
        grumpybart.style.display = "none";
    }
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]
    computerAnswer = computerChoice;
});


/**
 * Add event listener to the buttons
 * function to call on checkwinner function and the datatype
 */


for (let button of buttons) {

    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-type");
        checkWinner(playerChoice, computerAnswer);
    });

}

/**
 * checks winner on computer choice
 * and player choice 
 */
function checkWinner(playerChoice, computerAnswer) {
    if (playerChoice === computerAnswer) {
        let playerValue = document.querySelector(`[data-type = ${playerChoice}]`);
        let realBart = playerValue.querySelector(".happybart");
        realBart.style.display = "block";
        alert("Bart: thank you, you saved me!")
    } else {
        let computerValue = document.querySelector(`[data-type = ${computerAnswer}]`);
        let realBart = computerValue.querySelector(".grumpybart");
        realBart.style.display = "block";
        alert("Bart says: oh no, im sleeping With the frogs tonight");

    }

}


/**
 * button text change on click to display rules
 * function to display rules if none are displayed and hide them if they are
 */

let showRules = document.getElementById("show-rules");
let rules = document.getElementById("my-rules");
rules.style.display = "none";

showRules.addEventListener("click", function () {
    if (rules.style.display === "none") {
        rules.style.display = "block";
    } else
        rules.style.display = "none";

})



