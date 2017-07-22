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

// First Round
const roundOneQuestions = [
  {"question" : "What's the name of the sword Bilbo Baggins gets from cave trolls? It glows blue when orcs are close. ", "correctAnswer" : "Sting", "incorrectAnswerOne" : "Glamdring", "incorrectAnswerTwo" : "Orcrist"},

  {"question" : "When Gandalf shouts 'YOU SHALL NOT PASS!', what is the name of the creature he is shouting at?", "correctAnswer" : "Balrog", "incorrectAnswerOne" : "Nazgul", "incorrectAnswerTwo" : "Cave Troll"},

  {"question" : "Orcs weren't always evil, nor in their current form. What were they once?", "correctAnswer" : "Elves", "incorrectAnswerOne" : "Men", "incorrectAnswerTwo" : "Dwarves"},

  {"question" : "You know the bow wielding elf, Legolas. What's his father's name?", "correctAnswer" : "Thranduil", "incorrectAnswerOne" : "Elrond", "incorrectAnswerTwo" : "Celeborn"},

  {"question" : "What was the name of the Skinchanger in 'The Hobbit' who turned into a bear?", "correctAnswer" : "Beorn", "incorrectAnswerOne" : "Radagast", "incorrectAnswerTwo" : "Bolg"},

  {"question" : "How many great wizards are there?", "correctAnswer" : "Five", "incorrectAnswerOne" : "Three", "incorrectAnswerTwo" : "One"},

  {"question" : "What was Gollum's name before he became Gollum?", "correctAnswer" : "Smeagol", "incorrectAnswerOne" : "Deagol", "incorrectAnswerTwo" : "Old Took"},

  {"question" : "Name the actual 'Two Towers' the second book is named for.", "correctAnswer" : "Minas Tirith & Minas Ithil", "incorrectAnswerOne" : "Barad Dur & Isengard", "incorrectAnswerTwo" : "Helm's Deep & Osgiliath"},

  {"question" : "What's Boromir's father's name?", "correctAnswer" : "Denethor", "incorrectAnswerOne" : "Imrahil", "incorrectAnswerTwo" : "Theoden"},

  {"question" : "In total, how many great rings did Sauron forge?", "correctAnswer" : "20", "incorrectAnswerOne" : "1", "incorrectAnswerTwo" : "9"}
];

//player one get 5 questions, player two gets 5 questions. How?
//display round one win or tie
//move to round two


//second round
const roundTwoQuestions = [
  {"question" : "*************** ", "correctAnswer" : "Sting", "incorrectAnswerOne" : "Glamdring", "incorrectAnswerTwo" : "Needle"},

  {"question" : "When Gandalf shouts 'YOU SHALL NOT PASS!', what is the name of the creature he is shouting at?", "correctAnswer" : "Balrog", "incorrectAnswerOne" : "Nazgul", "incorrectAnswerTwo" : "Cave Troll"},

  {"question" : "Orcs weren't always evil, nor in their current form. What were they once?", "correctAnswer" : "Elves", "incorrectAnswerOne" : "Men", "incorrectAnswerTwo" : "Dwarves"},

  {"question" : "You know the bow wielding elf, Legolas. What's his father's name?", "correctAnswer" : "Thranduil", "incorrectAnswerOne" : "Elrond", "incorrectAnswerTwo" : "Celeborn"},

  {"question" : "What was the name of the Skinchanger in 'The Hobbit' who turned into a bear?", "correctAnswer" : "Beorn", "incorrectAnswerOne" : "Radagast", "incorrectAnswerTwo" : "Bolg"},

  {"question" : "How many great wizards are there?", "correctAnswer" : "Five", "incorrectAnswerOne" : "Three", "incorrectAnswerTwo" : "One"},

  {"question" : "What was Gollum's name before he became Gollum?", "correctAnswer" : "Smeagol", "incorrectAnswerOne" : "Deagol", "incorrectAnswerTwo" : "Old Took"},

  {"question" : "Name the actual 'Two Towers' the second book is named for.", "correctAnswer" : "Minas Tirith & Minas Ithil", "incorrectAnswerOne" : "Barad Dur & Isengard", "incorrectAnswerTwo" : "Helm's Deep & Osgiliath"},

  {"question" : "What's Boromir's father's name?", "correctAnswer" : "Denethor", "incorrectAnswerOne" : "Imrahil", "incorrectAnswerTwo" : "Theoden"},

  {"question" : "In total, how many great rings did Sauron forge?", "correctAnswer" : "20", "incorrectAnswerOne" : "1", "incorrectAnswerTwo" : "9"}

];

//player one get 5 questions, player two gets 5 questions. How?
//display round two win or tie.
//move to round three if game isn't over.

