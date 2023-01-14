// ----- Ternary Operator

//syntax
//condition? ifTrue : ifFalse;

// ----- Example 1
// let soup;
// let response = soup ? 'Yes we have soup' : 'Sorry, no soup today';

// console.log(response);

// ----- Example 2, chained ternary operators

// let soup = 'chicken Noodle Soup';
// let isCustomerBanned = false;

// let soupAccess = isCustomerBanned
//   ? 'Sorry, no soup for you!'
//   : soup
//   ? `Yes we have ${soup} today.`
//   : 'Sorry, no soup today';

// console.log(soupAccess);

// ----- Example 3, Grading scale, multiple chained ternary operators

// let testScore = 79;
// let myGrade =
//   testScore > 89
//     ? 'A'
//     : testScore > 79
//     ? 'B'
//     : testScore > 69
//     ? 'C'
//     : testScore > 59
//     ? 'S'
//     : 'F';
// console.log(`My test grade is a ${myGrade}`);

// ----- Rock, Paper Scissor ternary Operators, chained Ternary Operators

let playerOne = 'rock';
let computer = 'rock';
let result =
  playerOne === computer
    ? 'Tie Game!'
    : playerOne === 'rock' && computer === 'paper'
    ? 'Computer wins!'
    : playerOne === 'paper' && computer === 'scissors'
    ? 'Computer wins!'
    : playerOne === 'scissors' && computer === 'rock'
    ? 'Computer Wins!'
    : 'playerOne Wins!';
console.log(result);
