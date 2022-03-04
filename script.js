// const userInput = document.querySelector("input").value;
// const btn = document.querySelector("#submit");
// btn.addEventListener("click", playerPlay);

function computerPlay() {
    const arr = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random()*3);
    return arr[random];
}

// document.querySelector("#submit").addEventListener("click", playRound)

function playerPlay() {
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    if (playerChoice.toLowerCase() === "rock") {
        playerChoice = "Rock";
    } else if (playerChoice.toLowerCase() === "paper") {
        playerChoice = "Paper";
    } else if (playerChoice.toLowerCase() === "scissors") {
        playerChoice = "Scissors";
    } else {
        alert("Please choose rock, paper, or scissors.")
        playerChoice = playerPlay();
    }
    return playerChoice;
}

const TIE = "It's a tie!";

// const playerSelection = "rock";
// playerSelection = prompt("Rock, Paper, or Scissors?");
// let playerSelection = prompt("Rock, Paper, or Scissors?");
// console.log(typeof(playerSelection));

function playRound(playerSelection, computerSelection) {
    playerSelection = playerPlay().toLowerCase();
    computerSelection = computerPlay();
    // playerSelection = prompt("Rock, Paper, or Scissors?");
    // let playerSel = playerselection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors!";
    } else if (playerSelection === "rock" && computerSelection === "Rock") {
        return TIE;
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        return "You lose! Paper beats Rock!";
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats Paper!";
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock!";
    } else if (playerSelection === "paper" && computerSelection === "Paper") {
        return TIE;
    } else if (playerSelection === "scissors" && computerSelection === "Scissors") {
        return TIE;
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats Scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats Paper";
    }
}

// function playRound(playerSelection, computerSelection) {
//     // playerSelection = prompt("Rock, Paper, or Scissors?");
//     // let playerSel = playerselection.toLowerCase();
//     if (playerSelection.match(/rock/i) && computerSelection === "Scissors") {
//         return "You win! Rock beats Scissors!";
//     } else if (playerSelection.match(/rock/i) && computerSelection === "Rock") {
//         return "It's a tie!";
//     } else if (playerSelection.match(/rock/i) && computerSelection === "Paper") {
//         return "You lose! Paper beats Rock!";
//     } else if (playerSelection.match(/paper/i) && computerSelection === "Scissors") {
//         return "You lose! Scissors beats Paper!";
//     } else if (playerSelection.match(/paper/i) && computerSelection === "Rock") {
//         return "You win! Paper beats Rock!";
//     } else if (playerSelection.match(/paper/i) && computerSelection === "Paper") {
//         return "It's a tie!";
//     } else if (playerSelection.match(/scissors/i) && computerSelection === "Scissors") {
//         return "It's a tie!";
//     } else if (playerSelection.match(/scissors/i) && computerSelection === "Rock") {
//         return "You lose! Rock beats Scissors!";
//     } else if (playerSelection.match(/scissors/i) && computerSelection === "Paper") {
//         return "You win! Scissors beats Paper";
//     }
// }


// console.log(playRound(playerSelection, computerSelection));

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 3 && computerScore < 3) {
        let result = playRound();
        if (result.includes("win")) {
            playerScore += 1;
        } else if (result.includes("lose")) {
            computerScore += 1;
        } 
        console.log(result, playerScore, computerScore);
    }
    
    if (playerScore === 3) {
        console.log("You won against the computer!");
    } else if (computerScore === 3) {
        console.log("You lost against the computer!");
    }
}

// else if (playerScore === 3) {
//     console.log("You win against the computer!");
//     break;

//     else if (computerScore === 3) {
//         console.log("You lose against the computer!");    

    // for (let i = 0; i < num; i++) {
    //     let result = playRound();
    //     if (result.includes("win")) {
    //         playerScore += 1;
    //     } else if (playerScore === 3) {
    //         console.log("You win against the computer!");
    //         break;
    //     } else if (result.includes("lose")) {
    //         computerScore += 1;
    //     } else if (computerScore === 3) {
    //         console.log("You lose against the computer!");
    //         break;
    //     }
    //     console.log(result, playerScore, computerScore);
        
        // if (playRound().includes("win")) {
        //     playerScore += 1;
        // } else if (playRound().includes("lose")) {
        //     computerScore += 1;
        // }
//     }
// }
