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

let bgSound1;
let bgSound2;
let bgSound3;
let bgSound4;

let stars = [];
let stickyNote = { active: false, x: 0, y: 0 };

function preload(){
  bgSound1 = loadSound("Songs/SpringSnow.mp3");
  bgSound2 = loadSound("Songs/AllDay.mp3");
  bgSound3 = loadSound("Songs/Happier.mp3");
  bgSound4 = loadSound("Songs/FirstLove.mp3");
}

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
  rect(0, 0, windowWidth, windowHeight);
  fill(0);
  textSize(16);
  //text("Submit your commit of the day", stickyNote.x + 10, stickyNote.y + 30); 
  createButtons(); 
}



function openJournal() {
  let journalEntry = createInput(''); // Create a text input field
  journalEntry.position(20, 50); // Position the text input field
  journalEntry.size(200, 100); // Set the size of the text input field

  let submitButton = createButton('Submit'); // Create a submit button
  submitButton.position(20, 160); // Position the submit button

  submitButton.mousePressed(() => {
    let entry = journalEntry.value(); // Get the text entered by the user
    // Save the journal entry or perform any desired action with the text
    console.log('Journal Entry:', entry);
    journalEntry.remove(); // Remove the text input field after submission
    submitButton.remove(); // Remove the submit button after submission
  });
}

// function displayQuote() {
// }

function createButtons(){
  let journalButton = createButton('Journal');
  journalButton.position(20, 20);
  journalButton.mousePressed(openJournal);

  // Create Quote of the Day Button
  let quoteButton = createButton('Quote of the Day');
  quoteButton.position(120, 20);
  //quoteButton.mousePressed(displayQuote);
  
  // Create Theme Button
  let themeButton = createButton('Change Theme');
  themeButton.position(280, 20);
  themeButton.mousePressed(changeTheme);
  
  createMusicButtons();
}


function changeTheme() {
  // Get the selected theme option
  let themeOption = select().value();

  // Change the background based on the selected theme
  if (themeOption === 'galaxy') {
    background(0);
    // Load and display the galaxy image
    let galaxyImage = loadImage('galaxy.jpg');
    image(galaxyImage, 0, 0, width, height);
  } else if (themeOption === 'sunset') {
    background(255, 0, 0);
    // Load and display the sunset image
    let sunsetImage = loadImage('sunset.jpg');
    image(sunsetImage, 0, 0, width, height);
  } else if (themeOption === 'garden') {
    background(0, 255, 0);
    // Load and display the garden image
    let gardenImage = loadImage('garden.jpg');
    image(gardenImage, 0, 0, width, height);
  }
}

function playMusic(sound) {
  if (sound.isPlaying()) {
    sound.stop();
  } else {
    sound.play();
  }
}


function createMusicButtons() {
  let calmingButton = createButton('Calming');
  calmingButton.position(20, 80);

  let sadButton = createButton('Motivational');
  sadButton.position(80, 80);

  let hopefulButton = createButton('Hopeful');
  hopefulButton.position(140, 80);

  let motivationalButton = createButton('Sad');
  motivationalButton.position(200, 80);

  if( calmingButton.mousePressed()){
    playMusic(bgSound1);
  }
  
  else if(sadButton.mousePressed()){
    playMusic(bgSound2);
  } 
  
  else if(hopefulButton.mousePressed()){
    playMusic(bgSound3);
  } 
  
  else if(motivationalButton.mousePressed()){
    playMusic(bgSound4);
  } 
}