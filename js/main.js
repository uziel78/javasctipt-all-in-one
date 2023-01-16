// ----- Higher Order Functions ----- //

// A higher order function is a function that does at least one of the following:
// 1. Takes one or more functions as an argument (parameter)
// 2. Returns a function as the result.

// ----- Example 1 -----

import { posts } from './data.js';

//forEach
//JSON data can be gotten from from "https://jsonplaceholder.typicode.com/posts" //practice API

//forEach
posts.forEach((post) => {
  console.log(post);
});
console.clear();

//filter
const filteredPosts = posts.filter((post) => {
  return post.userId === 10;
});
console.log(filteredPosts);

//map
const mappedPosts = filteredPosts.map((post) => {
  return post.id * 10;
});
console.log(mappedPosts);

//reduce
const reducedPostsValue = mappedPosts.reduce((sum, posts) => {
  return sum + posts;
});
console.log(reducedPostsValue);
