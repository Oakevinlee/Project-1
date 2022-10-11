/*----- constants -----*/
const wordBank = [
    'moon',
    'space',
    'stars',
    'sun',
    'nova'

];

const maxWrongGuess = 6;

  /*----- state variables -----*/
let answer;
let guess;
let gameStatus;
let wrongGuess;

  /*----- cached elements  -----*/
const msgEl = document.querySelector('.message');
const playButton = document.getElementById('play');
const guessEl = document.querySelector('.guessWord');
const letterBtn = [...document.querySelectorAll('article > button')]

  /*----- event listeners -----*/
// document.querySelector('article').addEventListener('click', handleChoice);
playButton.addEventListener('click', init);
  /*----- functions -----*/

  //init all state, then render
init()

function init() {
  wrongGuesses = []
  const randomIdx = Math.floor(Math.random() * wordBank.length);
  console.log(answer);
  answer = wordBank[randomIdx].toUpperCase().split('')
  console.log(answer);
  guess = answer.map(ltr => ltr === ' ' ? ' ' : '_')
  gameStatus = null;
  render()
} 

function render() {
  renderMessage()
  guessEl.textContent = guess.join('')
}

function renderMessage() {
  if (gameStatus === 'W') {
    msgEL.textContent = `Winner winner chicken dinner`;
   } else if (gameStatus === 'L') {
    msgEL.textContent = `Try again`;
   } else {
    msgEl.textContent = `${maxWrongGuess - wrongGuesses.length}wrong guesses remain, good luck`
   }
}


// function renderButton() {
//   letterBtn.forEach(function(button){
//     const ltr = btn.textContent; // if wrong guesses includes ltr add a class name of wrong
//     if (wrongGuesses.includes(ltr)) {
//       button.className = 'wrong'
//     } else if (guess.includes(ltr)) {
//       button.className = 'correct'
//     } else {
//       button.className = '';
//     }
//   })
//   playButton.style.visibility = gameStatus ? 'visible' : 'hidden'
// }



// function handleChoice(evt) {
//   const ltr = event.target.textContent
//   if (
//     gameStatus ||
//     !button.includes(evt.target) ||
//     numWrongGuesses.includes(ltr) ||
//     guesses.includes(ltr)
 
//   ) return;

// } if (secretWord.includes(ltr)) {
//   // correct guess
//   randomWord.forEach(function(char, idx){
//     if (char === ltr) guess[idx] = ltr
//   });
// } else {
//   wrongGuesses.push(ltr)
// }

// gameStatus = getGameStatus()
// render();

// }
 
function getGameStatus() {
  if (!guess.includes('_')) return 'W'
  if(wrongGuesses.length > maxWrongGuess) return 'L'
  return null;
}

