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
const roundOne = [
  {"question" : "What's the name of the sword Bilbo Baggins gets from cave trolls? It glows blue when orcs are close. ", "correctAnswer" : "Sting", "incorrectAnswerOne" : "Glamdring", "incorrectAnswerTwo" : "Needle"},

  {"question" : "When Gandalf shouts 'YOU SHALL NOT PASS!', what is the name of the creature he is shouting at?", "correctAnswer" : "Balrog", "incorrectAnswerOne" : "Nazgul", "incorrectAnswerTwo" : "Cave Troll"},

  {"question" : "Orcs weren't always evil, nor in their current form. What were they once?", "correctAnswer" : "Elves", "incorrectAnswerOne" : "Men", "incorrectAnswerTwo" : "Dwarves"},

  {"question" : "You know the bow wielding elf, Legolas. What's his father's name?", "correctAnswer" : "Thranduil", "incorrectAnswerOne" : "Elrond", "incorrectAnswerTwo" : "Celeborn"},

  {"question" : "What was the name of the Skinchanger in 'The Hobbit' who turned into a bear?", "correctAnswer" : "Beorn", "incorrectAnswerOne" : "Radagast", "incorrectAnswerTwo" : "Bolg"},

  {"question" : "How many great wizards are there?", "correctAnswer" : "Five", "incorrectAnswerOne" : "Three", "incorrectAnswerTwo" : "One"},

  {"question" : "What was Gollum's name before he became Gollum?", "correctAnswer" : "Smeagol", "incorrectAnswerOne" : "Deagol", "incorrectAnswerTwo" : "Old Took"},

  {"question" : "Name the actual 'Two Towers' the second book is named for.", "correctAnswer" : "Minas Tirith & Minas Ithil", "incorrectAnswerOne" : "Barad Dur & Isengard", "incorrectAnswerTwo" : "Helm's Deep & Osgiliath"},

  {"question" : "What's Boromir's father's name?", "correctAnswer" : "Denethor", "incorrectAnswerOne" : "Imrahil", "incorrectAnswerTwo" : "Theoden"}
];

for (let i=0; i<roundOne.length; i+=3){
  const playerOneQuestions = roundOne[i];
  console.log(playerOneQuestions);
}

const playerOne = {
  name: "",
  score: 0,
  getPoint(){
    playerOne.score++;
  }

};

const playerTwo = {
  name: "",
  score: 0,
  getPoint(){
    playerTwo.score++;
  }
};
//PLAYERS//

const gameState = {
  questionNumber: 0,
  player: playerOne,
  round: roundOne,
  changePlayer(){
    if (gameState.player === playerOne){
      gameState.player = playerTwo;
    } else {
      gameState.player = playerOne;
    }
  },
  changeRound(){
    if (roundOne === undefined){
      roundTwo();
    }
  }
};


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

const roundTwo = () => {
   console.log("works");
 }

const rightAnswer = () => {
clearBoard();
playerOne.getPoint();
playerTwo.getPoint();
playerOneScoreBoard();
playerTwoScoreBoard();
}
//Right answer gives one point

const wrongAnswer = () => {
clearBoard();
playerOne.score = playerOne.score;
playerTwo.score = playerTwo.score;
}
//Wrong answer keeps score the same.

const playerOneScoreBoard = () => {
  const $playerOnePoint =
  $('#player1').html('Player 1 Score: ' + playerOne.score)
}

const playerTwoScoreBoard = () => {
  const $playerTwoPoint =
  $('#player2').html('Player 2 Score: ' + playerTwo.score)
}

const checkTieGame = () => {
  if (playerOne.score === playerTwo.score){
    console.log("you're both so good you tied!");
  }
}


const checkWinGame = () => {
  if (playerOne.score > playerTwo.score){
    console.log("congrats player 1 you're a beast");
  } else if (playerTwo.score > playerOne.score) {
    console.log("congrats player 2 you got this in the bag");
  }
}

const clearBoard = () => {
  $('.clear').remove();
  $('.button').remove();
  setupQuestions();
}
//Clears DOM and advances questions

const startGame = () => {
  $('#welcome').remove();
  $('#start').remove();
    setupQuestions();
}
// Clears initial screen, starts trivia.

const endGame = () => {
  checkTieGame();
  checkWinGame();
}
//at end of game, checks for winner or tie!

$('#start').on('click', startGame);
//Begins trivia!


//STILL NEEDS:


//player turn alerts
//Randomized buttons
//DOM oriented alerts and/or messages



});
