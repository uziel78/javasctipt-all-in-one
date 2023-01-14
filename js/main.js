// ----- Functions

// Functions provide reusable code!

// remember Methods = Built-in fuactions

// ----- Function Declaration Syntax -----

// function sum(num1, num2) {
//   //contingency in case of one attribute
//   if (num2 === undefined) {
//     return num1 + num1;
//   }
//   return num1 + num2;
// }

// console.log(sum(2, 5));
// // one attribute
// console.log(sum(2));

// ----- function to cut out part of string -----

// function getUserNameFromEmail(email) {
//   return email.slice(0, email.indexOf('@'));
// }

// console.log(getUserNameFromEmail('dilbert@getUserNameFromEmail.com'));
// console.log(getUserNameFromEmail('user@github.com'));

// ----- Anonymous Function Examples -----

// const getUserNameFromEmail = function (email) {
//   return email.slice(0, email.indexOf('@'));
// };

// console.log(getUserNameFromEmail('rune@grunesemail.com'));

// ----- Arrow Function -----

// const getUserNameFromEmail = (email) => {
//   return email.slice(0, email.indexOf('@'));
// };

// console.log(getUserNameFromEmail('gunnar@gunnarssemail.com'));

// ----- Arrow Function that combines multiple methods (captial first letter + remaining lowercase of any string)

const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase('rUnE'));
