const grass = document.getElementById("grass")
const fire = document.getElementById("fire")
const water = document.getElementById("water")
const playerSel = document.getElementById("playerSel")
const rivalSel = document.getElementById("rivalSel")
const h3 = document.getElementById("outcome")
const pScore = document.getElementById("playerScore")
const rScore = document.getElementById("rivalScore")

grass.addEventListener("click", pickGrass)
grass.addEventListener("click", computerPlay)
grass.addEventListener("click", playRound)
fire.addEventListener("click", pickFire)
fire.addEventListener("click", computerPlay)
fire.addEventListener("click", playRound)
water.addEventListener("click", pickWater)
water.addEventListener("click", computerPlay)
water.addEventListener("click", playRound)

function pickGrass() {
    const imgArr = [];
    for (i = 0; i <= 7; i++) {
        imgArr[i] = new Image();
        imgArr[i].src = `images/1-${i + 1}.png`;
    }
    let random = Math.floor(Math.random() * 8);
    playerSel.src = imgArr[random].src;
}

function pickFire() {
    const imgArr = [];
    for (i = 0; i <= 7; i++) {
        imgArr[i] = new Image();
        imgArr[i].src = `images/2-${i + 1}.png`;
    }
    let random = Math.floor(Math.random() * 8);
    playerSel.src = imgArr[random].src;
}

function pickWater() {
    const imgArr = [];
    for (i = 0; i <= 7; i++) {
        imgArr[i] = new Image();
        imgArr[i].src = `images/3-${i + 1}.png`;
    }
    let random = Math.floor(Math.random() * 8);
    playerSel.src = imgArr[random].src;
}

let playerScore = 0;
let rivalScore = 0;

function computerPlay() {
    const arr = [1, 2, 3];
    let randomType = Math.floor(Math.random() * 3);
    let randomStarter = Math.ceil(Math.random() * 8);
    if (arr[randomType] === 1) {
        rivalSel.src = `images/1-${randomStarter}.png`;
    } else if (arr[randomType] === 2) {
        rivalSel.src = `images/2-${randomStarter}.png`;
    } else if (arr[randomType] === 3) {
        rivalSel.src = `images/3-${randomStarter}.png`;
    }
}

function playRound(playerChoice, rivalChoice) {
    if (playerSel.src.includes("1-")) {
        playerChoice = "Grass";
    } else if (playerSel.src.includes("2-")) {
        playerChoice = "Fire";
    } else if (playerSel.src.includes("3-")) {
        playerChoice = "Water";
    };

    if (rivalSel.src.includes("1-")) {
        rivalChoice = "Grass";
    } else if (rivalSel.src.includes("2-")) {
        rivalChoice = "Fire";
    } else if (rivalSel.src.includes("3-")) {
        rivalChoice = "Water";
    };

    if (playerChoice === rivalChoice) {
        h3.textContent = "It's a draw!";
    } else if (
        playerChoice === "Grass" && rivalChoice === "Water" || 
        playerChoice === "Water" && rivalChoice === "Fire" || 
        playerChoice === "Fire" && rivalChoice === "Grass") {
        h3.textContent = `You win! ${playerChoice} beats ${rivalChoice}!`;
        playerScore += 1;
        pScore.textContent = "Player Score: " + playerScore;
    } else if (
        playerChoice === "Grass" && rivalChoice === "Fire" || 
        playerChoice === "Fire" && rivalChoice === "Water" || 
        playerChoice === "Water" && rivalChoice === "Grass") {
        h3.textContent = `You lose! ${rivalChoice} beats ${playerChoice}!`;
        rivalScore += 1;
        rScore.textContent = "Rival Score: " + rivalScore;
    }

    if (playerScore === 5) {
        h3.innerHTML = 'You are the first to 5 wins! You beat your rival! <button onclick=endGame()>Click here to play again!</button>';
        h3.style.color = "red";
        grass.removeEventListener("click", pickGrass)
        grass.removeEventListener("click", computerPlay)
        grass.removeEventListener("click", playRound)
        fire.removeEventListener("click", pickFire)
        fire.removeEventListener("click", computerPlay)
        fire.removeEventListener("click", playRound)
        water.removeEventListener("click", pickWater)
        water.removeEventListener("click", computerPlay)
        water.removeEventListener("click", playRound)
    } else if (rivalScore === 5) {
        h3.innerHTML = 'Your rival is the first to 5 wins! Your rival beat you! <button onclick=endGame()>Click here to play again!</button>';
        h3.style.color = "red";
        grass.removeEventListener("click", pickGrass)
        grass.removeEventListener("click", computerPlay)
        grass.removeEventListener("click", playRound)
        fire.removeEventListener("click", pickFire)
        fire.removeEventListener("click", computerPlay)
        fire.removeEventListener("click", playRound)
        water.removeEventListener("click", pickWater)
        water.removeEventListener("click", computerPlay)
        water.removeEventListener("click", playRound)
    }

    // if (h3.textContent.includes("5 wins")) {
    //     endGame();
    // }
}

