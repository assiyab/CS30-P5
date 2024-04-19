// Cars Cars Cars!
// Assiya Boulfiza
// April 11, 2024
// using classes and arrays and calling cars in different arrays.

//global variables
let eastBound = []; // left to right
let westBound = []; //right to left

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) { // generates 20 cars at a time
    let laneY = random(height/4, height*0.45); // cars do not go over the lane and into other traffic on the bottom lane
    let car = new Vehicle(random(width), laneY, color(random(255), random(255), random(255)), 1); //generates new cars
    eastBound.push(car); // generates cars coming from east/left to right to make 2 way traffic
    //  if(mouseClicked){
    //    if(mouseButton === LEFT){
    //      eastBound.push(car);
    //   }
    // }
    laneY = random(height/2, 2*height/3) // also keeps cars in their own lane on the top lane
    car = new Vehicle(random(width), laneY, color(random(255), random(255), random(255)), - 1);
    westBound.push(car); // car coming from west/ go from right to left
    
  }
}

function draw() {
  background(220);
  drawRoad(); // draws the road
  // used to keep all of the cars moving 
  for(let i = 0; i < eastBound.length; i ++){
     eastBound[i].action();
  }
  for(let i = 0; i < westBound.length; i ++){
    westBound[i].action();
  }
}
class Vehicle {
  constructor(x, y, color, direction) { //necessary parameters 
    this.x = x;
    this.y = y;
    this.type = Math.floor(Math.random() * 2); // 0 for car, 1 for truck will gove those 2 possibilities
    this.direction = direction;
    this.xspeed = random(1, 5)*this.direction; //all cars going random speed based on their generated number
    this.c = color;
  }

  display() {
    fill(this.c);
    if (this.type === 0) {
      rect(this.x, this.y, 50, 30); // Car, add position x and y
    } else if (this.type === 1) {
      rect(this.x, this.y, 80, 40); // Truck, position x and y
    }
  }

  move() {
    this.x += this.xspeed; //move cars
    // if cars fall off of screen, then new ones will be drawn at the start or end depending on which lane it is in 
    if (this.x > width && this.direction === 1 ) {
      this.x = -50;
    } else if (this.x < -50 && this.direction === -1) {
      this.x = width;
    }

    this.x += this.xspeed;
  }

  speedUp(){
    if(this.xspeed < 15 && this.xspeed > -15)
    this.xspseed += this.direction*0.5
  }

  speedDown(){
    if(this.xspeed > 0.5 && this.speed < -0.5){
      this.xspseed += this.direction*0.5
    }
  }

  changeColor(){
    this.c = color(random(255), random(255), random(255));
  }

  action(){ // calls all of the features shown in classes and enables them to show their values
    this.move();
    if(random(100) < 1){
      this.speedUp();
    }

    if(random(100) < 1){
      this.speedDown();
    }

    if(random(100) < 1){
      this.changeColor();
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
