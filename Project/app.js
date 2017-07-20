$(() => {

// The game is trivia. Correctly identifying who stated a certain quote from a book or film.

//It shall have TWO players.

//They will alternate turns answering a question.

//They will have DIFFERENT QUESTIONS

//They will click on multpile choice answers. (on click events)

//Players socres shall be kept.

//The questions will be stored in arrays. Or objects?

//The answers will be stored in arrays. Or objects?

//The initial message shall display a prompt on the DOM welcoming the players. Asking them to click to begin.
  //There will be a brief game description.
    //Simple stuff. Each correct answer is a point, each incorrect is nothing.
//Clicking "begin" will initiate the game (function).

// WHat the game will feel like from the users end:
// begin with welcome message and rules and a button to begin the game.

//upon clicking to begin the first div enters the DOM for player one.

const playerOne = {
  name: "",
  score: 0
}

const playerTwo = {
  name: "",
  score: 0
}

//Lord of the Rings
const lordOfTheRingsTrivia = [
  {"question" : "What's the name of the sword Bilbo Baggins gets from cave trolls? It glows blue when orcs are close. ", "correctAnswer" : "Sting", "incorrectAnswerOne" : "Glamdring", "incorrectAnswerTwo" : "Needle"},
//player 1

  {"question" : "When Gandalf shouts 'YOU SHALL NOT PASS!', what is the name of the creature he is shouting at?", "correctAnswer" : "Balrog", "incorrectAnswerOne" : "Nazgul", "incorrectAnswerTwo" : "Cave Troll"},
//player 2

  {"question" : "Orcs weren't always evil, nor in their current form. What were they once?", "correctAnswer" : "Elves", "incorrectAnswerOne" : "Men", "incorrectAnswerTwo" : "Dwarves"},
//player 1

  {"question" : "You know the bow wielding elf, Legolas. What's his father's name?", "correctAnswer" : "Thranduil", "incorrectAnswerOne" : "Elrond", "incorrectAnswerTwo" : "Celeborn"},
//player 2

  {"question" : "What was the name of the Skinchanger in 'The Hobbit' who turned into a bear?", "correctAnswer" : "Beorn", "incorrectAnswerOne" : "Radagast", "incorrectAnswerTwo" : "Bolg"},
//player 1

  {"question" : "How many great wizards are there?", "correctAnswer" : "Five", "incorrectAnswerOne" : "Three", "incorrectAnswerTwo" : "One"},
//player 2

  {"question" : "What was Gollum's name before he became Gollum?", "correctAnswer" : "Smeagol", "incorrectAnswerOne" : "Deagol", "incorrectAnswerTwo" : "Old Took"},
//player 1

  {"question" : "Name the actual 'Two Towers' the second book is named for.", "correctAnswer" : "Minas Tirith & Minas Ithil", "incorrectAnswerOne" : "Barad Dur & Isengard", "incorrectAnswerTwo" : "Helm's Deep & Osgiliath"},
//player 2

  {"tieQuestion" : "What's Boromir's father's name?", "correctAnswer" : "Denethor", "incorrectAnswerOne" : "Imrahil", "incorrectAnswerTwo" : "Theoden"}
// not entirely sure how to implement this, but the idea is there
];


let questionNumber = 0;

const setupQuestions = () => {

  const $question =

  $('<div/>').addClass('clear').text(lordOfTheRingsTrivia[questionNumber].question);

    $('body').append($question);

    const $answerA =

    $('<button>').addClass('clear').text(lordOfTheRingsTrivia[questionNumber].incorrectAnswerOne);

      $('body').append($answerA);

    const $answerB =

    $('<button>').addClass('clear').text(lordOfTheRingsTrivia[questionNumber].incorrectAnswerTwo);

      $('body').append($answerB);

    const $answerC =

    $('<button>').addClass('clear').text(lordOfTheRingsTrivia[questionNumber].correctAnswer);

      $('body').append($answerC);

        questionNumber++;

          $answerA.on('click', wrongAnswer);
          $answerB.on('click', wrongAnswer);
          $answerC.on('click', rightAnswer);
};

//Working, but the answer button spit out the correct answer on the same button every single time. How should I go about scrambling or randomizing them?

const rightAnswer = () => {
clearBoard();
console.log('correct!');
}
// Add player points when right answer selected
//Must affix scoreboard and perhaps message on the DOM.

const wrongAnswer = () => {
clearBoard();
  console.log("NOPE!");
}
// No points when wrong answer selected
//must affix scoreboard and perhaps a message on the DOM.

const clearBoard = () => {
  $('.clear').remove();
  setupQuestions();
}
//Clears DOM and advances questions

const startGame = () => {
  $('#welcome').remove();
  $('#start').remove();
    setupQuestions();
}
//Clears initial screen, starts trivia.

$('#start').on('click', startGame);
//Begins trivia!


//STILL NEEDS:

//Player scoreboards and player turn alerts
//Randomized buttons
//DOM oriented alerts and/or messages



});
