// Grid Project
// Assiya Boulfiza
// March 1st
// A grid of multiple squares with colours that change with every mouse click

let x = 0;
let y = 0;
let spacing = 30;
let squareSize = 25;


function setup() {
  createCanvas(500, 500);
  x = width/2
  y = height/2
  noLoop();
  redraw();
  colorMode(RGB, 150);
  
}

function draw() {
  //draws columns and rows that will be spaced apart to make squares
  for( let rectWidth = 0; x > rectWidth; rectWidth++){
    for( let rectHeight = 0; y > rectHeight; rectHeight++){
      fill(random(255), random(255), random(255));
      rect(rectWidth * squareSize, rectHeight * squareSize, squareSize)
      
    }
  }
  noLoop();
}


function mousePressed(){
  redraw();
  fill(random(255), random(255), random(255));
}

function keyPressed(){
  redraw();
  fill(random(255), random(255), random(255));
  if(keyCode === 32){
    squareSize = squareSize * 0.5;  
  }     
}