function endGame() {
    playerScore = 0;
    rivalScore = 0;

    playerSel.src = "images/ditto-flip.gif";
    rivalSel.src = "images/ditto.gif";

    h3.textContent = "Grass beats Water, Water beats Fire, Fire beats Grass";
    h3.style.color = "black";

    pScore.textContent = "Player Score: " + playerScore;
    rScore.textContent = "Rival Score: " + rivalScore;

    grass.addEventListener("click", pickGrass)
    grass.addEventListener("click", computerPlay)
    grass.addEventListener("click", playRound)
    fire.addEventListener("click", pickFire)
    fire.addEventListener("click", computerPlay)
    fire.addEventListener("click", playRound)
    water.addEventListener("click", pickWater)
    water.addEventListener("click", computerPlay)
    water.addEventListener("click", playRound)
}


// function computerPlay() {
//     const arr = ["Rock", "Paper", "Scissors"];
//     let random = Math.floor(Math.random()*3);
//     return arr[random];
// }

// document.querySelector("#submit").removeEventListener("click", playRound)

// function playerPlay() {
//     let playerChoice = prompt("Rock, Paper, or Scissors?");
//     if (playerChoice.toLowerCase() === "rock") {
//         playerChoice = "Rock";
//     } else if (playerChoice.toLowerCase() === "paper") {
//         playerChoice = "Paper";
//     } else if (playerChoice.toLowerCase() === "scissors") {
//         playerChoice = "Scissors";
//     } else {
//         alert("Please choose rock, paper, or scissors.")
//         playerChoice = playerPlay();
//     }
//     return playerChoice;
// }

// function playerPlay() {
//     let playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
//     if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
//         alert("Please choose rock, paper, or scissors.")
//         playerChoice = playerPlay();
//     }
//     return playerChoice;
// }

// const TIE = "It's a tie!";

// const playerSelection = "rock";
// playerSelection = prompt("Rock, Paper, or Scissors?");
// let playerSelection = prompt("Rock, Paper, or Scissors?");
// console.log(typeof(playerSelection));

// function playRound(playerSelection, computerSelection) {
//     playerSelection = playerPlay().toLowerCase();
//     computerSelection = computerPlay();
//     // playerSelection = prompt("Rock, Paper, or Scissors?");
//     // let playerSel = playerselection.toLowerCase();
//     if (playerSelection === "rock" && computerSelection === "Scissors") {
//         return `You win! Rock beats ${computerSelection}!`;
//     } else if (playerSelection === "rock" && computerSelection === "Rock") {
//         return TIE;
//     } else if (playerSelection === "rock" && computerSelection === "Paper") {
//         return `You lose! ${computerSelection} beats Rock!`;
//     } else if (playerSelection === "paper" && computerSelection === "Scissors") {
//         return `You lose! ${computerSelection} beats Paper!`;
//     } else if (playerSelection === "paper" && computerSelection === "Rock") {
//         return `You win! Paper beats ${computerSelection}!`;
//     } else if (playerSelection === "paper" && computerSelection === "Paper") {
//         return TIE;
//     } else if (playerSelection === "scissors" && computerSelection === "Scissors") {
//         return TIE;
//     } else if (playerSelection === "scissors" && computerSelection === "Rock") {
//         return `You lose! ${computerSelection} beats Scissors!`;
//     } else if (playerSelection === "scissors" && computerSelection === "Paper") {
//         return `You win! Scissors beats ${computerSelection}`;
//     }
// }

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

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;

//     while (playerScore < 3 && computerScore < 3) {
//         let result = playRound();
//         if (result.includes("win")) {
//             playerScore += 1;
//         } else if (result.includes("lose")) {
//             computerScore += 1;
//         } 
//         console.log(result, playerScore, computerScore);
//     }
    
//     if (playerScore === 3) {
//         console.log("You won against the computer!");
//     } else if (computerScore === 3) {
//         console.log("You lost against the computer!");
//     }
// }

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
