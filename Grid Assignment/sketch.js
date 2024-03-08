// Grid Project
// Assiya Boulfiza
// March 1st
// A grid of multiple squares with colours that change with every mouse click

let x;
let y;
let spacing = 30;
let squareSize = 25;


function setup() {
  createCanvas(500, 500);
  x = width/2
  y = height/2
  document.addEventListener("contextmenu", event => event.preventDefault())
  // no loop and deraw have to be enabled so that the screen is properly refreshed 
  // and displaying current actions based on user interaction
  colorMode(RGB, 150);
  noLoop();
  redraw(); 
}

function draw() {
  colourGrid();
  }

// if right mouse click - bigger
// if left mouse click - smaller
function mousePressed(){
  if(mouseButton === RIGHT){
    squareSize = squareSize / 0.5;  
    //stops before so all squares fir perfectly on screen, none falling off edge
    if(squareSize >= 200){
      if(mouseButtom === RIGHT){
        colourGird();
      }

    } 
  }     

  else if(mouseButton === LEFT){
    squareSize = squareSize * 0.5 ;
    colourGrid();
  }
} 

// if the space key pressed, change the colour
function keyPressed(){
  redraw();
  fill(random(255), random(255), random(255));
}

//what darws the gird, later called in draw 
function colourGrid(){
  for( let rectWidth = 0; x > rectWidth; rectWidth++){
    for( let rectHeight = 0; y > rectHeight; rectHeight++){
      fill(random(255), random(255), random(255));
      rect(rectWidth * squareSize, rectHeight * squareSize, squareSize)

    }
  } 
  noLoop();
}

