const wordBank = [
  'moon',
  'space',
  'stars',
  'sun',
  'nova',
  'asteroid',
  'jupiter',
  'deathstar',
  'venus',
];

const maxWrongGuess = 5;

let answer;
let guess;
let gameStatus;
let wrongGuess;

const msgEl = document.querySelector('.message');
const playButton = document.getElementById('play');
const guessEl = document.querySelector('.guessWord');
const letterBtn = [...document.querySelectorAll('article > button')]
const spacemanEl = document.getElementById('spaceman');

document.querySelector('article').addEventListener('click', handleChoice);
playButton.addEventListener('click', init);

init()

function init() {
  wrongGuess = [];
  spacemanEl.classList.remove('hide')
  const randomIdx = Math.floor(Math.random() * wordBank.length);
  console.log(answer);
  answer = wordBank[randomIdx].toUpperCase().split('')
  console.log(answer);
  guess = answer.map(ltr => ltr === ' ' ? ' ' : '_')
  gameStatus = null;
  render()
} 

function render() {
  renderMessage();
  guessEl.textContent = guess.join('');
  renderButton();
  console.log(wrongGuess.length);
  if (wrongGuess.length < 6) {
    spacemanEl.src = `img/spaceman-images/spaceman-${wrongGuess.length}.jpg`;
  } else if(wrongGuess.length === 6) {
    spacemanEl.classList.add('hide');
  }
}

function renderMessage() {
  if (gameStatus === 'W') {
    msgEl.textContent = `Winner winner chicken dinner!`;
   } else if (gameStatus === 'L') {
    msgEl.textContent = `Try again`;
   } else {
    msgEl.textContent = `${maxWrongGuess - wrongGuess.length + 1} guesses remain`;
  }
}

function renderButton() {
  letterBtn.forEach(function(btn) {
    const ltr = btn.textContent;
    if (wrongGuess.includes(ltr)) {
      btn.className = 'wrong';
    } else if (guess.includes(ltr)) {
      btn.className = 'correct';
    } else {
      btn.className = '';
    }
  });
  playButton.style.visibility = gameStatus ? 'visible' : 'hidden';
}

function handleChoice(evt) { 
  const ltr = evt.target.textContent;
  if (   
    gameStatus ||
    !letterBtn.includes(evt.target) ||
    wrongGuess.includes(ltr) ||
    guess.includes(ltr)
  ) return;

  if (answer.includes(ltr)) {
    answer.forEach(function(char, idx){
      if (char === ltr) guess[idx] = ltr
    }); 
  } else {
    wrongGuess.push(ltr)
  }

  gameStatus = getGameStatus();
  render();
}
 
function getGameStatus() {
  if (!guess.includes('_')) return 'W'
  if(wrongGuess.length > maxWrongGuess) return 'L'
  return null;
}
