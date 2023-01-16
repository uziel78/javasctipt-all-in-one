// ----- Promises, Fetch, Async and Await ----- //

// ----- Callbacks ----

//Callback
//function fistFunction(parameters, callback) {
// do stuff
//   callback();
// }

// ----- Promises -----

// 3 states: Pending, Fulfilled, Rejected

// const myPromise = new Promise((resolve, reject) => {
//   const error = false;
//   if (!error) {
//     resolve('Yes! resovled the promise');
//   } else {
//     reject('No! rejected the promise.');
//   }
// });

//state of the value, NOT value as we would work with it!
//console.log(myPromise);

//Do this! -returns correct value
//myPromise.then((value) => {
//   console.log(value);
// });

//const users = fetch('https://jsonplaceholder.typicode.com/users');

//pending state
//console.log(users); //just returns "pending" state

// ----- Async/Await ----- //

const myUsers = {
  userList: [],
};
// async function myCoolFunction() {
//do things
// }

// // or in Arrow Function format:
// const myCoolFunction = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const jsonUserData = await response.json();
//   //console.log(jsonUserData);
//   return jsonUserData;
// };

// myCoolFunction();

// //function chained to function above
// const anotherFunc = async () => {
//   const data = await myCoolFunction();
//   //console.log(data);
//   myUsers.userList = data;
//   console.log(myUsers.userList);
// };

// anotherFunc();
// //not awaiting any data due to being outside "await" of the above functions (empty Array)
// console.log(myUsers.userList);

// ---- Example 1, Workflow Function ----- //

// const getAllUserEmails = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const jsonUserData = await response.json();

//   const userEmailArray = jsonUserData.map((user) => {
//     return user.email;
//   });

//   //console.log(userEmailArray);
//   //return userEmailArray;
//   //assign resultto another function that can do something with the Data once this function completes:
//   postToWebPage(userEmailArray);
// };

// const postToWebPage = (data) => {
//   console.log(data);
// };

// getAllUserEmails();

// ----- Example 2 ------ //

//2nd paramereter of Fetch is object

// const getDadJoke = async () => {
//   const response = await fetch('https://icanhazdadjoke.com/', {
//     method: 'GET',
//     headers: {
//       Accept: 'application/json',
//       //Accept: 'text/plain',
//     },
//   });
//   const jsonJokeData = await response.json();

//   console.log(jsonJokeData);

//   //   const textJokeData = await response.text();
//   //   console.log(textJokeData);
// };

// getDadJoke();

// ----- Example 3 ----- //

//POST Data -needs CORS Fix
//https://cors-anywhere.herokuapp.com/
//see API documentation for fix...

const jokeObject = {
  id: 'sHlqrjyPf',
  joke: 'How can you tell a vampire has a cold? They start coffin.',
};

const postData = async (jokeObj) => {
  const response = await fetch('https://httpbin.org/post/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jokeObj),
  });
  const jsonResponse = await response.json();

  console.log(jsonResponse);
};

postData(jokeObject);
