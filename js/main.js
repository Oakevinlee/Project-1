/*----- constants -----*/
const wordBank = [
    'moon',
    'space',
    'stars',
    'sun',
    'nova',
    'asteroid',
    'jupiter',
    'deathstar'
  


];

const maxWrongGuess = 5;

  /*----- state variables -----*/
let answer;
let guess;
let gameStatus; //null, w,l
let wrongGuess;

  /*----- cached elements  -----*/
const msgEl = document.querySelector('.message');
const playButton = document.getElementById('play');
const guessEl = document.querySelector('.guessWord');
const letterBtn = [...document.querySelectorAll('article > button')]

  /*----- event listeners -----*/
document.querySelector('article').addEventListener('click', handleChoice);
playButton.addEventListener('click', init);
  /*----- functions -----*/

  //init all state, then render
init()

function init() {
  wrongGuess = [];
  const randomIdx = Math.floor(Math.random() * wordBank.length);
  console.log(answer);
  answer = wordBank[randomIdx].toUpperCase().split('')
  console.log(answer);
  guess = answer.map(ltr => ltr === ' ' ? ' ' : '_')
  gameStatus = null;
  render()
  // document.getElementById('picId').src="./img/spaceman-images/spaceman-1.jpg"
} 

function render() {
  renderMessage()
  guessEl.textContent = guess.join('')
  renderButton()
}

function renderMessage() {
  if (gameStatus === 'W') {
    msgEl.textContent = `Winner winner chicken dinner`;
   } else if (gameStatus === 'L') {
    msgEl.textContent = `Try again`;
    document.getElementById('picId').src="./img/spaceman-images/spaceman-1.jpg"
   } else {
    msgEl.textContent = `${maxWrongGuess - wrongGuess.length + 1} wrong guesses remain, good luck`;
    // document.getElementById('picId').src="./img/spaceman-images/spaceman-1.jpg"
   }
}

function renderButton() {
  letterBtn.forEach(function(btn) {
    const ltr = btn.textContent; // if wrong guesses includes ltr add a class name of wrong
    if (wrongGuess.includes(ltr)) {
      btn.className = 'wrong'
    } else if (guess.includes(ltr)) {
      btn.className = 'correct'
    } else {
      btn.className = '';
    }
  })
  playButton.style.visibility = gameStatus ? 'visible' : 'hidden'
}

function handleChoice(evt) {
  const ltr = evt.target.textContent
  if (   //guard
    gameStatus ||
    !letterBtn.includes(evt.target) ||
    wrongGuess.includes(ltr) ||
    guess.includes(ltr)
  ) return;

 if (answer.includes(ltr)) {
  //CORRECT GUESS
  answer.forEach(function(char, idx){
    if (char === ltr) guess[idx] = ltr
  });
} else {
  wrongGuess.push(ltr)
}

gameStatus = getGameStatus()
render();

}
 
function getGameStatus() {
  if (!guess.includes('_')) return 'W'
  if(wrongGuess.length > maxWrongGuess) return 'L'
  return null;
}

