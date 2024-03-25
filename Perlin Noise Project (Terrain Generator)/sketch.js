// Perlin Noise Project Terrain Generator
// Assiya Boulfiza
// March 12, 2024
// Mountain terrain generator that has a flag at the highest peak and that has a average height calculator that calculates the average height of all of the mountain peaks 

let rectWidth = 2;
let rectHeight;
let randomHeight;
let highest = 0;
let widest = 0;
let x = 0;
let scrollSpeed = 0;

//used below in averageLine function 
let rectTotalHeight = 0;
let rectNumber = 0;
let averageHeight = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
}


let time = 0;
function terrain() {
  let time = 0;
  let x = 0;
  let highest = 0;
  let widest = 0;
  rectNumber = 0;
  rectTotalHeight = 0;

  while (x < width) {
    // scrollspeed is what makes the panning because we add it to time value 
    scrollSpeed += 0.0002;
    randomHeight = noise(time + scrollSpeed); 
    randomHeight = map(randomHeight, 0, 1, 0, height * 0.8);
    time += 0.03;
    fill(0);
    noStroke();
    rectHeight = height - randomHeight;
    rect(x, height, x + rectWidth, rectHeight);
    x += rectWidth; 
  
    //determines the highest peaks by looking at all of the of the peak 
    //values and returning the highest x and y values and those values get 
    //stored in flag function later on so flag appears only highest peak every single time 
     if (randomHeight > highest){
       highest = randomHeight;
       widest = x - rectWidth;
     }
     if (rectWidth > widest){
       widest = x;
     }
    //also apart of averageLine function, need to be called here in order 
    //to constantly be calculating the average height of every single peak/rectangle. 
    rectTotalHeight += rectHeight;
    rectNumber += 1;
  }
  // parameters will be height and widest, which is the tallest peak in the mountain/hill.
  drawFlag(widest, height - highest);
}

function drawFlag(x, y) {
  let longSquare = 50; // Height of the flag
  let square = 20; // Size of the flag
  // Draw flag pole
  fill(0);
  rect(x, y - longSquare, x + 5, y);
  // Draw flag
  rect(x, y - longSquare - square, x + square, y - longSquare);
}

function averageLine(){
  // rectTotalHeight is the total height of every single rectangle and 
  //rectNumber is the number of rectangles drawn every single frame, so we 
  //divide the two to find the overall average height, which gets stored in 
  //average height and is later called in the y values in the re line we draw
  averageHeight = rectTotalHeight/rectNumber;
  stroke(255, 0, 0); // set horizontal line to red
  strokeWeight(5); // line shows better this way
  line(0, averageHeight, width, averageHeight);
  
}

function draw() {
  background(220);
  terrain();
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