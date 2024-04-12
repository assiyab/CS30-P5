// Partner Activity
// April 11, 2024
// Partner Activity, working with arrays and acesseing data from arrays by using .push() and .splice()

// OOP Pair Programming Starter Code
// Assiya, Rurik
// The Date


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;
let spawnedBullets=[];

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width/2, height/2, shipImage);
}

function draw() {
  background("black");
  enterprise.update();
  enterprise.display();
}

function keyPressed() {
  enterprise.handleKeyPress();
}

// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage) {
    this.x = x;
    this.y = y;
    theImage = shipImage;
    this.bullets=[];

    // define the variables needed for this ship
  }

  update() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
    }
  
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
    }
  
    if (keyIsDown(UP_ARROW)) {
      this.y -= 5;
    }
  
    if (keyIsDown(DOWN_ARROW)) {
      this.y += 5;
    }

    // move ship -- you might want to use the keyIsDown() function here

    // if doing extra for experts, show bullet(s)
  }

  display() {
    rectMode = (CENTER);
    // show the ship
    image(shipImage,this.x,this.y)
  }

  handleKeyPress() {
    if(keyIsPressed){
      if(keyCode === 32){
         this.bullets.push (new Bullet(this.x, this.y));
      }
    }
    // you only need to use this if you are doing the extra for experts...
    // if you are, you should make a bullet if the space key was pressed
  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, theImage) {
    this.x = x;
    this.y = y;
    theImage = bulletImage;

    // define the variables needed for the bullet here
  }

  update() {
    this.y += 5;
    // what does the bullet need to do during each frame? how do we know if it is off screen?
  }

  display() {
    image(bulletImage, this.x, this.y);
    // show the bullet
  }

  isOnScreen() {
    if( y > 0){
      image()
    }
    // check if the bullet is still on the screen
  }
}

