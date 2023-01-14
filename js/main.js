// Conditionals: If Statements

// if (condition) {
// run code, skip if false
// } else {
// run different code if false
// }

// ----- multiple if else use

// let customerIsBanned = false;
// let soup = 'chicken noodle soup';
// let crackers = true;
// let reply;

// if (customerIsBanned) {
//   reply = 'No soup for you!';
// } else if (soup && crackers) {
//   reply = `Here is your order of ${soup} & cracers`;
// } else if (soup) {
//   reply = `Here is your order of ${soup}`;
// } else {
//   reply = `sorry, we're out of ${soup}`;
// }
// console.log(reply);

// -----

// let testScore = 89;
// let grade;

// if (testScore >= 90) {
//   grade = 'A';
// } else if (testScore >= 80) {
//   grade = 'B';
// } else if (testScore >= 70) {
//   grade = 'C';
// } else if (testScore >= 60) {
//   grade = 'D';
// } else {
//   grade = 'F';
// }
// console.log(grade);

// ----- same as above  but with nested if statement in an else

// let testScore = 50;
// let grade;
// let collegeStudent = true;

// if (testScore >= 90) {
//   grade = 'A';
// } else if (testScore >= 80) {
//   grade = 'B';
// } else if (testScore >= 70) {
//   grade = 'C';
// } else if (testScore >= 60) {
//   grade = 'D';
// } else {
//   if (collegeStudent) {
//     grade = 'U';
//   } else {
//     grade = 'F';
//   }
// }
// console.log(grade);

// ----- Decision Three! (Rock, Paper, Scissors)

if (playerOne === computer) {
  // tie game
} else if (playerOne === 'rock') {
  if (computer === 'paper') {
    // computer wins
  } else {
    //playerOne wins
  }
} else if (playerOne === 'paper') {
  if (computer === 'scissors') {
    //computer wins
  } else {
    //playerOne wins
  }
} else {
  if (computer === 'rock') {
    //computer wins
  } else {
    //playerOne wins
  }
}
