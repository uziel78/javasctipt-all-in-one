// ----- Web Storage API ----- //

// Not part of the DOM -refers to the Window API
// Available to JS via the global variable window

//We do not have to type Window. It is implied.

//example
//window.alert('OK'); //same as alert("OK")

// url of a website
//window.location //same as location
//alert(location); //responds with "http://127.0.0:5500/" here in Live Server.

// ----- Local Storage -----
//stores persistent data in browser

// accessed via
//localStorage.localStorage

// ----- Session Storage -----
// data only kept while user is in the session

//accessed via
//localStorage.sessionStorage

// ----- Example 1 -----

const myArray = ['eat', 'sleep', 'code'];

const myObject = {
  name: 'Rune',
  hobbies: ['eat', 'slep', 'code'],
  logName: function () {
    console.log(this.name);
  },
};

//myObject.logName();

// sessionStorage.setItem('mySessionStore', myObject);
// const mySessionData = sessionStorage.getItem('mySessionStore');
// console.log(mySessionData);

// sessionStorage.setItem('mySessionStore', myArray);
// const mySessionData = sessionStorage.getItem('mySessionStore');
// console.log(mySessionData);

//above conclusion: object stringified and corrupted when turned to string, array becomes string.
//data to Session and localstorage should be stored as JSON data

//note that anonymous function (all methods) in object is lost
// sessionStorage.setItem('mySessionStore', JSON.stringify(myObject));
// const mySessionData = JSON.parse(sessionStorage.getItem('mySessionStore'));
// console.log(mySessionData);

localStorage.setItem('myLocalStore', JSON.stringify(myArray));
//remove item
//localStorage.removeItem('myLocalStore');
//remove all items
//localStorage.clear();
const key = localStorage.key(0);
//log number of keys in localstorage
const storeLength = localStorage.length;
const myLocalData = JSON.parse(localStorage.getItem('myLocalStore'));

console.log(myLocalData);
console.log(key);
console.log(storeLength);

//only change for localStorage is changing sessionStorage to localStorage
