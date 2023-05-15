'use strict';
// choosing a query from html document in () we choose it like in css
// To get text "start guessing" we add to below line ".textContent"
// When we have multiple . operators they are executed from left to right
// console.log(document.querySelector('.message').textContent);

// What is DOM?
// Document object model - structured represantation of HTML documents (in a form of a tree). The DOM allows JS to access HTML elements and styles to manipulate them.
// In short DOM is a connection point between JS code ans HTML objects

// We can SELECT elements (above)
// We can also SET the elements (look down please)
// document.querySelector('.message').textContent = 'Correct number! 🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// defining number outside of button (if it would be in the button, number would change each time you hit the button)

// we are displaying number for development reasons

// DECREASING SCORE after each wrong guess
let score = 20;
let highscore = 0;

// HANDLING CLICK EVENTS
// event - this is something that happens on the page (mouse move, key click)
// we need to pass into addEventListener a type of the event and event handler function
// as we can compare only numbers to numbers we have to also convert it to a number
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    // when no input
    document.querySelector('.message').textContent = 'No number 😐';
  } else if (guess === secretNumber) {
    // when win
    document.querySelector('.message').textContent = 'Correct number! 🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // HIGHSCORE IMPLEMENTATION
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    0;
  } else if (guess > secretNumber) {
    // when guess is too high
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high! ☝';

      // DECREASING SCORE after each wrong guess
      score = score - 1;
      document.querySelector('.score').textContent = score;
      // or SCORE--;
    } else {
      document.querySelector('.message').textContent = 'You lost the game! 👻';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    // when guess is too low
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low! 👇';

      // DECREASING SCORE after each wrong guess
      score = score - 1;
      document.querySelector('.score').textContent = score;
      // or SCORE--;
    } else {
      document.querySelector('.message').textContent = 'You lost the game! 👻';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '30rem';
});
// WE DO NOT CALL THIS FUNCTION - JS WILL DO IT AUTOMATICALLY ONCE THE ACTION IS RUN ON THE PAGE

// MANIPULATING CSS STYLES
//     document.querySelector('body').style.backgroundColor;
//  selecting item in html -> targetting style of it  -> picking what in style we want to change = change (it always has to be a string!!)
