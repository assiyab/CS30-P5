// Clock Challenge
// Assiya Boulfiza
// March 19, 2024
// Analouge Clock Exercise

// 1 - draw the base clock(static)
// 2 - add animated clock hands (hours, minutes, seconds)

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  drawStaticClock();
  drawClockHands();
  // //let angle = 0;
  // while (angle < 45){
  //   push();
  //   rotate(angle);
  //   line(50, 0, 100, 0);
  //   pop();
  //   angle +=5;
  // }

 
}

function drawClockHands(){
  //second hand first:
  push();
  fill(0);
  stroke( 200, 0, 0);
  rotate(second()*6);
  line(0, 0, 0, -130)
  pop();

  //minute hand:
  rotate(minute()*6)
  line(0, 0, 0, -110)

  //hour hand:
  rotate(hour()*12)
  line(0, 0, 0, -50);
}
  


function drawStaticClock(){
  //using basic transformations, draw
  //an analouge clock face

  //main circle first
  stroke(0);
  translate(width/2, height/2);
  push(); //new coordinate system
  circle(0, 0, 300);

  //all individual ticks
  let count = 0;
  let angle = 6;
  while(count < 60){
    if(count % 5 === 0){
      strokeWeight(3);
       line(110, 0, 140, 0);
    }
    else{
      strokeWeight(1);
      line(125, 0, 140, 0);
    }
    rotate(angle);
    count++;
  }
}


