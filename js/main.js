// ----- Modules ----- //

// type="module" automatically applies "defer" (no need to have link at end of Body) and "use strict".

// ----- Example 1 -----

// import playGuitar from './guitars.js';
// import { shredding as shred, plucking } from './guitars.js';

// console.log(playGuitar());
// console.log(shred(), plucking());

// ----- Example 2 -----
//alternate import options
//import * as Guitars from './guitars.js';

//the default export must be named default (so no default export might be optimal)
// console.log(Guitars.default());
// console.log(Guitars.shredding());
// console.log(Guitars.plucking());

// ----- Example 3 -----

import User from './user.js';

const me = new User('email@email.com', 'rune');

console.log(me);
console.log(me.greeting());
