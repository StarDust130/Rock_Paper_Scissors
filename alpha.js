
// Get the game buttons, result element, and score elements
const buttons = document.querySelectorAll('.button button');
const resultEl = document.querySelector('.result h2');
const refreshBtn = document.querySelector('.refresh');
const scoreHumanEl = document.querySelector('.score-human-value');
const scoreComputerEl = document.querySelector('.score-computer-value');

// Define the game choices and scores
const choices = ['Rock', 'Paper', 'Scissors'];
let scoreHuman = 0;
let scoreComputer = 0;

// Add click event listeners to the game buttons
buttons.forEach(button => {
  button.addEventListener('click' , () => {
    // Get the user's choice
    const userChoice = button.textContent;

    // Get the computer's choice
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Determine the winner
    let result;
    if (userChoice === computerChoice) {
      result = 'Tie';
    } else if (
      (userChoice === 'Rock' && computerChoice === 'Scissors') ||
      (userChoice === 'Paper' && computerChoice === 'Rock') ||
      (userChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
      result = 'You win';
      scoreHuman++;
    } else {
      result = 'You lose';
      scoreComputer++;
    }

    // Update the score board
    scoreHumanEl.textContent = scoreHuman;
    scoreComputerEl.textContent = scoreComputer;

    // Display the result
    resultEl.textContent = `Result = ${result}`;
    humanScoreEl.textContent = humanScore;
    computerScoreEl.textContent = scoreComputer;
  });
});

// Add click event listener to the refresh button
refreshBtn.addEventListener('click', () => {
  location.reload();
});