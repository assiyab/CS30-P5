// Object Notation - Bouncing Ball
// Assiya Boulfiza
// March 28, 2024
// Looking at Object Notation 

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  spawnBall(mouseX, mouseY);
}

function spawnBall(initialX, initialY){
  //create a ball object and store in the array
  let ball = {
    x: initialX,
    y: initialY,
    radius: 30,
    xSpeed: random(-5, 5),
    ySpeed: random(-5, 5),
  };
  ballArray.push(ball);
}

function draw() {
  background(220);
  //loop through all the balls
  for( let b of ballArray){
    fill(random(255), random(255), random(255));
    b.x +=  b.xSpeed;
    b.y +=  b.ySpeed
    circle(b.x, b.y, b.radius);
  }
}
