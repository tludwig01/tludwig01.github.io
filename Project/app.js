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

const playerOne = {
  name: "",
  score: 0
}

const playerTwo = {
  name: "",
  score: 0
}

//Lord of the Rings
const roundOneGameQuestions = [
  {"firstQuestion" : "What's the name of the sword Bilbo Baggins gets from cave trolls? It glows blue when orcs are close. ", "correctAnswer" : "Sting", "incorrectAnswerOne" : "Glamdring", "incorrectAnswerTwo" : "Needle"},
//player 1

  {"secondQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},
//player 2

  {"thirdQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},
//player 1

  {"fourthQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},
//player 2

  {"fifthQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},
//player 1

  {"sixthQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},
//player 2

  {"seventhQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},
//player 1

  {"eighthQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},
//player 2

  {"tieBreakerQuestion" : "This is a tie breaker question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"}
// not entirely sure how to implement this, but the idea is there
];

//Harry Potter
const roundTwoGameQuestions = [
  {"firstQuestion" : "At Hogwart's what spell does Hermione use to unlock doors? ", "correctAnswer" : "Alohomorra", "incorrectAnswerOne" : "Incendio", "incorrectAnswerTwo" : "Needle"},
//player 2 starts

  {"secondQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},
//player 1

  {"thirdQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},
//player 2

  {"fourthQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},
//player 1

  {"fifthQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},
//player 2

  {"sixthQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},
//player 1

  {"seventhQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},
//player 2
  {"eighthQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},
//player 1

  {"tieBreakerQuestion" : "This is a tie breaker question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"}
//same tiebreaker as before
];
//if one player wins BOTH rounds


//Game of Thrones
const roundThreeGameQuestions = [
  {"firstQuestion" : "What's the sigil of House Baratheon? ", "correctAnswer" : "Stag", "incorrectAnswerOne" : "Direwolf", "incorrectAnswerTwo" : "Lion"},
//player 1 starts

  {"secondQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},
//player 2

  {"thirdQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},
//player 1

  {"fourthQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},
//player 2

  {"fifthQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},
//player 1

  {"sixthQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},
//player 2

  {"seventhQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},
//player 1

  {"eighthQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},
//player 2

  {"tieBreakerQuestion" : "This is a tie breaker question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"}

];
//tested game questions arrays
console.log(roundOneGameQuestions[0]);
console.log(roundTwoGameQuestions[0]);
console.log(roundThreeGameQuestions[0]);

const startGame = () => {
  $('#welcome').remove();
  $('#start').remove();
  roundOneQuestionOne();
} //functional

const roundOneQuestionOne = () => {
  const $q1 = $('<div/>').text(roundOneGameQuestions[0].firstQuestion) //how do I append an array item to this?
  $('body').append($q1);
    const $answerA = $('<button>').attr('id', 'answerA').text(roundOneGameQuestions[0].incorrectAnswerOne);
    $('body').append($answerA);
    const $answerB = $('<button>').text(roundOneGameQuestions[0].incorrectAnswerTwo);
    $('body').append($answerB);
    const $answerC = $('<button>').text(roundOneGameQuestions[0].correctAnswer);
    $('body').append($answerC);

      $answerA.on('click', wrongAnswer);
      $answerB.on('click', wrongAnswer);
      $answerC.on('click', rightAnswer);
} //functional // connected this to array of objects

const questionTwo = () => {

}

const rightAnswer = () => {
console.log("Correct!"); // functional
}

const wrongAnswer = () => {
  console.log("NOPE!"); //functional
}

const playerOneScore = $('<div/>').

$('#start').on('click', startGame); //functional





});
