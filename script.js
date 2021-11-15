'use strict';

console.log(document.querySelector('.message').textContent);

// 72. Selecting and Manipulating Elements

// document.querySelector('.message').textContent = 'Correct number! 🎉';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 500000;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// 70 - 78

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;

let score = Number(document.querySelector('.score').textContent);
let highScore = Number(document.querySelector('.highscore').textContent);
console.log(score, highScore);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('😡 No number!');

    console.log(guess !== secretNumber);
    // When guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct number!');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        `${guess > secretNumber ? '📈 Too high!' : '📉 Too low!'}`
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      if (score > 0) score--;
      document.querySelector('.score').textContent = score;
      displayMessage('😓 You lost the game!');
    }
  }
});

//Again! button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  //   document.querySelector('.number').textContent = secretNumber;

  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
});
