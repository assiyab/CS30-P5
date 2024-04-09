// Creating a class challenge
// Assiya Boulfiza
// April 9, 2024
// trying to make your own class for objects

let x = 0;

let racer = [];
const NUM_ROUNDRACERS = 3;


function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < NUM_ROUNDRACERS; i++){
    let c = color(random(255), random(255), random(255));
    let y = map(i, 0, NUM_ROUNDRACERS -1, height*0.3, height*0.7);
    racer.push(new RoundRacer(y, c));
  }
}

function draw() {
  background(0);
  for( let r of racer){
    r.move();
    r.display();
  }
  
}

class RoundRacer{
  constructor(y, c){
    this.y = y;
    this.c = c;
    this.x = x;
    this.xspeed = random(3, 15);
  }

  display(){
    fill(this.c);
    circle(this.x, this.y, 20);
  }

  move(){
    this.x += this.xspeed;
    if( this.x >= width){
      this.x = 0;
    }
  }
}