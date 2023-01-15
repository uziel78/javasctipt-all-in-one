// ----- Objects ----- //

// ----- Object Syntax
//key-value pairs in curly braces

const myObj = { name: 'Rune' };

const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ['Eat', 'Sleep', 'Code'],
  beverage: {
    morning: 'Coffee',
    afternoon: 'Iced Tea',
  },
  //action becomes a method
  //   action: function () {
  //     return 'Hello World!';
  //   },
  action: function () {
    return `Time for ${this.beverage.morning}`;
  },
};

// console.log(anotherObj.beverage.morning);
// console.log(anotherObj['beverage']['morning']);
console.log(anotherObj.action());

// ----- Example 2 -----

const vehicle = {
  wheels: 4,
  engine: function () {
    return 'Vreooom!';
  },
};

// const truck = Object.create(vehicle);
// truck.doors = 2;
// console.log(truck);
// console.log(truck.wheels); // Inheritance example
// console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
  return 'Whoooosh!'; //Inherited method from vehicle overwritten
};
//console.log(car.engine());
//console.log(car.wheels);

// const tesla = Object.create(car);
// tesla.engine = function () {
//   return 'Shhhh....';
// };
// console.log(tesla.wheels);
// console.log(tesla.engine());

// ----- Example 3 -----

// const band = {
//   vocals: 'Robert Plant',
//   guitar: 'Jimmy Page',
//   bass: 'John Paul Jones',
//   drums: 'John Bonham',
// };
// add to object
//band.keyboards = 'Nutcase';

// add method
// band.start = function() {
//     return XXX
// }

//delete property (key-value pair)
//delete band.drums;

// check for properties
// console.log(band.hasOwnProperty('drums'));

// console.log(Object.keys(band));
// console.log(Object.values(band));

//loop for objects (called For In loop), shows keys
// for (let job in band) {
//   console.log(band[job]);
// }

// shows keys and values
// for (let job in band) {
//   console.log(`On ${job}, it's ${band[job]}!`);
// }

// ----- Destructuring Objects

const band = {
  vocals: 'Robert Plant',
  guitar: 'Jimmy Page',
  bass: 'John Paul Jones',
  drums: 'John Bonham',
};

// myVariable is pulled out of band object and assigned as a variable (guitar: is ther becasue key-value pair)
// const { guitar: myVariable } = band;
// console.log(myVariable);

// as above, but multiple variables
const { guitar: myVariable, bass: secondVariable } = band;
console.log(myVariable, secondVariable);

//alternate method, acceses the values of the keys due to naming them the same as the keys of the object
const { vocals, guitar, bass, drums } = band;
console.log(vocals, guitar, bass, drums);

//pulls out vocals value out of the bands object
function sings({ vocals }) {
  return `${vocals} sings!`;
}
console.log(sings(band));
