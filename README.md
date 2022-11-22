# Tic-Tac-Toe
A two player game of tic-tac-toe. Players (**X** and **O**) take turns in trying to get three of their characters in a line.

### [Play the game!]()

## :mag_right: About
### How to play the game
1. Click the link above and you will be presented with the game board.
2. Player **X** goes first. Click on a tile to place an **X**.
3. Player **O** goes second. Click on a tile to place an **O**.
4. Alternate turns until there is a winner (three in a row - horizontally, vertically or diagonally) or a tie.
5. The result will be displayed at the end of the game.
6. Click **Restart game** if you'd like to play again.

## :blue_book: Game Plan!

### 1. Game Requirements
* Render the game in a browser
* Deploy the game on Github pages
* A grid
* 2 players
* Switch turns and track who's turn it is
* Logic to determine the winner
* Display the winner
* Event listeners
* Updating game board
* DOM manipulation
* Separate HTML/CSS/Javascript files

### 2. Assumptions
* Player X starts first

### 3. Code Requirements
#### Specific Data Types
* Game - Track details about the game such as who's turn it is, game state, winner etc. - Object literal
* Grid - Players will interact with this grid to play - 2D array
* Players - Store details about the player. For example, their character (**X** or **O**) - Object literal
* Variables for DOM manipulation - DOM object

#### Loops and conditionals
* "While loop" - Check if the game has ended 
* "If" statement - Check if there is a winner or a tie

#### Variable names
* game
* grid
* player1
* player2

### 4. Tasks.
* Declare the required variables
* Write a function to initialize the game
* Render the grid
* Write logic to determine who's turn it is (**X** starts first)
* Wait for player **X** to make their move, then update the grid.
* Wait for player **0** to make their move, then update the grid.
* Write logic to determine the winner
* Write logic to determine if it's possible for someone to win
* Display the winner
* Write logic to determine if it's a tie
* Check if there is a winner. If there is a winner, display the winner.
* Check if it's still possible for someone to win, taking into account the number of remaining moves.
* If it's not possible for anyone to win, display that the game is tied.
* Check if they want to play again. If so, restart the game.

### 5. Tasks in Sequential Order
1. Declare the required variables
2. Write a function to initialize the game
3. Write logic to determine the winner
4. Write logic to determine if it's a tie
5. Write logic to determine if it's possible for someone to win
6. Render the grid
7. Write logic to determine who's turn it is (**X** starts first)
8. Loop until there is a winner or the game is tied
* Wait for player **X** to make their move, then update the grid.
* Check if there is a winner. If there is a winner, display the winner.
* Check if it's still possible for someone to win, taking into account the number of remaining moves. If it's still possible to have a winner, let the game continue. If not, display that the game is tied.
* Wait for player **0** to make their move, then update the grid.
* Check if there is a winner. If there is a winner, display the winner.
* Check if it's still possible for someone to win, taking into account the number of remaining moves. If it's still possible to have a winner, let the game continue. If not, display that the game is tied.
9. Check if they want to play again. If so restart the game.
 
### 6. Code Implementation for Straight-forward Tasks
1. Declare the required variables
```
let game = {};

let grid = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

let player1 = {
  character: 'X'
};

let player2 = {
  character: 'O'
};
```
2. Write a function to initialize the game
```
function initializeGame(game) {
  game.moves = 0;
  game.lastMove = '';
  game.currentPlayer = 'X';
  game.state = 'inProgress';
  game.winner = '';
  
  return game;
}
```
3. Write logic to determine the winner
```
function determineWinner(grid) {
  let winner = '';
  
  // Todo
  
  return winner;
}
```
4. Write logic to determine if it's a tie
```
function isTied(grid) {
  let tied = false;
  
  // Todo
  
  return tied
}
```
5. Write logic to determine if it's possible for someone to win
```
function determineGameState(grid) {
  let possible;
  
  // Todo
  
  return possible;
}
```
6. Render the grid
```
<div class="grid">
  <div class="row1">
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>    
  </div>
  <div class="row2">
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>   
  </div>
  <div class="row3">
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>   
  </div>
</div>
```
7. Write logic to determine who's turn it is (**X** starts first)
```
function whosTurn(game.lastMove) {
  if (game.lastMove === 'X') {
    return 'O';
  } else {
    return 'X';
}
```
8. Loop until there is a winner or the game is tied
* Wait for player **X** to make their move, then update the grid.
* Check if there is a winner. If there is a winner, display the winner.
* Check if it's still possible for someone to win, taking into account the number of remaining moves. If it's still possible to have a winner, let the game continue. If not, display that the game is tied.
* Wait for player **0** to make their move, then update the grid.
* Check if there is a winner. If there is a winner, display the winner.
* Check if it's still possible for someone to win, taking into account the number of remaining moves. If it's still possible to have a winner, let the game continue. If not, display that the game is tied.
```
while(game.state === 'inProgress') {
  // Wait for current player to make their move
  // Update grid
  // Update game state
}
```
9. Check if they want to play again. If so restart the game.
```
let playAgain;
// Ask if they want to play again and assign true or false to playAgain
if (playAgain) {
  // Reset the game
};
```
