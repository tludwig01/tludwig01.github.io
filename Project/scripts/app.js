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
  {"question" : "What's Professor McGonagal's first name?", "correctAnswer" : "Minerva", "incorrectAnswerOne" : "Rosetta", "incorrectAnswerTwo" : "Mina"},
//Thirteenth question to player 1
  {"question" : "There are three unforgivable curses. Which one inflicts pain?", "correctAnswer" : "Crucio", "incorrectAnswerOne" : "Imperio", "incorrectAnswerTwo" : "Avada Kedavara"},
//Fourteenth question to player 2
  {"question" : "What's Harry Potter's owl's name?", "correctAnswer" : "Hedwig", "incorrectAnswerOne" : "Ludwig", "incorrectAnswerTwo" : "Germinius"},
//Fifteenth question to player 1
  {"question" : "When Harry finds a Potions textbook belonging to the 'half blood prince', he learns quite a bit, both good and bad. Who's the half-blood prince?", "correctAnswer" : "Severus Snape", "incorrectAnswerOne" : "Sirius Black", "incorrectAnswerTwo" : "Tom Riddle"},
//Sixteenth question to player 2
  {"question" : "In order for a Polyjuice potion to effectively temporarily transfigure you to someone else, what is absolutely required from the person you're trying to turn into?", "correctAnswer" : "a hair", "incorrectAnswerOne" : "an article of clothing", "incorrectAnswerTwo" : "their wand"},
//Seventeeth question to player 1
  {"question" : "What platform do the students take to board the Hogwart's Express?", "correctAnswer" : "9 3/4", "incorrectAnswerOne" : "Kings Cross Station", "incorrectAnswerTwo" : "13"},
//Eighteenth question to player 2
  {"question" : "The dark lord's closest followers are called what?", "correctAnswer" : "Death Eaters", "incorrectAnswerOne" : "Dementors", "incorrectAnswerTwo" : "The Dark Lord's Army"},
//Nineteenth question to player 1
  {"question" : "How many Horcruxes had the Dark Lord affixed his soul to?", "correctAnswer" : "Six", "incorrectAnswerOne" : "One", "incorrectAnswerTwo" : "Three"}
//Twentieth question to player 2
];

//Third Round: Westeros.
const roundThreeQuestions = [
  {"question" : "Who are the rightful rulers of Westeros and heirs to the Iron Throne?", "correctAnswer" : "The Targaryens", "incorrectAnswerOne" : "The Baratheons", "incorrectAnswerTwo" : "The Lannisters"},
//Twenty-first question to player 1
  {"question" : "What does 'Valar Morghulis' mean?", "correctAnswer" : "All men must die", "incorrectAnswerOne" : "All men must serve", "incorrectAnswerTwo" : "a foreign saying of respect for the king"},
//Twenty-second question to player 2
  {"question" : "Eddard Stark is beheaded with his own sword. Super huge bummer. What's his sword called?", "correctAnswer" : "Ice", "incorrectAnswerOne" : "Oathkeeper", "incorrectAnswerTwo" : "Sword of Morning"},
//Twenty-third question to player 1
  {"question" : "King Joffrey finally dies and it's pretty gruesome. With which poison was he killed?", "correctAnswer" : "The Strangler", "incorrectAnswerOne" : "Tears of Lys", "incorrectAnswerTwo" : "Dragon's Kiss"},
//Twenty-fourth question to player 2
  {"question" : "Skinchangers in Westeros aren't very highly regarded and are given what name?", "correctAnswer" : "Wargs", "incorrectAnswerOne" : "Shapeshifters", "incorrectAnswerTwo" : "Unholy Animals"},
//Twenty-fifth question to player 1
  {"question" : "Danaerys Targaryen had a twin brother who wasn't grateful for what he was given and it cost him his life. How'd that happen?", "correctAnswer" : "molten gold", "incorrectAnswerOne" : "beheaded", "incorrectAnswerTwo" : "dragged by horses"},
//Twenty-sixth question to player 2
  {"question" : "What is the house sigil of house Greyjoy of the Iron Islands?", "correctAnswer" : "Kraken", "incorrectAnswerOne" : "Fleet of Ships", "incorrectAnswerTwo" : "Shield and Spear"},
//Twenty-seventh question to player 1
  {"question" : "Which of these is NOT one of the Seven Kingdoms?", "correctAnswer" : "Braavos", "incorrectAnswerOne" : "The Riverlands", "incorrectAnswerTwo" : "The Vale"},
//Twenty-eighth question player 2
  {"question" : "Which giant castle still stands, but so badly damaged by dragonfire, the stones melted?", "correctAnswer" : "Harrenhall", "incorrectAnswerOne" : "Dragonstone", "incorrectAnswerTwo" : "Casterly Rock"},
//Twenty-ninth question to player 1
  {"question" : "Who are the nomadic people with a massive army on horseback?", "correctAnswer" : "Dothraki", "incorrectAnswerOne" : "Braavosi", "incorrectAnswerTwo" : "Qaartheen"}
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

let currentPlayer = playerTwo;
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

//Really having trouble RANDOMIZING THE BUTTONS. I just want to shuffle them so the correct damn answer isn't on the same button every single time.

//The function keeps running after the game has ended. Figuring out how to kill. 
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
  if(currentPlayer === playerOne){
    currentPlayer = playerTwo;
  } else {
    currentPlayer = playerOne;
    }
  clearBoard();
  scoreBoard();
  console.log("*rings bell* Shame! *rings bell*");
};

