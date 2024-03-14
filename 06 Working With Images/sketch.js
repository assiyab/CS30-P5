// Working With Images
// Assiya Boulfiza
// March 14, 2024
// Loading and displaying Images/Animations

let lionL, lionR;
let pinImages = [];
let currentIndex =0;

function preload(){
  //runs before running setup, function won't end until allloading is complete
  lionL = loadImage("Assets/lion-left.png");
  lionR = loadImage("Assets/lion-right.png");
  //now the pinwheel images
  for(i = 0; i < 9; i++){
    pinImages.push(loadImages("Assets/pin-0" + i + ".png"));
  }
  

  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  frameRate(4);
}

function draw() {
  background(220);
  image(lionL, mouseX, mouseY, lionL.width/2, lionL.height/2);

  image(pinImages[currentIndex%9], width/2, height/2);
  currentIndex ++
  //if(currentIndex > 8){

  //}

  //for(let p of pinImages){
    //image(p, width/2, height/2);
  //}
}
