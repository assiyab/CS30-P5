// Perlin Noise Challenge
// Assiya Boulfiza
// March 8, 2024
// use shapes and use perlin noise to adjust the shape and format of it

function setup() {
  createCanvas(windowWidth, windowHeight);
}

let xlength = 10;

function diameter(){
  strokeWeight(20);
  let greyTime = 0;
  let x = 0;

  while( x < width){
    greValue = noise(greyTime);
    greyValue = map(greyValue, 255, 0, 0)
    greyTime  += 0.1;

    stroke(geryValue);
    line()


  }
}


function draw() {
  background(220);
  diameter();
}