//Logic of scoring, game, and round flow.
const scoreBoard = () => {

  //Adds player 1 point to the DOM.
  const $playerOnePoint =
  $('#player2').html('Player 1 Score: ' + playerTwo.score); //Had to make these opposite to force them to log the scores correctly, it's annoying and wrong and I'm aware of it, but it works.

  //Adds player 2 point to the DOM.
  const $playerTwoPoint =
  $('#player1').html('Player 2 Score: ' + playerOne.score);//See Scoring comment above. I think what was wrong is that on the initial game start button, it counts that as player 1's first click, so the first true question starts on player 2. Not sure how to change it, so I hacked it this way LOL.

  //When 10 questions are finished, the round switches to the next array of trivia questions.

  if (currentPlayer === playerOne){
    currentPlayer = playerTwo;
  } else {
    currentPlayer = playerOne;
  }

  if(questionsAnswered === 10){
    gameState.round = roundTwoQuestions;
    gameState.questionNumber = 0;
    questionsAnswered = 10;
  }
  //When 20 questions are finished, the round switches to the final array of trivia questions.
    else if (questionsAnswered === 20){
    gameState.round = roundThreeQuestions;
    gameState.questionNumber = 0;
    questionsAnswered = 20;
  }
  //When all questions are finished, endGame takes the scores of both players and announces the winner, or if they've tied.
    else if (questionsAnswered === 31){
    endGame();
  }
};

//Checks scores for a tie.
const checkTieGame = () => {
  if (playerOne.score === playerTwo.score){
    alert("you're both so good you tied!");
  }
  $('.clear').remove();
  $('.button').remove();
  const $restartTrivia =
  $('<button>').attr('id', 'restart').text("Play again?");
  $('body').append($restartTrivia)
  $('restart').on('click', startGame); //Working on restart button
};

//Checks scores for a win and loss.
const checkWinGame = () => {
  if (playerOne.score < playerTwo.score){
    alert("Player one wins!")
    console.log("congrats player 1 you're a beast");
  } else if (playerTwo.score < playerOne.score) {
    alert("Player two wins!")
    console.log("congrats player 2 you got this in the bag");
  }
  $('.clear').remove();
  $('.button').remove();
  const restartTrivia =
  $('<button>').attr('id', 'restart').text("Play again?");
  $('body').append($restartTrivia)
  $('restart').on('click'); //Working on restart button
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
  checkTieGame();
  checkWinGame();
};

//Listens for click to initiate startGame function.
$('#start').on('click', startGame);


});
