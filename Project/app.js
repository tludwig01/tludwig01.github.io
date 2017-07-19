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

  {"secondQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},

  {"thirdQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},

  {"fourthQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},

  {"fifthQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},

  {"sixthQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},

  {"seventhQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},

  {"eighthQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},

  {"tieBreakerQuestion" : "This is a tie breaker question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"}

];
//Harry Potter
const roundTwoGameQuestions = [
  {"firstQuestion" : "At Hogwart's what spell does Hermione use to unlock doors? ", "correctAnswer" : "Alohomorra", "incorrectAnswerOne" : "Incendio", "incorrectAnswerTwo" : "Needle"},

  {"secondQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},

  {"thirdQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},

  {"fourthQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},

  {"fifthQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},

  {"sixthQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},

  {"seventhQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},

  {"eighthQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},

  {"tieBreakerQuestion" : "This is a tie breaker question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"}

];
//Game of Thrones 
const roundThreeGameQuestions = [
  {"firstQuestion" : "What's the of House Baratheon? ", "correctAnswer" : "Stag", "incorrectAnswerOne" : "Direwolf", "incorrectAnswerTwo" : "Lion"},

  {"secondQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},

  {"thirdQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},

  {"fourthQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},

  {"fifthQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},

  {"sixthQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},

  {"seventhQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},

  {"eighthQuestion" : "This is a question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"},

  {"tieBreakerQuestion" : "This is a tie breaker question", "correctAnswer" : "Correct answer", "incorrectAnswerOne" : "Incorrect", "incorrectAnswerTwo" : "Incorrect"}

];
//tested game questions arrays
console.log(roundOneGameQuestions[0]);
console.log(roundTwoGameQuestions[0]);
console.log(roundThreeGameQuestions[0]);

const startGame = () => {
  $('#welcome').remove();
  $('#start').remove();
  questionOne();
} //functional

const questionOne = () => {
  const $q1 = $('<div/>').text('Question one?')
  $('body').append($q1);
    const $answerA = $('<button>').text('answer A');
    $('body').append($answerA);
    const $answerB = $('<button>').text('answer B');
    $('body').append($answerB);
    const $answerC = $('<button>').text('answer C');
    $('body').append($answerC);

      $answerA.on('click', wrongAnswer);
      $answerB.on('click', wrongAnswer);
      $answerC.on('click', rightAnswer);
} //functional

const questionTwo = () => {

}

const rightAnswer = () => {
console.log("Correct!"); // functional
}

const wrongAnswer = () => {
  console.log("NOPE!"); //functional
}

$('#start').on('click', startGame); //functional





});
