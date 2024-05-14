// Notes App
// Assiya Boulfiza and Tanya Bhardwaj
// May 14, 2024
// 


// let mood = prompt("How are you feeling today?");
// let day = prompt("How is your day going?");
// let happyAbout = prompt("What are you happy about?");

// let quote = "";

// if (mood === "happy" && day === "great" && happyAbout !== "") {
//   quote = "Happiness is not something ready-made. It comes from your own actions.";
// } else if (mood === "sad" && day === "not so good" && happyAbout === "") {
//   quote = "The only way to get through a bad day is to have a good cry and then start again.";
// } else {
//   quote = "Every day may not be good, but there's something good in every day.";
// }

// console.log(quote);


let stars = [];
let stickyNote = { active: false, x: 0, y: 0 };

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(1, 3);
    stars.push({ x: x, y: y, size: size });
  }
}

function draw() {
  background(0);
  
  for (let star of stars) {
    fill(255);
    noStroke();
    ellipse(star.x, star.y, star.size, star.size);
  }

  if (stickyNote.active) {
    showStickyNote();
  }
}

function mouseClicked() {
  for (let star of stars) {
    let d = dist(mouseX, mouseY, star.x, star.y);
    if (d < star.size / 2) { 
      stickyNote.active = true;
      stickyNote.x = star.x;
      stickyNote.y = star.y;
    }
  }
}

function keyPressed() {
  if (stickyNote.active) {
    if (keyCode === ENTER) {
      stickyNote.active = false;
    }
  }
}

function showStickyNote() {
  fill('#FFC0CB');
  rect(stickyNote.x, stickyNote.y, 150, 100, 10);
  fill(0);
  textSize(16);
  text("Submit your commit of the day", stickyNote.x + 10, stickyNote.y + 30); 
}