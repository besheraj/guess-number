let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => 
{
    return Math.floor(Math.random() * 10) 
}
const compareGuesses = (humanScore,computerScore,targetGuess) => {
  if (Math.abs(humanScore-targetGuess)>Math.abs(computerScore-targetGuess)) 
  {return false} 
  else if (Math.abs(humanScore-targetGuess)<Math.abs(computerScore-targetGuess)) 
  {return true} 
  else {return true}
};
const updateScore = winner => {
    if (winner === 'human') {
      humanScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
  }

  const advanceRound = () => currentRoundNumber++;