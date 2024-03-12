// Perlin Noise Project Terrain Generator
// Assiya Boulfiza
// March 12, 2024
//

let rectWidth = 2;
let rectHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
}

function terrain(){
  time = 0;
  let x = 0;
  while(x < width){
    rectHeight = noise(time);
    rectHeight = map(rectHeight, 0, 1, 0, height * 0.90);
    time += 0.005;
    rect(x, height, x + rectWidth, height - rectHeight);
    x += rectWidth;
  }
}

function draw() {
  background(220);
  terrain();
}

function keyPressed(){
  if( keyCode === RIGHT_ARROW){
    // if statement here
    rectWidth = rectWidth + 0.5;
  }
  else if(keyCode === LEFT_ARROW){
    // do a rect minimum and maximum width 
    rectWidth = rectWidth - 0.5;
  }
}