// ----- Refactor Game with Arrays ----- //

// ----- Rock, Paper Scissors Refactored with while Loop (working)

let playGame = confirm('Shall we play rock, paper or scissors?');
if (playGame) {
  //play
  while (playGame) {
    const playerChoice = prompt('Please enter Rock, Paper or Scissors.');
    if (playerChoice || playerChoice === '') {
      const playerOne = playerChoice.trim().toLowerCase();
      if (
        playerOne === 'rock' ||
        playerOne === 'paper' ||
        playerOne === 'scissors'
      ) {
        const computerChoice = Math.floor(Math.random() * 3);
        const rpsArray = ['rock', 'paper', 'scissors'];
        const computer = rpsArray[computerChoice];

        const result =
          playerOne === computer
            ? 'Tie Game!'
            : playerOne === 'rock' && computer === 'paper'
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : playerOne === 'paper' && computer === 'scissors'
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : playerOne === 'scissors' && computer === 'rock'
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : `playerOne: ${playerOne}\nComputer: ${computer}\nPlayer One wins!`;
        alert(result);

        playGame = confirm('Play Again?');
        if (!playGame) alert('Ok, thanks for playing');
        continue;
      } else {
        alert("you didn't enter rock, paper or scissors.");
        continue;
      }
    } else {
      alert('I guess you changed your mind. Maybe next time.');
      break;
    }
  }
} else {
  console.log("You didn't enter your name");
  alert('ok, maybe next time.');
}
