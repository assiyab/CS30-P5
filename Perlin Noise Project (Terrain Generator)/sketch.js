// Perlin Noise Project Terrain Generator
// Assiya Boulfiza
// March 12, 2024
//

let rectWidth = 2;
let rectHeight;
let highest = 0;
let widest = 0;
let highestXCoord = 0;
let highestYCoord = 0;
let x = 0;
let scrollSpeed = 0;


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
    scrollSpeed += 0.0001;
    rectHeight = noise(time - scrollSpeed); 
    rectHeight = map(rectHeight, 0, 1, 0, height * 0.8);
    time += 0.005;
    fill(0);
    noStroke();
    rect(x, height, x + rectWidth, height - rectHeight);
    x += rectWidth;
    highestY();
    highestX();

    
    if(rectHeight >= highest){
      highest = rectHeight
      highestXCoord = x;
      highestYCoord = height - rectHeight;
    }
    noStroke();
    drawFlag(highestXCoord, highestYCoord); // parameters will be heightYcord and heightXcord, which is the tallest peak in the mountain/hill.
  }
}

function drawFlag(x, y) {
  let poleHeight = 50; // Height of the flag pole
  let flagSize = 20; // Size of the flag
  // Draw flag pole
  fill(0);
  rect(x, y, x + 5, y - poleHeight);
  // Draw flag
  rect(x, y - poleHeight, x + flagSize, y - poleHeight - flagSize);
}

function averageLine(){
  let totalHeight = 0;
  let peakCount = width/ rectWidth;

  for(let i = 0; i < peakCount; i ++){
    totalHeight += noise (i * scrollSpeed);
  }
  let averageHeight = map(totalHeight / peakCount, 0, 1, 0, height * 0.8);
  stroke(255, 0, 0); // set horizontal line to red
  line(0, height - averageHeight, width, height - averageHeight); // draws a red horizontal line based on the positions of the previous calculations we made to find the average peak height 
}


function draw() {
  background(220);
  terrain();
  highestY();
  highestX();
  averageLine();
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




