// Generative Art 1: Diagonal Line Tiling
// Assiya Boulfiza
// March 21, 2024
// Making art using diagonal lines

let gridSpacing = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(220);
  strokeWeight(2);
  //drawLines();
}

function draw() {
  randomSeed(1000000000);
  gridSpacing = map(mouseX, 0 , width, 60, 10);
  background(220);
  drawLines();
}

function diagonalAsc(x, y, s){
  //dra an ascending line at (x, y)
  //with a grid spacing of s  
  line(x-s/2, y+s/2, x+s/2, y-s/2);
}

function diagonalDesc(x, y, s){
  line(x+s/2, y+s/2, x-s/2, y-s/2);
}

function drawLines(){
  //create diagonal lines on a grid
  for(x = 0; x < width; x += gridSpacing){
    for(y = 0; y < height; y += gridSpacing){
      let choice = int(random(2));
      if(choice === 0){
        diagonalDesc(x, y, gridSpacing);
      }
      else{
        diagonalAsc(x, y, gridSpacing);
      }
      
    }
  }
}
