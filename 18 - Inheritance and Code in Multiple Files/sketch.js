// Ingeritance and code in amny files
// Assiya Boulfiza
// May 9, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 10; i++){
    objects.push(new AnitmatedObjcet(random(width), random(height)));
    objects.push(new CircleObj(random(width), random(height)));
    objects.push(new LineObj());
  }
}

function draw() {
  background(220);
  for(let o of objects){
    o.move();
    o.display();
  }
}

// //parent class or ("super class")
// class AnitmatedObjcet{
//   constructor(x, y){
//     this.x = x;
//     this.y = y;
//     this.size = 1;
//   }

//   move(){ //should have a "wiggle" effect
//     this.x += random(-2, 2);
//     this.y += random(-2, 2);
//   }

//   display(){
//     strokeWeight(4);
//     point(this.x, this.y);
//   }
// }

//child class #1 - circle

// class CircleObj extends AnitmatedObjcet{
//   constructor(x, y){
//     super(x, y); // calls the parent class' constructor
//     this.size = random(20, 40);
//   }

//   display(){
//     strokeWeight(2);
//     if(dist(this.x, this.y, mouseX, mouseY) < this.size/2){
//       //mouse on top of circle
//       fill(255, 0, 0);
//     }
//     else
//       fill(255);
//       circle(this.x, this.y, this.size);
//   }
// }

//child class #2 - line
// class LineObj extends AnitmatedObjcet{
//   constructor(){
//     super(random(width), random(height));
//   }

//   move(){ //overriding
//     super.move() // starts with parents move code 
//     this.x -= 5;
//     if(this.x < 0) this.x = width;
//   }

//   display(){
//     if(mouseIsPressed) strokeWeight(10);
//     else strokeWeight(2);
//     line(this.x, this.y, this.x + 15, this.y);

//   }
// }
