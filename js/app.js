const words = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const mainButton = document.querySelector('.btn__reset');
const overLay = document.getElementById('overlay');
const point = document.body.style.cursor = "pointer";
// const phraseArray = getRandomPhraseAsArray(phrases);
let missed = 0;

function getRandomPhraseArray(arr){
  let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  let randSplit = randomPhrase.split('');
  return randSplit;
}


function addPhraseToDisplay(arr){
  for (i = 0; i < arr.randSplit.length; i++) {
    let list = document.createElement('li');
    document.getElementById('phrase').appendChild(list);
    console.log(list);
    // if (list === ) {
    //   list.classList.add('letter');
    // } else {
    //
    // }
  }
    // do stuff any arr that is passed in, and add to `#phrase ul`
}

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



// getRandomPhraseArray(phrases);

// addPhrasetoDisplay(phraseArray);
