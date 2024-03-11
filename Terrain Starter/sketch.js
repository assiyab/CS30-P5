// Terrain Generation Starter
// Assiya Boulfiza
// March 11, 2024
// Precedurally Generated 2D Terrain

let rectWidth = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectMode(CENTER);  // CHANGE THIS!!!!
  drawRectangles();
}

function drawRectangles(){
  // using a single loop, generate a bunch of side to side rectangles varying in height (patterns, random, noise)
  let rectHeight;
  fill(0);
  for(let x = 0; x < width; x += rectWidth){
    //option 1 - pattern
    //rectHeight = x;

    //option 2 - random
    //rectHeight = random(0, height * 0.8);
    
    //option 3 - noise
    rect(x, height/2, rectWidth, rectHeight);
    


  } 

}

function draw() {
}
