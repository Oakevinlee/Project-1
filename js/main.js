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
let wrongGuesses;
let gameStatus;


  /*----- cached elements  -----*/
const msgEl = document.querySelector.apply('.message');
const playButton = document.getElementById('play');
const livesLeft = document.getElementById('.attempts');
const letter

  /*----- event listeners -----*/


  /*----- functions -----*/

  //init all state, then render

intialize() {

function init() {
  wrongGuesses = [];
  const randomWord = Math.floor(Math.random * words.length);
  randomWord = 

}

function renderMessage() {
  if (gameStatus === 'W') {
    msgEL.textContent = `Winner winner chicken dinner`;
   } else if (gameStatus === 'L') {
   } else {
    msgEl.textContent = ~z{maxWrong - wrongGuesses.length + 1}
   }
}


function renderButton() {
  letterBtn.forEach(function(button){
    const ltr = btn.textContent; // if wrong guesses includes ltr add a class name of wrong
    if (wrongGuesses.includes(ltr)) {
      button.className = 'wrong'
    } else if (guess.includes(ltr)) {
      button.className = 'correct'
    } else {
      button.className = '';
    }
  })
  playButton.style.visibility = gameStatus ? 'visible' : 'hidden'
}



function handleChoice(evt) {
  const ltr = event.target.textContent
  if (
    gameStatus ||
    !button.includes(evt.target) ||
    numWrongGuesses.includes(ltr) ||
    guesses.includes(ltr)
 
  ) return;

} if (secretWord.includes(ltr)) {
  // correct guess
  randomWord.forEach(function(char, idx){
    if (char === ltr) guess[idx] = ltr
  });
} else {
  wrongGuesses.push(ltr)
}

gameStatus = getGameStatus()
render();

}
 
function getGameStatus() {
  if (!guess.includes('_')) return 'W'
  if(wrongGuesses.length > maxWrongGuess) return 'L'
  return null;
}

