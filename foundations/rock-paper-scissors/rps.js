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
    // stub
}

list = document.querySelector("div.container");
result = document.querySelector(".result");
const text = document.createElement("div");
text.classList = "winner";
replay = document.createElement("button");
replay.classList = "replay";
let x = 1;
playGame();
function playGame() {
    let user = 0, bot = 0;
    reset = document.querySelector(".buttons2 .reset");
    reset.addEventListener("click", () => {
        round.textContent = "";
        text.remove();
        replay.remove();
        user = bot = 0;
        p1.textContent = "";
        p2.textContent = "";
        x=1
    });

    playerChoice = document.querySelectorAll("button.player");
    playerChoice.forEach((button) => {
        button.addEventListener("mouseenter", () => {
            if (user !== 2 && bot !== 2) {
                button.classList.add("user-hover");
            }
        });
    });
    playerChoice.forEach((button) => {
        button.addEventListener(("mouseleave"), () => {
            if (user !== 2 && bot !== 2) {
                button.classList.remove("user-hover");
            }
        });
    });
    playerChoice.forEach((button) => {
        button.addEventListener("click", () => {
            if (user !== 2 && bot != 2) {
                console.log(user, bot)
                let player;
                switch(button.className) {
                    case "player rock user-hover":
                        player = "Rock";
                        break;
                    case "player scissors user-hover":
                        player = "Scissors";
                        break;
                    default:
                        player = "Paper";
                }
                let point = playRound(player);
                if (point === 1) {
                    user++;
                } else if (point === 2) {
                    bot++;
                }
                if (user === 2 || bot === 2) {
                    button.classList.remove("user-hover");
                    if (user === 2) {
                        console.log(`HUMAN WIN! SCORE: ${user} to ${bot}`);
                        text.textContent = "YOU WIN!";
                    } else if (bot === 2) {
                        console.log(`HUMANS LOSE! SCORE: ${user} to ${bot}`);
                        text.textContent = "YOU LOST!";
                    }
                    result.appendChild(text); // text and replay should be bundled together in a popup
                    replay.textContent = "Play Again???";
                    result.appendChild(replay);
                    replay.addEventListener("click", () => {
                        text.remove();
                        round.textContent = "";
                        replay.remove();
                        p1.textContent = "";
                        p2.textContent = "";
                        user = bot = 0;
                        x=1;
                    });
                    // dynamically create rps buttons, remove them and replace with 
                    // replay button when game ends. OR make it so that clicking on 
                    // the buttons does not do anything OR add a POPUP that covers it
                }
            }   
        });
    });
}

const round = document.querySelector(".counter");
round.classList = "round"
p1 = document.querySelector(".choice1");
p2 = document.querySelector(".choice2");
function playRound(player) {
    bot = getComputerChoice();
    winner = 0;
    /*
    winner: 
      0 - tie
      1 - player
      2 - computer
    */
    switch(player) {
        case "Rock":
            if (bot === "scissors") {
                winner = 1;
            } else if (bot === "paper") {
                winner = 2;
            }
            break;
        case "Paper":
            if (bot === "rock") {
                winner = 1;
            } else if (bot === "scissors") {
                winner = 2;
            }
            break;
        default:
            if (bot === "paper") {
                winner = 1;
            } else if (bot === "rock") {
                winner = 2;
            }
    }
    p1.textContent = player.slice(0,1).toUpperCase() + player.slice(1);
    p2.textContent = bot.slice(0,1).toUpperCase() + bot.slice(1);
    results = ["ties with", "beats", "loses to"];
    console.log(`player picks: "${player}"`);
    console.log(`computer picks: "${bot}"`);
    round.textContent = `Round ${x} Result: ${player} ${results[winner]} ${bot}!`;
    x++;
    return winner;
}

github = document.querySelector(".git");
github.addEventListener("click", () => {
    window.open("https://github.com/BryceI667/odin-project", "blank", "noopener noreferrer");
});