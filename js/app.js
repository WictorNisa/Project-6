const words = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const mainButton = document.querySelector('.btn__reset');
const overLay = document.getElementById('overlay');
const ul = document.querySelector('#phrase ul');
const point = document.body.style.cursor = "pointer";
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

function addPhraseToDisplay(arr){
  for (i = 0; i < arr.length; i++) {
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

}

// getRandomPhraseArray(phrases);
addPhraseToDisplay(phraseArray);
