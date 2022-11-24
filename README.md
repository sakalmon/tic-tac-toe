# Tic-Tac-Toe
A classic two player game of tic-tac-toe! Players (**X** and **O**) take turns in trying to get three of their tokens in a line. At the end of the game, the winner (or 'tie') will be displayed.

![screenshot](https://github.com/sakalmon/tic-tac-toe/blob/main/tic-tac-toe.png)

## [Play the game!](https://sakalmon.github.io/tic-tac-toe/)

## :mag_right: About
### How to play the game
1. Click the link above and you will be presented with the avatar selection screen.
2. Select an avatar for player 1 and player 2 to start the game (it won't if you haven't).
3. Player 1(**X**) goes first. Click on a tile to place an **X**.
3. Player 2(**O**) goes next. Click on a tile to place an **O**.
4. Alternate turns until there is a winner (three in a row - horizontally, vertically or diagonally) or a tie.
5. The result will be displayed at the end of the game.
6. Click **Play Again** if you want more.

## :blue_book: Plan for developing the game

### 1. Game Requirements
* Render the game in a browser
* Deploy the game on Github pages
* Create a game grid
* 2 player game
* Switch turns and track who's turn it is
* Update the game grid when a move is made
* Logic to determine the winner
* Display the winner
* Display a tie
* Use event listeners
* Use DOM manipulation
* Separate HTML/CSS/Javascript files

### 2. Assumptions
* Player X starts first
* Use the traditional 3x3 grid
* Use the traditional **X** and **O** tokens

### 3. Code Requirements
#### Specific Data Types
* Game - Track details about the game such as who's turn it is, game state, winner, etc. - Object literal
* Grid - Players will interact with this grid to play - 2D array
* Players - Store details about the player. For example, their token (**X** or **O**) - Object literal
* Variables for DOM manipulation - DOM object

#### Loops and conditionals
* Some sort of loop to keep checking for a winner/tie
* 'For' loop for adding multiple event listeners, iterating through DOM objects, etc.
* 'If-else' statements - Check if there is a winner or a tie, etc.

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
* Loop until there is a winner or the game is tied
* Write logic to determine the winner
* Display the winner
* Write logic to determine if it's a tie
* Check if there is a winner. If there is a winner, display the winner.
* Check if they want to play again. If so, restart the game.

### 5. Tasks in Sequential Order
1. Declare the required variables
2. Write a function to initialize the game
3. Write logic to determine the winner
4. Write logic to determine if it's a tie
5. Render the grid
6. Write logic to determine who's turn it is (**X** starts first)
7. Loop the following until there is a winner or the game is tied
* Wait for player **X** to make their move, then update the grid.
* Check if there is a winner. If there is a winner, display the winner.
* Wait for player **0** to make their move, then update the grid.
* Check if there is a winner. If there is a winner, display the winner.

8. Check if they want to play again. If so restart the game.
 
### 6. Code Implementation for Straight-forward Tasks
1. Declare the required variables
```
let game = {};
let grid = [];

let player1 = {
  character: 'X'
};

let player2 = {
  character: 'O'
};
```
2. Write a function to initialize the game
```
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
  
  return tied;
}
```
5. Render the grid
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
6. Write logic to determine who's turn it is (**X** starts first)
```
function whosTurn(lastMove) {
  if (lastMove === 'X') {
    return 'O';
  } else {
    return 'X';
}
```
7. Loop until there is a winner or the game is tied
* Wait for player **X** to make their move, then update the grid.
* Check if there is a winner. If there is a winner, display the winner.
* Wait for player **0** to make their move, then update the grid.
* Check if there is a winner. If there is a winner, display the winner.
```
// A while loop might not be required here as we can use 'click' events and 'if' statements to decide whether or not the game should continue
while(game.state === 'inProgress') {
  // Wait for current player to make their move
  // Update grid
  // Update game state
}
```
8. Check if they want to play again. If so restart the game.
```
let playAgain;
// Ask if they want to play again and assign true or false to playAgain
if (playAgain) {
  // Reset the game
};
```
