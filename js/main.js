// ----- User Input

// ----- Alert!
//no data returned from input
//alert('Hello World!!');

// ----- Confirm!
// returns true or fale values on click (in variable)
//confirm('Ok === true\nCancel === False');
// let myBoolean = confirm('Ok === true\nCancel === False');
// console.log(myBoolean);

// ----- Prompt!
// cancel button returns null value.
let name = prompt('please enter your name.');
if (name) {
  console.log(name.length);
  console.log(name.trim().length);
  console.log(name.trim());
} else {
  console.log("You didn't enter your name");
}
