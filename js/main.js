// ----- Scope

// var, let and const

//var can be overwritten, no errors. x can be re-assigned.
// var x = 1;
// var x = 2;

// console.log(x);

//let throws an Syntax error as x has already been declared. x can be re-assigned.
// let x = 1;
// let x = 2;

//const cannot be overwritten, nor re.assigned. Throws an error in both cases.
// console.log(x);
// const x = 1;
// x = 2;
// console.log(x);

// ----- Global Scope -----

//var, let and const are all global variables when defined in the global scope.
// var x = 1;
// let y = 2;
// const z = 3;

// ----- Local Scope (Block Scope or Function scope)-----
//must console.log() in same scope

//Function
// function myFunc() {
//   const z = 5;
//   console.log(z);

//   // Block (includes if statements, loops, switch statements, etc)
//   {
//     let y = 4;
//     const x = 3;
//     console.log(y);
//   }
// }
// myFunc();

// ----- Example 2 -----

// global scope

//values pulled from parent(s) if not local

var x = 1; //function scoped
let y = 2; //bloack scoped
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc() {
  var x = 10;
  const z = 5;

  {
    var x = 11; // function scoped
    const z = 6; // block scoped
    console.log(`Block: ${x}`);
    console.log(`Block: ${y}`);
    console.log(`Block: ${z}`);
  }
  console.log(`function: ${x}`);
  console.log(`function: ${y}`);
  console.log(`function: ${z}`);
}
myFunc();
