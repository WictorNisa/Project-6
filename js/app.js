const words = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const mainButton = document.querySelector('.btn__reset');
const overLay = document.getElementById('overlay');
const ul = document.querySelector('#phrase ul');
const point = document.body.style.cursor = "pointer";
const letter = document.getElementsByClassName('letter');
const title = document.querySelector('.title');
const image = document.querySelectorAll('img');
let missed = 0;


mainButton.addEventListener('click', () => {
  overlay.style.display = "none";
});


let phrases = [
  "like a fish out of water",
  "a little bird told me",
  "needle in a haystack",
  "your eyes are bigger than your stomach",
  "take it with a grain of salt"
];


function getRandomPhraseArray(arr){
  let randomPhrase = arr[Math.floor(Math.random() * arr.length)];
  let randSplit = randomPhrase.split('');
  return randSplit;
}

const phraseArray = getRandomPhraseArray(phrases);
addPhraseToDisplay(phraseArray);

function addPhraseToDisplay(arr){
  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
      li.textContent = arr[i];
      ul.appendChild(li);
      if (arr[i] != ' ') {
        li.classList.add("letter");
      } else {
        li.classList.add("space");
      }
  }
}

function checkLetter(button) {
  let guessed = null;
  for(let i = 0; i < letter.length; i++) {
    if (button.target.textContent === letter[i].textContent) {
      guessed = true;
      letter[i].classList.add("show");
      } 
    }
    return guessed;
  }

function checkWin() {
  const show = document.querySelectorAll('.show');
  if (missed === 5) {
    overLay.style.display = '';
    overLay.className = '';
    overlay.classList.add('lose');
    title.innerHTML = 'You lost! :(';
    }
     else if(show.length === letter.length) {
    overLay.style.display = '';
    overLay.className = '';
    overlay.classList.add('win');
    title.innerHTML = 'You are the winner :D';
  }
}

words.addEventListener('click', (event) =>{
  if (event.target.tagName === 'BUTTON') {
      event.target.classList.add("chosen");
      event.target.disabled = true;
  }
  const letterFound = checkLetter(event);
    if(letterFound === null && missed < 5) {
      image[missed].setAttribute('src', 'images/lostHeart.png');
      missed ++;
    }
    checkWin();
});
