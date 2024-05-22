// Note taking App
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

let table;
let afinn = {};

function preload(){
  table = loadTable('AFINN-111.txt', 'tsv');
}

let stars = [];
let stickyNote = { active: false, x: 0, y: 0 };

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  console.log(table);
  for(let i = 0; i < table.getRowCount(); i ++){
    let row = table.getRow(i);
    let word = row.get(0);
    let score = row.get(1);

    afinn[word] = score;
  }

  console.log(afinn);
  //save(afinn, 'affinb11.json');

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
    if (d < star.size / 2) { //possible bug/error
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
  //let noteWidth = width - stickyNote.x - 10; //  width dynamically
  //let noteHeight = height - stickyNote.y - 10; // height dynamically

  fill('#FFC0CB');
  rect(0, 0, windowWidth, windowHeight);
  fill(0);
  textSize(16);
  createButtons();
  //text("Submit your commit of the day", stickyNote.x + 10, stickyNote.y + 30); 
}

function mouseIsPressed(){
  if(createButtons === "true"){
    if(journalBtn === "true"){
      journal();
    }
    else{
      quoteGenerator();
    }
  }
}

function createButtons() {
  let journalBtn = createButton('Journal For the Day');
  journalBtn.position(430, height - 100);
  journalBtn.style('background-color', '#C8A2C8');
  journalBtn.style('border-radius', '10px');
  journalBtn.style('font-size', '16px');

  let quoteBtn = createButton('Generate Your Quote of the Day!');
  quoteBtn.position(10, height - 100);
  quoteBtn.style('background-color', '#C8A2C8');
  quoteBtn.style('border-radius', '10px');
  quoteBtn.style('font-size', '16px');
  };

  function journal(){
    showStickyNote();
    rect(0, 0, 300, 300);
    fill("white");


  }

  