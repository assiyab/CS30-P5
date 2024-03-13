// Grid Project
// Assiya Boulfiza
// March 1st
// A grid of multiple squares with colours that change with every mouse click and have a similar colour scheme 

let x;
let y;
let spacing = 30;
let squareSize = 20;


function setup() {
  createCanvas(511, 511);
  document.addEventListener("contextmenu", event => event.preventDefault())
  background(255);
  colourGrid();
}




//what darws the gird, called in setup
function colourGrid() {
  // x and y act as columns and rows across srawing 25 sized squares 
  for (let x = 0; x < width; x += squareSize) {
    for (let y = 0; y < height; y += squareSize) {
      //makes squares fit into grid no matter what size canvas is 
      if (x + squareSize <= width && y + squareSize <= height) {
        //fills random bute certain tones of colours
        fill(random(204, 255), random(153, 255),random(170, 255));
        rect(x, y, squareSize, squareSize);
      }  
    }
  }
    
}



// if right mouse click - bigger
// if left mouse click - smaller
function mousePressed() {
  if (mouseButton === RIGHT) {
    //before square gets too big and falls off canvas
    if (squareSize < 100) {
      squareSize = squareSize / 0.5;
      background(255);
      colourGrid();
    }  
  }
  

  else if (mouseButton === LEFT) {
    // before squares get too small 
    if (squareSize > 6.25) {
      squareSize = squareSize * 0.5;
      background(255);
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