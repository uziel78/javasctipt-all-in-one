// ----- Arrays ----- //

//const myArray = [];

//add elements to an array

// myArray[0] = 'Rune';
// myArray[1] = 1001;
// myArray[2] = false;

// ----- refer to array
//console.log(myArray);

//----- length property
//console.log(myArray.length);

// ----- last element
//console.log(myArray[myArray.length - 1]);

// ----- any one item
//console.log(myArray[1]);

// ----- add to array
//myArray.push('Christmas');
//console.log(myArray);

// ----- remove last item from array
//myArray.pop();
//console.log(myArray);

// ----- take out last item and assiign to variable
//const lastItem = myArray.pop();
//console.log(lastItem);

// ----- add first item of array
//myArray.unshift(42);
//console.log(myArray);

//the same below also goes for push
// const newLength = myArray.unshift(42);
// console.log(newLength);

// ----- remove from front of the Array
// myArray.shift();
// console.log(myArray);

//take out of array and assign to variable
// const firstItem = myArray.shift();
// console.log(firstItem);
// console.log(myArray); //verify removal

// ----- remove item from middle of array (leaves empty space in array with undefined data!)
// delete myArray[1];
// console.log(myArray);

// ----- remove and replace item in array (the corerct way). Surgical removal of one or more coherent positions in an Array
//myArray.splice(1, 1); //remove one element from the 1 position
//console.log(myArray);

// can be used to replace values:
//myArray.splice(1, 1, 42); //1st position, 1 item, replaced with number 42
//myArray.splice(1, 0, 42); // fistposition, add without deleting (0), number 42
//console.log(myArray);

// ----- part 2 -----

//slice method example
//const myArray = ['A', 'B', 'C', 'D', 'E', 'F'];
//console.log(myArray);

//const newArray = myArray.slice(2, 5); //new array starts at position 2, ends at position 5 (not including position 5)
//onsole.log(newArray);

// ----- reverse method
//myArray.reverse(); //does not create a new array
//console.log(myArray);

// ----- join method
//myArray.join();
//const newString = myArray.join(); //all elements in array becomes one String
//console.log(newString);

// ----- split method (string method, not array method). Reverses the join method above in this case.
//const newArray = newString.split(','); //creates new array!
//console.log(newArray);

// ----- part 3 -----

// ----- combining arrays with concat method
const myArrayA = ['A', 'B', 'C'];
const myArrayB = ['D', 'E', 'F'];

//const newArray = myArrayB.concat(myArrayA);
//console.log(newArray);

// ----- The Spread operator (newer way of doing the above)
const newArray = [...myArrayA, ...myArrayB];
console.log(newArray);
//spread operators (...) takes the individual elements from the
// two above arrays and combines them in a new array, instead of making two nested arrays (see below)
const nestedArrays = [myArrayA, myArrayB];
console.log(nestedArrays);

// ----- how to log deeper into nested arrays
console.log(nestedArrays[0][1]); //logs letter B from the fist nested array and position 1 in that array
