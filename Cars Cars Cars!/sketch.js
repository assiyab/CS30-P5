// Cars Cars Cars!
// Assiya Boulfiza
// April 11, 2024
// using classes and arrays and calling objects in different arrays.

let vehicles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 5; i ++){
    vehicles.push(new Vehicle(0, 50* i + 30, random(1, 3)));
  }

}

function draw() {
  background(220);
  drawRoad();
  for(let v of vehicle){
    vehicle.display();
    vehicle.move();
  }
  //truck();
  //smallCar();
}

function drawRoad(){
  rectMode = (CENTER);
  fill(0);
  rect(0, height*0.25, width*2, 500)
  for(let i = 10; i <width; i += 40){
    stroke(220);
    strokeWeight(5);
    line(i, height/2, i += 20, height/2);
  }
}


function smallCar(){
  //car
  fill(255, 0, 0);
  rect(100, 150, 200, 50);
  
  //wheels 
  fill(0);
  rect(20, 190, 30, 30);
  rect(180, 190, 30, 30);
  rect(180, 110, 30, 30);
  rect(20, 110, 30, 30);
}

function truck(){
  //truck
  fill(220);
  rect(width/2, height/2, 80, 50);

  //line


}

class Vehicle{
  constructor(x, y, xspeed){
    this.x = x;
    this.y = y;
    this.xspeed = 2;
    this.colour = color(random(255), random(255), random(255));
  }

  display(){
    fill(this.color);
    rect(this.x, this.y, 30, 20);
  }

  move(){
    this.x += this.xspeed
    if(this.x > width){
      this.x = -15;
      this.colour = color(random(255), random(255), random(255));
    }
  }
}
