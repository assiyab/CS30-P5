// Cars Cars Cars!
// Assiya Boulfiza
// April 11, 2024
// using classes and arrays and calling objects in different arrays.

let eastBound = [];
let westBound = [];
let vehicles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) {
    let laneY = random(height/4, height*0.45);
    let car = new Vehicle(random(width), laneY, color(random(255), random(255), random(255)), 1);
    eastBound.push(car);
    laneY = random(height/2, 2*height/3)
    car = new Vehicle(random(width), laneY, color(random(255), random(255), random(255)), - 1);
    westBound.push(car);
    
  }
}

function draw() {
  background(220);
  drawRoad();
  for(let i = 0; i < eastBound.length; i ++){
    eastBound[i].action();
  }
  for(let i = 0; i < westBound.length; i ++){
    westBound[i].action();
  }
}
class Vehicle {
  constructor(x, y, color, direction) {
    this.x = x;
    this.y = y;
    this.type = Math.floor(Math.random() * 2); // 0 for car, 1 for truck
    this.direction = direction;
    this.xspeed = random(1, 5)*this.direction;
    this.c = color;
  }

  display() {
    fill(this.c);
    if (this.type === 0) {
      rect(this.x, this.y, 50, 30); // Car, add position x and y
    } else if (this.type === 1) {
      rect(this.x, this.y, 80, 40); // Truck
    }
  }

  move() {
    this.x += this.xspeed;
    if (this.x > width && this.direction === 1 ) {
      this.x = -50;
    } else if (this.x < -50 && this.direction === -1) {
      this.x = width;
    }

    this.x += this.xspeed;
  }

  speedUp(){
    if(this.xspeed < 15 && this.xspeed > -15)
    this.xpseed += this.direction*0.5
  }

  speedDown(){
    if(this.xspeed > 0.5 && this.speed < -0.5){
      this.xpseed -= this.direction*2
    }
  }

  changeColor(){
    this.c = color(random(255), random(255), random(255));
  }

  action(){
    this.move();
    if(random(100) < 1){
      this.speedUp();
    }

    if(random(100) < 1){
      this.speedDown();
    }

    if(random(100) < 1){
      this.changeColor
    }
    
    this.display();
  }
}




function drawRoad(){
  rectMode = (CENTER);
  fill(0);
  rect(0, height*0.25, width*2, 500)
  for(let i = 10; i <width; i += 40){
    //lanes
    stroke(220);
    strokeWeight(5);
    line(i, height/2, i += 20, height/2);
  }


}
