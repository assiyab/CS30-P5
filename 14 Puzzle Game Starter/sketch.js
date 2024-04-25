// Puzzle Game Starter
// Assiya Boulfiza
// April 23, 2024
// 

let pattern = "cross";

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
    flip(col, row);

  //depends a bit on position: flip 4 neighbours
  if(row < NUM_ROWS - 1) flip(col, row + 1); //top
  }

  //only do something is mouseX, mouseY are on Canvas...

  //always: flip the "current" tile
  //flip(col, row);

  //depends a bit on position: flip 4 neighbours
  //if(row < NUM_ROWS - 1) flip(col, row + 1); //top
  
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
      
      // if (pattern === "cross") {
      //   if (x === col || y === row) {
      //     fill(0, 255, 0); 
      //   } else {
      //     fill(fillValue);
      //   }
      // } else if (pattern === "square") {
      //   if (abs(x - col) <= 1 && abs(y - row) <= 1) {
      //     fill(0, 255, 0);
      //   } else {
      //     fill(fillValue);
      //   }
      // } else {
      //   fill(fillValue);
      // }
      square(x * squareSize, y * squareSize, squareSize);
    }
  }
}


function checkWinCondition() {
  let allZeroes = false;
  let allOnes = false;

  for(let y = 0; y < NUM_ROWS; y++){
    for(let x = 0; x < NUM_COLS; x++){
      if(grid[y][x] === 0) {
        allZeroes = true;
      }
      if(grid[y][x] === 255) {
        allOnes = true;
      }
      
    }
    
  }
  
  if(allZeroes || allOnes === grid[y][x]) {
        print("You Win");
    }
}


function randomGrid() {
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      grid[y][x] = random(grid[x][y]);
    }
  }
}

// function keyPressed() {
//   if (key === " ") {
//     if (pattern === "cross") {
//       pattern = "square";
//     } else {
//       pattern = "cross";
//     }
//   }
// }
