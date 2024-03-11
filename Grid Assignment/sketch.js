// Grid Project
// Assiya Boulfiza
// March 1st
// A grid of multiple squares with colours that change with every mouse click and have a similar colour scheme 

let x;
let y;
let spacing = 30;
let squareSize = 25;


function setup() {
  createCanvas(500, 500);
  document.addEventListener("contextmenu", event => event.preventDefault())
  // no loop and deraw have to be enabled so that the screen is properly refreshed 
  // and displaying current actions based on user interaction
  colourGrid();
}


//what darws the gird, called in setup
function colourGrid() {
  // x and y act as columns and rows across srawing 25 sized squares 
  for (let x = 0; x < width; x += squareSize) {
    for (let y = 0; y < height; y += squareSize) {
      fill(random(204, 255), random(153, 255), random(170, 255));
      rect(x, y, squareSize);

    }
  }
}


// if right mouse click - bigger
// if left mouse click - smaller
function mousePressed() {
  if (mouseButton === RIGHT) {
    //stops before falling off gris
    if( squareSize < 200){
      //square gets larger with every right click
      squareSize = squareSize / 0.5;
      colourGrid();
    }

  }
  
  else if (mouseButton === LEFT) {
    if(squareSize > 6.25) {
      //square gets smaller with each left click
      squareSize = squareSize * 0.5;
      colourGrid();
    }
    
  }    
    
}

// if the space key pressed, change the colour/order of the grid
function keyPressed() {
  if(keyCode === 32){
    colourGrid();
  }
}

