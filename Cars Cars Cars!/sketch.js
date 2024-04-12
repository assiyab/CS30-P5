// Cars Cars Cars!
// Assiya Boulfiza
// April 11, 2024
// using classes and arrays and calling objects in different arrays.

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawRoad();
}

function drawRoad(){
  rectMode = (CENTER);
  fill(0);
  rect(0, height*0.25, width*2, 500)
  while( i = 0, i <width, i ++){
    fill(220);
    rect(0, height*0.5, width*2, 10);
    rect += 10;
  }
}

class Vehicle{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.xspeed = 2;
  }

  display(){

  }
}