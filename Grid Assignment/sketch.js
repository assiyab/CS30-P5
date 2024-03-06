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
  //x = width/2
  //y = height/2
  document.addEventListener("contextmenu", event => event.preventDefault())
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
  if(mouseButton === RIGHT){
    squareSize = squareSize * 0.5;  
  }     

  else if(mouseButton === LEFT){
    squareSize = squareSize/ 0.5;
  }
}

function keyPressed(){
  redraw();
  fill(random(255), random(255), random(255));
  
}