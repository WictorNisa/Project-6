const words = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const mainButton = document.querySelector('.btn__reset');
const overLay = document.getElementById('overlay');
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

const phraseArray = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr){
  for (i = 0; i < arr.length; i++) {
    let li = document.createElement('li');

    if () {
      list.classList.add('letter');
    } else {
      list.classList.add('space');
    }
  }
    // do stuff any arr that is passed in, and add to `#phrase ul`
}

// getRandomPhraseArray(phrases);


addPhrasetoDisplay(phraseArray);
