// ========================================================
// Variable declarations
// ========================================================

let game = {};
let grid = [];

let player1 = {
  character: 'X'
};

let player2 = {
  character: 'O'
};

let allBoxes = document.querySelectorAll('.grid>div>div');
let currentPlayer = document.querySelector('.current-player');
let winner = document.querySelector('.winner');

// ========================================================
// Function declarations
// ========================================================

// Set up a new game
function initializeGame() {
  game.moves = 0;
  game.lastMove = 'O';
  game.state = 'inProgress';
  game.winner = '';
  
  grid = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
}

// Determine the winner
function determineWinner(grid) {
  let winner = '';
  
  // Todo
  // Check rows
  for (let row = 0; row < 3; row++) {
    let firstChar = grid[row][0];

    if (firstChar !== '') {
      if (grid[row][1] === firstChar) {
        if (grid[row][2] === firstChar) {
          winner = firstChar;

          return winner;
        }
      }
    }
  }

  // Check columns
  for (let column = 0; column < 3; column++) {
    let firstChar = grid[0][column];

    if (firstChar !== '') {
      if (grid[1][column] === firstChar) {
        if (grid[2][column] === firstChar) {
          winner = firstChar;
          return winner;
        }
      }
    }
  }

  // Check diagonally
  firstChar = grid[0][0];

  if (firstChar !== '') {
    if (firstChar === grid[1][1]) {
      if (firstChar === grid[2][2]) {
        winner = firstChar;
        return winner;
      }
    }
  }

  firstChar = grid[0][2];

  if (firstChar !== '') {
    if (firstChar === grid[1][1]) {
      if (firstChar === grid[2][0]) {
        winner = firstChar;
      }
    }
  }
}

// Determine if it's a tie
function isTied(grid) {
  let tied = false;
  
  // Todo
  
  return tied;
}

// Determines the state of the game
// Parameters: 2D Array
// Returns: String. 'inProgress', 'winner', 'tied'
function determineGameState(grid) {
  let possible;
  
  // Todo
  
  return possible;
}

// Determines who's turn it is
function whosTurn(lastMove) {
  if (lastMove === 'X') {
    return 'O';
  } else {
    return 'X';
  }
}

// ========================================================
// Main Code
// ========================================================

initializeGame();

// Add click event listeners to all boxes
for (let i = 0; i < 9; i++) {  
  allBoxes[i].addEventListener('click', function(event) {
    // Prevent subsequent clicks changing the character already in the box
    if (event.target.classList.contains('clicked') === false) {
      let parent = event.target.parentNode;
      let whosNext = whosTurn(game.lastMove);
      let row = parent.className[parent.className.length - 1] - 1;
      let column = event.target.className[event.target.className.length - 1] - 1;

      event.target.classList.add('clicked');
      
      if (whosNext === 'X') {
        allBoxes[i].textContent = whosNext;
        game.lastMove = 'X'
      } else {
        allBoxes[i].textContent = whosNext;
        game.lastMove = 'O'
      }

      // Update grid array with the clicked location
      grid[row][column] = whosNext;
      game.moves++;
      currentPlayer.textContent = whosTurn(game.lastMove);

      console.log(game.moves);
      // Only check for a winner after 5 moves (minimum possible moves to win the game)
      if (game.moves >= 5) {
        console.log('Checking for winners');
        if (typeof determineWinner(grid) === 'string') {
          console.log('Winner: ' + determineWinner(grid));
          winner.textContent = determineWinner(grid);
          // We have a winner. Stop the game.
          for (let i = 0; i < 9; i++) {
            allBoxes[i].classList.add('clicked');
          }
        }
        if (game.moves === 9 && typeof determineWinner(grid) !== 'string') {
          console.log(determineWinner(grid));
          console.log('Game is tied');
        }
      }
    }
  });
}

// 8. Loop until there is a winner or the game is tied
// Wait for player X to make their move, then update the grid.
// Check if there is a winner. If there is a winner, display the winner.
// Check if it's still possible for someone to win, taking into account the number of remaining moves. If it's still possible to have a winner, let the game continue. If not, display that the game is tied.
// Wait for player 0 to make their move, then update the grid.
// Check if there is a winner. If there is a winner, display the winner.
// Check if it's still possible for someone to win, taking into account the number of remaining moves. If it's still possible to have a winner, let the game continue. If not, display that the game is tied.
// while(game.state === 'inProgress') {
//   // Wait for current player to make their move
//   // Update grid
//   // Update game state
// }

// 9. Check if they want to play again. If so restart the game.
// let playAgain;
// // Ask if they want to play again and assign true or false to playAgain
// if (playAgain) {
//   // Reset the game
// };