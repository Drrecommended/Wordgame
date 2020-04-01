let lives = 10
let guesses = []
$('#lives').html(lives)


var commonWords = [
    "the","of","and","a","to","in","is","you","that","it","he",
    "was","for","on","are","as","with","his","they","I","at","be",
    "this","have","from","or","one","had","by","word","but","not",
    "what","all","were","we","when","your","can","said","there",
    "use","an","each","which","she","do","how","their","if","will",
    "up","other","about","out","many","then","them","these","so",
    "some","her","would","make","like","him","into","time","has",
    "look","two","more","write","go","see","number","no","way",
    "could","people","my","than","first","water","been","call",
    "who","oil","its","now","find","long","down","day","did","get",
    "come","made","may","part"
  ];


var randomWord = 
commonWords[Math.floor(Math.random()*commonWords.length)];
console.log(randomWord)


const buttons = 'abcdefghijklmnopqrstuvwxyz'.split('').map(i => {
  return `<button class="buttons">${i}</button>`
}).join('')
$('.letters').html(buttons)

function makeDashes() {
  let word = randomWord.split('').map(item => {
    if (guesses.includes(item)) {
      return `<div class="word">${item}</div>`
    } 
    return `<div class="word"></div>`
  }).join('')
  $('#word').html(word)
  
}



makeDashes()

$('.buttons').on('click', function () {
  let letter = $(this).html()
  guesses.push(letter)
  console.log(guesses)
  if (randomWord.includes(letter)) {
    makeDashes()
  } else {
    lives--
    if (lives === 0) {
      $('.winLose').html('<p>YOU LOSE</p>')
    }
    $('#lives').html(lives)
  } 
})
// let randomWord =
// let dashes =

// for (let i = 0; i < randomWord.length, i++) {
//   dashes = dashes + '-'
  
// }










