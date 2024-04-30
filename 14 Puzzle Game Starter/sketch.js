// Puzzle Game Starter
// Assiya Boulfiza
// April 23, 2024
// Making a puzzle that takes in user input and resets each time and can help predit how good 
//your next move can be based on what you hover over



let grid = 
[   [0,   255,  0,  255,  0],
    [0,   0,   255,  0,   0],
    [0,  255,  255,  0,  255],
    [255, 255,  0,  255, 255]
];

let squareSize = 50;
const NUM_ROWS = 4;
const NUM_COLS = 5;

let row;
let col;

function setup() {
  createCanvas(NUM_COLS*squareSize, NUM_ROWS*squareSize);
  //keyPressed();
  randomGrid();
}

function draw() {
  row = getCurrentY(); 
  col = getCurrentX();
  print(row, col);
  background(220);
  drawGrid();
  getCurrentX();
  checkWinCondition();
}

function flip(x, y){
  if(grid[y][x] === 0) grid[y][x] = 255;
  else grid[y][x] = 0;
}

function mousePressed(){
 
  if(mouseIsPressed && keyIsDown(SHIFT)){
    flip(col, row);
  }
  else{
     //always: flip the "current" tile
    flip(col, row);

  //depends a bit on position: flip 4 neighbours
  if(row < NUM_ROWS - 1) flip(col, row + 1); //top
  }
  
}

function getCurrentX(){
  //detrmine current column mouse is in and return it 
  let constrainX = constrain(mouseX, 0, width-1);
  return int(constrainX/squareSize)
}

function getCurrentY(){
  //determine current row of mouse and return it
  let constrainY = constrain(mouseY, 0, height-1);
  return int(constrainY/squareSize)
}

function drawGrid(){
  //read data from our 2d array (grid) and use the numbers there to set the colours of the squares 
  //which are arranged in a grid fashion 
  for(let y =0; y < NUM_ROWS; y++){
    for(let x = 0; x < NUM_COLS; x++){
      let fillValue = grid[y][x];
      fill(fillValue);

      
      // if (x === col && y === row) {
      //   fill(0, 255, 0); //green color on whatever square we hover on 
      // } else {
      //   fill(fillValue);
      // }

      square(x * squareSize, y * squareSize, squareSize);

      if( abs(y - row) <= 1 && x === col){
        fill(0, 255, 0, 100);
        square(x * squareSize, y * squareSize, squareSize);
      }
      if( y === row && abs(x - col) <=1 ){
        fill(0, 255, 0, 100);
        square(x * squareSize, y * squareSize, squareSize);
      }

      
    }
  }
}

function checkWinCondition() {
  //initilaize it to true 
  let allZeroes = true;
  let allOnes = true;

  for(let y = 0; y < NUM_ROWS; y++){
    for(let x = 0; x < NUM_COLS; x++){
      //if not all zero's are equal to or set to zero then it is false, otherwise 
      // the statment will remain true and you will win
      if(grid[y][x] !== 0) {
        allZeroes = false;
      }
      if(grid[y][x] !== 255) {
        //same thing here as with zeros
        allOnes = false;
      }
    }
  }
  //if all either is true, print you win on screen
  if(allZeroes || allOnes === true) {
    textSize(40);
    fill(160, 32, 240);
    text("You Win!!!", 30, 110);
  }
}


function randomGrid() {
  //for the whole grid set the colors different everytime for each square, will be later 
  //called in setup so everytime the user goes to play the game, the puzzle is reset.
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      grid[y][x] = random([0, 255]); 
    }
  }
}



