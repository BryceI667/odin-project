function getComputerChoice() { // returns a string "rock" "paper" or "scissors"
    /* 
    Returns a string between rock, paper, and scissors

    Parameters:
    none

    Implementation:
    For teaching purposes, a number is first randomly generated between 0-2
    then is converted to a string. To reduce the amount of steps, we could just
    return a number between 0-2 and maintain the logic using the set {0,1,2}
    to represent {rock, paper, scissors} since the player does not care how it is
    implemented.
    */ 
    let num = Math.floor((Math.random() * 3));
    let res = "";
    switch(num) {
        case 0:
            res = "rock";
            break;
        case 1:
            res = "paper";
            break;
        default:
            res = "scissors";
    }
    return res;
}

function getHumanChoice() {
    // uses a basic string technique to allow for weird capitalizations
    let choices = new Set(["rock", "paper", "scissors"]);
    let choice = prompt("TYPE ROCK PAPER OR SCISSORS!").toLowerCase();
    while (!choices.has(choice)){
        choice = prompt("please pick rock paper or scissors!").toLowerCase();
    }
    return choice;
}

function playGame() {
    function playRound() {
        let guy = getHumanChoice();
        let bot = getComputerChoice();
        let winner = 0; // 1 for guy, 2 for bot, 0 for tie
        switch (guy) { // all logic is based off of guy, not the bot
            case "rock":
                if (bot == "scissors") {
                    winner = 1;
                } else if (bot =="paper") {
                    winner = 2;
                }
                break;
            case "paper":
                if (bot == "rock") {
                    winner = 1;
                } else if (bot == "scissors") {
                    winner = 2;
                }
                break;
            default:
                if (bot == "paper") {
                    winner = 1;
                } else if (bot == "rock") {
                    winner = 2;
                }
        }
        switch (winner) {
            case 1:
                console.log("player wins!");
                human++;
                break;
            case 2:
                console.log("computer wins!");
                computer++;
                break;
            default:
                console.log("tie!");
        }
    }
    let human = 0, computer = 0;
    let score = prompt("play to what score?");
    while ((human < score) && (computer < score)) {
        playRound();
    }
    if (human > computer) {
        console.log("WINNER: HUMAN!");
    } else if (computer > human) {
        console.log("WINNER: COMPUTER!");
    } else {
        console.log("TIE!");
    }
    console.log(`SCORE: HUMAN got ${human} and the COMPUTER got ${computer}`);
    return;
}

playGame();

// function test() { 
//     let a = 20;
//     function add() {
//         a++;
//     }
//     for (let i = 0; i < 3; i++) {
//         console.log(a);
//         add();
//     }
// }
// test();