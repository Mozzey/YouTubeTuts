/* 

GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of remaining guesses
- Notify the player of the correct answer if they lose
- Let player choose to play again

*/

// Game values

let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI elements

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e) {
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);

  // Validate
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please Enter a Number between ${min} and ${max}`, 'red');
  }

  // Check if won

  if(guess === winningNum) {
    gameOver(true, `${winningNum} is correct! YOU WIN!`);
  } else {
    // Wrong number
    guessesLeft-=1;

    if(guessesLeft === 0) {
      // Gave Over - lost
      gameOver(false, `Game Over, you lost. The correct Number was ${winningNum}`);
    } else {
      // Game continues

      // Clear Input
      guessInput.value = '';

      // Tell user its the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }

  }
});

// Game Over
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';

  // Disable Input
  guessInput.disabled = 'true';
  // Change border green
  guessInput.style.borderColor = color;
  // Set text color
  message.style.color = color;
  // Set message
  setMessage(msg);

  // Play Again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

// Get winning num
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}