// Using sound, centring with CSS, and Local storage
// Assiya Boulfiza
// May 7, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let music, bounceSound;
let started = false; 
let pos; let vel; 
let totalBounces = 0;

function setup() {
  createCanvas(300, 200); //4:3
  pos = createVector(width/2, height/2);
  vel = createVector(5, 3);
  textSize(30);
  textAlign(CENTER);
  //music.play();
  if(localStorage.getItem("bounce")===null){
    localStorage.setItem("bounce", 0);
  }
  else{
    //hjj
  }
}


function preload(){
  //function waits for loading...
  music = loadSound("assets/background.mp3");
  bounceSound = loadSound("assets/bounceSound.wav")
}

function draw() {
  background(220);
  if(started === false){
    text("Click to begin", width/2, height/2);
    if(mouseIsPressed){
      started = true;
      music.setVolume(0.3);
      music.loop();
    }
  }
  else{ //time to run the program...
    updateBall();
    text(totalBounces, width/2, height/2);
  }
}

function updateBall(){
  pos.add(vel);
  if(pos.x < 0 || pos.x > width){
    totalBounces++;
    bounceSound.play();
    vel.x*= -1;
    localStorage.setItem("bounce", totalBounces);
  }
  if(pos.y < 0 || pos.y > height){
    totalBounces++;
    bounceSound.play();
    vel.y*= -1;
    localStorage.setItem("bounce", totalBounces);
  }
  circle(pos.x, pos.y, 20, 20);
}
