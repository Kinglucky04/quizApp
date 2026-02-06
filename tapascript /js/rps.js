 const rockBtn = document.querySelector(".rock");
 const paperBtn = document.querySelector(".paper");
  const scissorsBtn = document.querySelector(".scissors");

 function humanMove(playerMove){
    let computerMove = computerGame();
    let result = "";

    if (computerMove === "rock"){
        if(playerMove === "rock"){
            result = "tie";
        }else if(playerMove === "paper"){
            result = "you win"
        }else if (playerMove === "scissors"){
            result = "you loose";
        }
    }else if (computerMove === "paper"){
        if(playerMove === "rock"){
            result = "you lose";
        }else if (playerMove === "paper"){
            result = "tie";
        }else if (playerMove === "scissors"){
            result = "you win";
        }
    }else if (computerMove === "scissors"){
        if(playerMove === "rock"){
            result = "you win";
        }else if (playerMove === "paper"){
            result = "you lose";
        }else if (playerMove === "scissors"){
            result = "tie";
        }
    }

    console.log(`Computer played: ${computerMove}. You played: ${playerMove}. Result: ${result}`);
 }

function computerGame() {
    let randonNumber = Math.random();
    let computerGame = "";

    if (randonNumber > 0 && randonNumber < 1 / 3){
        computerGame = "rock";
    }else if(randonNumber > 1 / 3 && randonNumber < 2 / 3){
        computerGame = "paper";
    }else if(randonNumber > 2 / 3 && randonNumber < 3){
        computerGame = "scissors";
    }

    return computerGame;
}


rockBtn.addEventListener("click", () => {
    humanMove("rock");
});

paperBtn.addEventListener("click", () => {
    humanMove("paper");
});

scissorsBtn.addEventListener("click", () => {
    humanMove("scissors");
});