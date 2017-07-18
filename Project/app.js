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

const questions = [
  'this is an example question?',
  'this is another sample question'
]

const answers = [
  'example answer 1',
  'example answer 2',
  'example answer 3'
]




const startGame = () => {
  $('#welcome').remove();
  $('#start').remove();
  const $firstQuestion = $('<div/>').text('Sample question?');
  $('body').append($firstQuestion)
}


$('#start').on('click', startGame);








});
