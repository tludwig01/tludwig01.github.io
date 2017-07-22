$(() => {

//TRIVIA GAME ARRAYS//

//Questions, correct answers, and incorrect answers.

//First Round: Middle Earth.
const roundOneQuestions = [
  {"question" : "What's the name of the sword Bilbo Baggins gets from cave trolls? It glows blue when orcs are close. ", "correctAnswer" : "Sting", "incorrectAnswerOne" : "Glamdring", "incorrectAnswerTwo" : "Orcrist"},
//First question to player 1
  {"question" : "When Gandalf shouts 'YOU SHALL NOT PASS!', what is the name of the creature he is shouting at?", "correctAnswer" : "Balrog", "incorrectAnswerOne" : "Nazgul", "incorrectAnswerTwo" : "Cave Troll"},
//Second question to player 2
  {"question" : "Orcs weren't always evil, nor in their current form. What were they once?", "correctAnswer" : "Elves", "incorrectAnswerOne" : "Men", "incorrectAnswerTwo" : "Dwarves"},
//Third question to player 1
  {"question" : "You know the bow wielding elf, Legolas. What's his father's name?", "correctAnswer" : "Thranduil", "incorrectAnswerOne" : "Elrond", "incorrectAnswerTwo" : "Celeborn"},
//Fourth question to player 2
  {"question" : "What was the name of the Skinchanger in 'The Hobbit' who turned into a bear?", "correctAnswer" : "Beorn", "incorrectAnswerOne" : "Radagast", "incorrectAnswerTwo" : "Bolg"},
//Fifth question to player 1
  {"question" : "How many great wizards are there?", "correctAnswer" : "Five", "incorrectAnswerOne" : "Three", "incorrectAnswerTwo" : "One"},
//Sixth question to player 2
  {"question" : "What was Gollum's name before he became Gollum?", "correctAnswer" : "Smeagol", "incorrectAnswerOne" : "Deagol", "incorrectAnswerTwo" : "Old Took"},
//Seventh question to player 1
  {"question" : "Name the actual 'Two Towers' the second book is named for.", "correctAnswer" : "Minas Tirith & Minas Ithil", "incorrectAnswerOne" : "Barad Dur & Isengard", "incorrectAnswerTwo" : "Helm's Deep & Osgiliath"},
//Eighth question to player 2
  {"question" : "What's Boromir's father's name?", "correctAnswer" : "Denethor", "incorrectAnswerOne" : "Imrahil", "incorrectAnswerTwo" : "Theoden"},
//Ninth question to player 1
  {"question" : "In total, how many great rings did Sauron forge?", "correctAnswer" : "20", "incorrectAnswerOne" : "1", "incorrectAnswerTwo" : "9"}
//Tenth question to player 2
];

//Second Round: Hogwart's School of Witchcraft and Wizardry.
const roundTwoQuestions = [
  {"question" : "Which spell does Hermione use to unlock doors?", "correctAnswer" : "Alohomorra", "incorrectAnswerOne" : "Oculo Reparo", "incorrectAnswerTwo" : "Wingardium Leviosa"},
//Eleventh question to player 1
  {"question" : "Harry Potter understands Parseltongue, which means he can speak to what?", "correctAnswer" : "Snakes", "incorrectAnswerOne" : "Dementors", "incorrectAnswerTwo" : "Spirits"},
//Twelfth question to player 2
  {"question" : "Orcs weren't always evil, nor in their current form. What were they once?", "correctAnswer" : "Elves", "incorrectAnswerOne" : "Men", "incorrectAnswerTwo" : "Dwarves"},
//Thirteenth question to player 1
  {"question" : "You know the bow wielding elf, Legolas. What's his father's name?", "correctAnswer" : "Thranduil", "incorrectAnswerOne" : "Elrond", "incorrectAnswerTwo" : "Celeborn"},
//Fourteenth question to player 2
  {"question" : "What was the name of the Skinchanger in 'The Hobbit' who turned into a bear?", "correctAnswer" : "Beorn", "incorrectAnswerOne" : "Radagast", "incorrectAnswerTwo" : "Bolg"},
//Fifteenth question to player 1
  {"question" : "How many great wizards are there?", "correctAnswer" : "Five", "incorrectAnswerOne" : "Three", "incorrectAnswerTwo" : "One"},
//Sixteenth question to player 2
  {"question" : "What was Gollum's name before he became Gollum?", "correctAnswer" : "Smeagol", "incorrectAnswerOne" : "Deagol", "incorrectAnswerTwo" : "Old Took"},
//Seventeeth question to player 1
  {"question" : "Name the actual 'Two Towers' the second book is named for.", "correctAnswer" : "Minas Tirith & Minas Ithil", "incorrectAnswerOne" : "Barad Dur & Isengard", "incorrectAnswerTwo" : "Helm's Deep & Osgiliath"},
//Eighteenth question to player 2
  {"question" : "What's Boromir's father's name?", "correctAnswer" : "Denethor", "incorrectAnswerOne" : "Imrahil", "incorrectAnswerTwo" : "Theoden"},
//Nineteenth question to player 1
  {"question" : "In total, how many great rings did Sauron forge?", "correctAnswer" : "20", "incorrectAnswerOne" : "1", "incorrectAnswerTwo" : "9"}
//Twentieth question to player 2
];

//Third Round: Westeros.
const roundThreeQuestions = [
  {"question" : "What's the name of the sword Bilbo Baggins gets from cave trolls? It glows blue when orcs are close. ", "correctAnswer" : "Sting", "incorrectAnswerOne" : "Glamdring", "incorrectAnswerTwo" : "Needle"},
//Twenty-first question to player 1
  {"question" : "When Gandalf shouts 'YOU SHALL NOT PASS!', what is the name of the creature he is shouting at?", "correctAnswer" : "Balrog", "incorrectAnswerOne" : "Nazgul", "incorrectAnswerTwo" : "Cave Troll"},
//Twenty-second question to player 2
  {"question" : "Orcs weren't always evil, nor in their current form. What were they once?", "correctAnswer" : "Elves", "incorrectAnswerOne" : "Men", "incorrectAnswerTwo" : "Dwarves"},
//Twenty-third question to player 1
  {"question" : "You know the bow wielding elf, Legolas. What's his father's name?", "correctAnswer" : "Thranduil", "incorrectAnswerOne" : "Elrond", "incorrectAnswerTwo" : "Celeborn"},
//Twenty-fourth question to player 2
  {"question" : "What was the name of the Skinchanger in 'The Hobbit' who turned into a bear?", "correctAnswer" : "Beorn", "incorrectAnswerOne" : "Radagast", "incorrectAnswerTwo" : "Bolg"},
//Twenty-fifth question to player 1
  {"question" : "How many great wizards are there?", "correctAnswer" : "Five", "incorrectAnswerOne" : "Three", "incorrectAnswerTwo" : "One"},
//Twenty-sixth question to player 2
  {"question" : "What was Gollum's name before he became Gollum?", "correctAnswer" : "Smeagol", "incorrectAnswerOne" : "Deagol", "incorrectAnswerTwo" : "Old Took"},
//Twenty-seventh question to player 1
  {"question" : "Name the actual 'Two Towers' the second book is named for.", "correctAnswer" : "Minas Tirith & Minas Ithil", "incorrectAnswerOne" : "Barad Dur & Isengard", "incorrectAnswerTwo" : "Helm's Deep & Osgiliath"},
//Twenty-eighth question player 2
  {"question" : "What's Boromir's father's name?", "correctAnswer" : "Denethor", "incorrectAnswerOne" : "Imrahil", "incorrectAnswerTwo" : "Theoden"},
//Twenty-ninth question to player 1
  {"question" : "In total, how many great rings did Sauron forge?", "correctAnswer" : "20", "incorrectAnswerOne" : "1", "incorrectAnswerTwo" : "9"}
//Thirtieth question to player 2
];




const playerOne = {
  name: "Player One",
  score: 0,
  getPoint(){
    playerOne.score++;
    currentPlayer = playerTwo;
  },
  questionsAnswered: 0

};

const playerTwo = {
  name: "Player Two",
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

//A correct answer gains ONE point. The turn switches back to the other player.
const rightAnswer = () => {
  currentPlayer.getPoint();
  scoreBoard();
  clearBoard();
  console.log("Gandalf, Dumbledore, and the Grand Maesters are impressed.");
};

//An incorrect answer gains NO points. The turn switches back to the other player.
const wrongAnswer = () => {
  clearBoard();
  scoreBoard();
    if(currentPlayer === playerOne){
      currentPlayer = playerTwo;
    } else {
      currentPlayer = playerOne;
      }
      console.log("*rings bell* Shame! *rings bell*");
};

//Logic of scoring, game, and round flow.
const scoreBoard = () => {

  //Adds player 1 point to the DOM.
  const $playerOnePoint =
  $('#player1').html('Player 1 Score: ' + playerOne.score);

  //Adds player 2 point to the DOM.
  const $playerTwoPoint =
  $('#player2').html('Player 2 Score: ' + playerTwo.score);
  //When 10 questions are finished, the round switches to the next array of trivia questions.

  if (currentPlayer === playerOne){
    currentPlayer = playerTwo;
  } else {
    currentPlayer = playerOne;
  }

  if(questionsAnswered === 10){
    console.log("****************");
    console.log("START ROUND 2!");
    console.log("****************");
    gameState.round = roundTwoQuestions;
    gameState.questionNumber = 0;
    questionsAnswered = 10;
  }
  //When 20 questions are finished, the round switches to the final array of trivia questions.
    else if (questionsAnswered === 20){
    console.log("****************");
    console.log("START ROUND 3!");
    console.log("****************");
    gameState.round = roundThreeQuestions;
    gameState.questionNumber = 0;
    questionsAnswered = 20;
  }
  //When all questions are finished, endGame takes the scores of both players and announces the winner, or if they've tied.
    else if (questionsAnswered === 30){
    endGame();
  } else {
    // gameState.questionNumber++;
  }
};

//Checks scores for a tie.
const checkTieGame = () => {
  if (playerOne.score === playerTwo.score){
    console.log("you're both so good you tied!");
  }
};

//Checks scores for a win and loss.
const checkWinGame = () => {
  if (playerOne.score > playerTwo.score){
    alert("Player one wins!")
    console.log("congrats player 1 you're a beast");
  } else if (playerTwo.score > playerOne.score) {
    alert("Player two wins!")
    console.log("congrats player 2 you got this in the bag");
  }
};

//Clears DOM, switches players, and moves to next question.
const clearBoard = () => {
  $('.clear').remove();
  $('.button').remove();
  questionsAnswered++;
  scoreBoard();
  setupQuestions();
  console.log(currentPlayer.name + ", you've answered question #" + questionsAnswered);
};

//Initiates trivia game from start screen.
const startGame = () => {
  $('#welcome').remove();
  $('#start').remove();
    setupQuestions();
};

//Ends the game after all questions have been answered, announcing a win, loss, and/or tie.
const endGame = () => {
  $('.clear').remove();
  $('.button').remove();
  checkTieGame();
  checkWinGame();
};

//Listens for click to initiate startGame function.
$('#start').on('click', startGame);


});
