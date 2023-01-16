// ----- Javascript Event Listeners ----- //

document.addEventListener('readystatechange', (event) => {
  if (event.target.readyState === 'complete') {
    console.log('readystete: complete');
    initApp();
  }
});

const initApp = () => {
  console.log('Hello World!');
};
