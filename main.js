// 1. Declare the required variables
let game = {};
let grid = [];

let player1 = {
  character: 'X'
};

let player2 = {
  character: 'O'
};

// 2. Write a function to initialize the game
function initializeGame() {
  game.moves = 0;
  game.lastMove = '';
  game.currentPlayer = 'X';
  game.state = 'inProgress';
  game.winner = '';
  
  grid = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
}

// 3. Write logic to determine the winner
function determineWinner(grid) {
  let winner = '';
  
  // Todo
  
  return winner;
}

// 4. Write logic to determine if it's a tie
function isTied(grid) {
  let tied = false;
  
  // Todo
  
  return tied;
}

// 5. Write logic to determine if it's possible for someone to win
function whosTurn(lastMove) {
  if (lastMove === 'X') {
    return 'O';
  } else {
    return 'X';
  }
}

// 7. Write logic to determine who's turn it is (X starts first)
while(game.state === 'inProgress') {
  // Wait for current player to make their move
  // Update grid
  // Update game state
}

// 8. Loop until there is a winner or the game is tied
// Wait for player X to make their move, then update the grid.
// Check if there is a winner. If there is a winner, display the winner.
// Check if it's still possible for someone to win, taking into account the number of remaining moves. If it's still possible to have a winner, let the game continue. If not, display that the game is tied.
// Wait for player 0 to make their move, then update the grid.
// Check if there is a winner. If there is a winner, display the winner.
// Check if it's still possible for someone to win, taking into account the number of remaining moves. If it's still possible to have a winner, let the game continue. If not, display that the game is tied.

// 9. Check if they want to play again. If so restart the game.
let playAgain;
// Ask if they want to play again and assign true or false to playAgain
if (playAgain) {
  // Reset the game
};