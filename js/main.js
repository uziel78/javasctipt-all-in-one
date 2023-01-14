// Math Methods and Properties

console.log(Math.PI); //shows 3.14....

// Removes all decomals
console.log(Math.trunc(Math.PI)); //returns 3

//rounds up/down to nearest
console.log(Math.round(3.5)); //returns 4

// rounds up, no matter how small a decimal
console.log(Math.ceil(3.5)); //returns 4

// rounds down, always
console.log(Math.floor(3.5)); //returns 3

//two arguments, first base nimber and second exponent
console.log(Math.pow(2, 4)); //returns 2^4 = 16

//returns smalles number
console.log(Math.min(3, 5, 7, 9)); //returns 3

//returns highest number
console.log(Math.max(3, 5, 8)); //returns 8

//returns random number from 0 to 1, incliding 0, but not 1
console.log(Math.random());
//random number from 10
console.log(Math.floor(Math.random() * 10) + 1);
