// ========================================================
// Variable declarations
// ========================================================

let game = {};
let grid = [];

let player1 = {
  character: 'X',
  avatar: '',
  wins: 0
};
let player2 = {
  character: 'O',
  avatar: '',
  wins: 0
};

// DOM Objects
let allBoxes = document.querySelectorAll('.grid>div>div');
let currentPlayer = document.querySelector('.current-player');
let outcome = document.querySelector('.result h2');
let result = document.querySelector('.result');
let winner = document.querySelector('.winner');
let p1Wins = document.querySelector('.p1-wins');
let p2Wins = document.querySelector('.p2-wins');
let resetScoreBtn = document.querySelector('.reset-score-btn');
let allBlueAvatars = document.querySelectorAll('.player1-tkn div');
let allRedAvatars = document.querySelectorAll('.player2-tkn div');
let startBtn = document.querySelector('.start-btn');
let tokenSelMenu = document.querySelector('.popup');
let leftAvatar = document.querySelector('.left-avatar');
let rightAvatar = document.querySelector('.right-avatar');
let gameGrid = document.querySelector('.grid');
let leftToken = document.querySelector('.left-token p');
let rightToken = document.querySelector('.right-token p');

let avatar = document.createElement('div');
avatar.classList.add('win-avatar');

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

  clearGrid();
  outcome.textContent = '';
  
  for (let i = 0; i < 9; i++) {
    allBoxes[i].classList.remove('clicked');
    allBoxes[i].classList.remove('green');
  }

  currentPlayer.textContent = 'Player X starts first';
}

function resetScore() {
  player1.wins = 0;
  player2.wins = 0;
  p1Wins.textContent = player1.wins;
  p2Wins.textContent = player2.wins;
}

// Determine the winner
function determineWinner(grid) {
  let winner = '';
  
  // Check rows
  for (let row = 0; row < 3; row++) {
    let firstChar = grid[row][0];

    if (firstChar !== '') {
      if (grid[row][1] === firstChar) {
        if (grid[row][2] === firstChar) {
          winner = firstChar;

          if (row === 0) {
            for (let i = 0; i < 3; i++) {
              allBoxes[i].classList.add('green')
            }
          } else if (row === 1) {
              for (let i = 3; i < 6; i++) {
                allBoxes[i].classList.add('green');
              }
          } else {
              for (let i = 6; i < 9; i++) {
                allBoxes[i].classList.add('green');
              }
          }

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

          if (column === 0) {
            for (let i = 0; i < 7; i = i + 3) {
              allBoxes[i].classList.add('green')
            }
          } else if (column === 1) {
              for (let i = 1; i < 8; i = i + 3) {
                allBoxes[i].classList.add('green');
              }
          } else {
              for (let i = 2; i < 9; i = i + 3) {
                allBoxes[i].classList.add('green');
              }
          }

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

        for (let i = 0; i < 9; i = i + 4) {
          allBoxes[i].classList.add('green');
        }

        return winner;
      }
    }
  }

  // Check other diagonal
  firstChar = grid[0][2];

  if (firstChar !== '') {
    if (firstChar === grid[1][1]) {
      if (firstChar === grid[2][0]) {
        winner = firstChar;

        for (let i = 2; i < 7; i = i + 2) {
          allBoxes[i].classList.add('green');
        }

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

// Determines who's turn it is
function whosTurn(lastMove) {
  if (lastMove === 'X') { 
    return 'O';
  } else {
    return 'X';
  }
}

function clearGrid() {
  for (let i = 0; i < 9; i++) {
    allBoxes[i].textContent = '';
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
      currentPlayer.textContent = `Player ${whosTurn(game.lastMove)}'s turn`;

      // Only check for a winner after 5 moves (minimum possible moves to win the game)
      if (game.moves >= 5) {
        if (typeof determineWinner(grid) === 'string') {
          outcome.textContent = `Player ${determineWinner(grid)} wins!`;
          
          if (determineWinner(grid) === 'X') {
            player1.wins++;
            p1Wins.textContent = player1.wins;
            result.appendChild(avatar);
            let winAvatar = document.querySelector('.win-avatar');
            winAvatar.classList.add(player1.avatar.className);

          } else {
            player2.wins++;
            p2Wins.textContent = player2.wins;
            result.appendChild(avatar);
            let winAvatar = document.querySelector('.win-avatar');
            winAvatar.classList.add(player2.avatar.className);
          }

          result.classList.remove('hidden');
          result.classList.add('visible');
          game.state = 'ended';

          // We have a winner. Stop the game.
          for (let i = 0; i < 9; i++) {
            allBoxes[i].classList.add('clicked');
          }
        }

        if (game.moves === 9 && typeof determineWinner(grid) !== 'string') {
          outcome.textContent = 'Tie!';
          game.state = 'ended';
          result.classList.remove('hidden');
          result.classList.add('visible');
        }

        if (game.state === 'ended') {
          let restartButton = document.createElement('button');
          restartButton.classList.add('restart-btn');
          restartButton.textContent = 'Play again';

          let result = document.querySelector('.result');
          result.appendChild(restartButton);

          restartButton.addEventListener('click', function(event) {
            // Remove the button
            result.removeChild(event.target);
            result.classList.remove('visible');
            result.classList.add('hidden');
            
            // To prevent an error when trying to remove the avatar after a tie (avatar doesn't get appended as a child when there is a tie).
            // This code only runs when there is a winner
            if (result.childElementCount > 1) {
              let winAvatar = document.querySelector('.win-avatar');
              winAvatar.className = 'win-avatar';
              result.removeChild(winAvatar);
            }

            initializeGame();
          });
        }
      }
    }
  });
}

resetScoreBtn.addEventListener('click', resetScore);

let popUp = document.querySelector('.popup');

window.addEventListener('load', function(event) {
  popUp.classList.remove('hidden');
  popUp.classList.add('visible');
});

for (let i = 0; i < 9; i++) {
  allBlueAvatars[i].addEventListener('click', function(event) {
    if (event.target.classList[0][0] === 'b') {
      if (player1.avatar === '') {
        player1.avatar = event.target;
      } else {
        player1.avatar.classList.remove('selected');
        player1.avatar = event.target;
      }

      player1.avatar.classList.add('selected');
    }
  });

  allRedAvatars[i].addEventListener('click', function(event) {
    if (event.target.classList[0][0] === 'r') {
      if (player2.avatar === '') {
        player2.avatar = event.target;
      } else {
        player2.avatar.classList.remove('selected');
        player2.avatar = event.target;
      }

      player2.avatar.classList.add('selected');
    }
  });
}

startBtn.addEventListener('click', function(event) {
  if (player1.avatar !== '' && player2.avatar !== '') {
    tokenSelMenu.classList.remove('visible');
    tokenSelMenu.classList.add('hidden');
    player1.avatar.classList.remove('selected');  
    leftAvatar.classList.add(player1.avatar.className);
  
    tokenSelMenu.classList.remove('visible');
    tokenSelMenu.classList.add('hidden');
    player2.avatar.classList.remove('selected');  
    rightAvatar.classList.add(player2.avatar.className);
  
    gameGrid.classList.remove('hidden');
    gameGrid.classList.add('visible');
  
    leftToken.classList.remove('hidden');
    rightToken.classList.remove('hidden');
  }
});