let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (humanGuess, computerGuess, generateTarget) => {
  let computerTargetDiff = Math.abs(computerGuess - generateTarget);
  let humanTargetDiff = Math.abs(humanGuess - generateTarget);
  if(humanTargetDiff <= computerTargetDiff) {
    return true;
  } else if (humanTargetDiff > computerTargetDiff){
    return false;
  }
};

const updateScore = (winner) => {
  if(winner.toLowerCase() === "human") {
    humanScore++;
  }else if(winner.toLowerCase() === "computer") {
    computerScore++;
  }
  
}

const advanceRound = () => {
  currentRoundNumber++;
}