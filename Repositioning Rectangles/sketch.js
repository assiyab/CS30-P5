// Repositioning Rectangles
// Assiya
// March 6th
// creating geometry that can be picked up and moved around

//global variables
let x, y, rWidth, rHeight;
let rLeft, rRight, rTop, rBottom;
let pickedUp = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  x = width/2; y = height/2;
  rWidth = 200; rHeight = 100;
}

function drawRectangle(){
  //render rectangle abd calculate movement
  updateEdgePositions();
  print("L;", rLeft, "/tT:", rTop, "/tR:", rRight, "/b", rBottom);
  

  if(inRectangle()){
    fill(100,250,150);
  }
  else{
    fill(255);
  }
  //check if the rectangle has been picked up
  if(pickedUp){
    x = mouseX;
    y = mouseY;
  }
  rect(x,y,rWidth,rHeight);
}


function inRectangle(){
  //return true if the mouse is in the rectangle 
  if(mouseX < rRight && mouseX > rLeft){
    //horizontal match
    if(mouseY > rTop && mouseY > rBottom){
      return true;
    }
  }
  return false;
}

function updateEdgePositions(){
  //update the top, left, bottom, right values 
  rLeft = x - rWidth/2; rRight = x + rWidth/2;
  rTop = y - rHeight/2; rBottom = y - rHeight/2;
}

function mousePressed(){
  //tiggers exactly once per click (on the mouse down)
  if(inRectangle()){
    pickedUp = true;
  }
}

function mouseReleased(){
  pickedUp = false;
}
  
function draw() {
  background(220);
  drawRectangle();
}
