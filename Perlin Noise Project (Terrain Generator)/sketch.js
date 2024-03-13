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

function terrain() {
  time = 0;
  let x = 0;
  let highest = 0;
  //let xHighest = 0;
  while (x < width) {
    rectHeight = noise(time);
    rectHeight = map(rectHeight, 0, 1, 0, height * 0.90);
    if (rectHeight > highest) {
       highest = rectHeight;
      //if (rectWidth < highest){
       
    } //}
  }
  time += 0.005;
  fill(0);
  rect(x, height, x + rectWidth, height - rectHeight);
  x += rectWidth;
}


function draw() {
  background(220);
  terrain();
  findPeak();
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

function findPeak() {

}


function drawFlag(x, y) {
  fill(0);
  rect()

}
