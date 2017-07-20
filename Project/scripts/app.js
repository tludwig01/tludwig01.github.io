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

  }
};
//GAME//

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
console.log(playerOne.score);
console.log(playerTwo.score);
}

const wrongAnswer = () => {
clearBoard();
  console.log("NOPE!");
}


// No points when wrong answer selected
//must affix scoreboard and perhaps a message on the DOM.

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
//Clears initial screen, starts trivia.

$('#start').on('click', startGame);

//Begins trivia!


//STILL NEEDS:


//End round function
//Player scoreboards and player turn alerts
//Randomized buttons
//DOM oriented alerts and/or messages



});