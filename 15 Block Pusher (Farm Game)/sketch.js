// Farm Game Block Pusher
// Assiya Boulfiza
// Monday, April 29, 2024
// One more crack at 2D arrays 

let tiles = []; // 0 = grass, 2 = cow, 3 = star 
let level = [
  [0, 1, 0, 3, 0],
  [1, 0, 0, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0]
];

const COLUMNS = 5;
const ROWS = 5;
let TILE_SIZE = 100;
let playerX = 3;
let playerY = 4;

function preload(){
  for(let i = 0; i < 4; i ++){
    tiles.push(loadImage("assets/" + i + ".png"));
  }

}

function setup() {
  createCanvas(COLUMNS*TILE_SIZE, ROWS*TILE_SIZE);
  level[playerY][playerX] = 2;
}

function draw() {
  background(220);
  renderBoard();
}

function keyPressed(){
  if(keyCode === UP_ARROW && playerY > 0){
    swap(playerX, playerY, playerX, playerY - 1)
    playerY--;
  }
  if(keyCode === LEFT_ARROW && playerX > 0){
    if(levell[playerY][playerX -1] === 0){ //grass
      swap(playerX, playerY, playerX - 1, playerY)
    playerX--;
    }
    else if(level[playerY][playerX -1] === 1){ //chicken
      //is there room for it to be pushed
      if(playerX -1 > 0 && level[playerY][playerX -2] === 0){
        //implies that there is room for it to be pushed
        swap(playerX -1, playerY, playerX-2, playerY);
        swap(playerX, playerY, playerX -1, playerY);
        playerX--;
      }
    }
  }
  if(keyCode === DOWN_ARROW){
    swap(playerX, playerY, playerX, playerY + 1)
    playerY++;
  }
  if(keyCode === UP_ARROW){
    swap(playerX, playerY, playerX + 1, playerY)
    playerX++;
  }
}


function swap(x1, y1, x2, y2){
  let temp = level[y1][x1];
  level[y1][x1] = level [y2][x2]; // copy x2, y2 to x1, y1
  level[y2][x2] = temp; 
}

function renderBoard(){
  //interpret data in our 2D array (level) places images on canvas
  for(let x = 0; x < COLUMNS; x++){
    for(let y = 0; y < ROWS; y++){
      let type = level[y][x];
      let currentImage = tiles[type];
      image(currentImage, x*TILE_SIZE, y*TILE_SIZE);
    }
  }
}