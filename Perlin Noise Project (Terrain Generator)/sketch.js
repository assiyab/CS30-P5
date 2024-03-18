// Perlin Noise Project Terrain Generator
// Assiya Boulfiza
// March 12, 2024
//

let rectWidth = 2;
let rectHeight;
let highest = 0;
let widest = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
}


function highestY(){
  if(rectHeight > highest){
    highest = rectHeight;
  }

}

function highestX(){
  if(rectHeight > highest){
    widest = widest*2;
  }
}

function terrain() {
  let time = 0;
  let x = 0;

  while (x < width) {
    rectHeight = noise(time + scrollSpeed); // Update noise input with xOffset
    rectHeight = map(rectHeight, 0, 1, 0, height * 0.9);
    time += 0.05;
    scrollSpeed += 0.0001;
    fill(0);
    rect(x, height, x + rectWidth, height - rectHeight);
    x += rectWidth;
    highestY();
    highestX();

    drawFlag(highestX, highestY); // parameters will be heightY and heightX, which is the tallest peak in the mountain/hill.
  }
}

function drawFlag(x, y) {
  let poleHeight = 50; // Height of the flag pole
  let flagSize = 20; // Size of the flag
  // Draw flag pole
  fill(139, 69, 19); // Brown color for the pole
  rect(x, y, x + 5, y - poleHeight);
  // Draw flag
  fill(255, 0, 0); // Red color for the flag
  rect(x, y - poleHeight, x + flagSize, y - poleHeight - flagSize);
}



function draw() {
  background(220);
  terrain();
  highestY();
  highestX();
  drawFlag();
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    if (rectWidth <= 3.5) {
      rectWidth = rectWidth + 0.5;
    }
  }

  else if (keyCode === LEFT_ARROW) {
    if (rectWidth >= 1) {
      rectWidth = rectWidth - 0.5;
    }
  }
}