const roundThreeQuestions = [
  {"question" : "What's the name of the sword Bilbo Baggins gets from cave trolls? It glows blue when orcs are close. ", "correctAnswer" : "Sting", "incorrectAnswerOne" : "Glamdring", "incorrectAnswerTwo" : "Needle"},

  {"question" : "When Gandalf shouts 'YOU SHALL NOT PASS!', what is the name of the creature he is shouting at?", "correctAnswer" : "Balrog", "incorrectAnswerOne" : "Nazgul", "incorrectAnswerTwo" : "Cave Troll"},

  {"question" : "Orcs weren't always evil, nor in their current form. What were they once?", "correctAnswer" : "Elves", "incorrectAnswerOne" : "Men", "incorrectAnswerTwo" : "Dwarves"},

  {"question" : "You know the bow wielding elf, Legolas. What's his father's name?", "correctAnswer" : "Thranduil", "incorrectAnswerOne" : "Elrond", "incorrectAnswerTwo" : "Celeborn"},

  {"question" : "What was the name of the Skinchanger in 'The Hobbit' who turned into a bear?", "correctAnswer" : "Beorn", "incorrectAnswerOne" : "Radagast", "incorrectAnswerTwo" : "Bolg"},

  {"question" : "How many great wizards are there?", "correctAnswer" : "Five", "incorrectAnswerOne" : "Three", "incorrectAnswerTwo" : "One"},

  {"question" : "What was Gollum's name before he became Gollum?", "correctAnswer" : "Smeagol", "incorrectAnswerOne" : "Deagol", "incorrectAnswerTwo" : "Old Took"},

  {"question" : "Name the actual 'Two Towers' the second book is named for.", "correctAnswer" : "Minas Tirith & Minas Ithil", "incorrectAnswerOne" : "Barad Dur & Isengard", "incorrectAnswerTwo" : "Helm's Deep & Osgiliath"},

  {"question" : "What's Boromir's father's name?", "correctAnswer" : "Denethor", "incorrectAnswerOne" : "Imrahil", "incorrectAnswerTwo" : "Theoden"},

  {"question" : "In total, how many great rings did Sauron forge?", "correctAnswer" : "20", "incorrectAnswerOne" : "1", "incorrectAnswerTwo" : "9"}
];

//each player gets 5 questions if necessary.
//display round three win or tie.
//check if game is over
//offer restart



const playerOne = {
  score: 0,
  getPoint(){
    playerOne.score++;
    currentPlayer = playerTwo;
  },
  questionsAnswered: 0

};

const playerTwo = {
  score: 0,
  getPoint(){
    playerTwo.score++;
    currentPlayer = playerOne;
  },
  questionsAnswered: 0
};
//PLAYERS//

const gameState = {
  questionNumber: 0,
  player: playerOne,
  round: roundOneQuestions
};

let currentPlayer = playerOne;
let questionsAnswered = 0;
let questionNumber = 0;

const setupQuestions = () => {

  const $question =

  $('<div/>').addClass('clear').text(gameState.round[gameState.questionNumber].question);

    $('body').append($question);

    const $answerA =

    $('<button>').addClass('button').text(gameState.round[gameState.questionNumber].incorrectAnswerOne);

      $('body').append($answerA);

    const $answerB =

    $('<button>').addClass('button').text(gameState.round[gameState.questionNumber].incorrectAnswerTwo);

      $('body').append($answerB);

    const $answerC =

    $('<button>').addClass('button').text(gameState.round[gameState.questionNumber].correctAnswer);

      $('body').append($answerC);

        gameState.questionNumber++;

          $answerA.on('click', wrongAnswer);
          $answerB.on('click', wrongAnswer);
          $answerC.on('click', rightAnswer);
};

//Ok, I'm stuck here.

const rightAnswer = () => {
currentPlayer.getPoint();
scoreBoard();
clearBoard();
console.log("Gandalf looks to you for wisdom.");
}
//Right answer gives one point

const wrongAnswer = () => {
clearBoard();
scoreBoard();
if(currentPlayer === playerOne){
  currentPlayer = playerTwo;
} else {
  currentPlayer = playerOne;
}
console.log("Stupid, fat hobbit!");
}
//Wrong answer keeps score the same.

const scoreBoard = () => {
  const $playerOnePoint =
  $('#player1').html('Player 1 Score: ' + playerOne.score);
  const $playerTwoPoint =
  $('#player2').html('Player 2 Score: ' + playerTwo.score);
  console.log("************");
  // console.log(gameState.round[gameState.questionNumber].question);
  if(questionsAnswered === 10){
    //start round two questions
    console.log("round2!");
    gameState.round = roundTwoQuestions;
    gameState.questionNumber = 0;
    questionsAnswered = 10;
    // setupQuestions();
  } else if (questionsAnswered === 20){
    console.log("round3!");
    gameState.round = roundThreeQuestions;
    gameState.questionNumber = 0;
    questionsAnswered = 20;
    // setupQuestions();
  } else if (questionsAnswered === 30){
    endGame();
  } else {
    // gameState.questionNumber++;
  }
};


const checkTieGame = () => {
  if (playerOne.score === playerTwo.score){
    console.log("you're both so good you tied!");
  }
};

const checkWinGame = () => {
  if (playerOne.score > playerTwo.score){
    console.log("congrats player 1 you're a beast");
  } else if (playerTwo.score > playerOne.score) {
    console.log("congrats player 2 you got this in the bag");
  }
};

const clearBoard = () => {
  $('.clear').remove();
  $('.button').remove();
  questionsAnswered++;
  console.log(questionsAnswered);
  scoreBoard();
  setupQuestions();
};
//Clears DOM and advances questions

const startGame = () => {
  $('#welcome').remove();
  $('#start').remove();
    setupQuestions();
};
// Clears initial screen, starts trivia.

const endGame = () => {
  $('.clear').remove();
  $('.button').remove();
  checkTieGame();
  checkWinGame();
};
//at end of game, checks for winner or tie!

$('#start').on('click', startGame);
//Begins trivia!


//STILL NEEDS:


//player turn alerts
//Randomized buttons
//DOM oriented alerts and/or messages



});
