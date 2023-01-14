// ----- Loops

// ----- while loop

// let myNumber = 0;
// while (myNumber < 50) {
//   myNumber += 2;
//   console.log(myNumber);
// }

// while lopp with conditional break
// let name = 'Rune';
// let counter = 0;
// let myLetter;

// while (true) {
//   myLetter = name[counter];
//   console.log(myLetter);
//   if (myLetter === 'e') break;
//   counter++;
// }

// ----- while loop with continue
let name = 'Rune';
let counter = 0;
let myLetter;

while (counter <= 3) {
  myLetter = name[counter];
  console.log(myLetter);
  if (counter === 1) {
    counter += 2;
    continue;
  }
  if (myLetter === 'e') break;
  counter++;
}
console.log(counter);

//don't create an endless loop!

// ----- do while loop

//a do while block executes code block at least once
// let myNumber = 50;
// do {
//   console.log(myNumber);
// } while (myNumber < 50);

// ----- For Loop

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let name = 'Rune';
// for (let i = 0; i <= name.length; i++) {
//   console.log(name.charAt(i));
// }
