$(() => {

// The game is trivia. Correctly identifying who stated a certain quote from a book or film.

//It shall have TWO players.

//They will alternate turns answering a question.

//They will have DIFFERENT QUESTIONS

//They will click on multpile choice answers. (on click events)

//Players socres shall be kept.

//The questions will be stored in arrays.

//The answers will be stored in arrays.

//The initial message shall display a prompt on the DOM welcoming the players. Asking them to click to begin.
  //There will be a brief game description.
    //Simple stuff. Each correct answer is a point, each incorrect is nothing.
//Clicking "begin" will initiate the game (function).

const playerOne = {
  name: "",
  points: 0,
}

const playerTwo = {
  name: "",
  points: 0
}
console.log(playerTwo);
console.log(playerOne);

const startGame = () => {
  $('#welcome').remove();
  $('#start').remove();
  questionOne();
} //functional

const questionOne = () => {
  const $q1 = $('<div/>').text('New question?')
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
  console.log('COrrect!'); // functional
}

const wrongAnswer = () => {
  console.log("NOPE!"); //functional
}

$('#start').on('click', startGame); //functional





});
