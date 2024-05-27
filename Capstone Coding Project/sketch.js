// Note taking App
// Assiya Boulfiza and Tanya Bhardwaj
// May 14, 2024
// 

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


let stars = [];
let stickyNote = { active: false, x: 0, y: 0 };

function homePage(){
  let journalButton = createButton('Journal');
  journalButton.position(20, 20);
  //journalButton.mousePressed(openJournal);

  let quoteButton = createButton('Quote of the Day');
  quoteButton.position(120, 20);
  
  let themeButton = createButton('Change Theme');
  themeButton.position(280, 20);
  //themeButton.mousePressed(changeTheme);

  let songsButton = createButton('Songs');
  songsButton.position(440, 20);
  
}

function journal(){
  if(journalButton.mousePressed){
    homePage.hide();
    //***creating a popup when journal button is pressed */
    let journalPage = createDiv(''); // Create a div element for the journal page
      journalPage.position(0, 0); // Position the journal page
      journalPage.size(windowWidth, windowHeight); // Set the size of the journal page
      journalPage.style('background-color', 'beige'); // Set background color to beige
    
      let journalTitle = createElement('h1', 'Journal'); // Create a heading for the journal title
      journalTitle.position(20, -5); // Position the journal title
    
      let journalEntry = createElement('textarea', ''); // Create a textarea for journal entry
      journalEntry.position(20, 50); // Position the textarea
      journalEntry.size(400, 300); // Set the size of the textarea
    
      let submitButton = createButton('Submit'); // Create a submit button
      submitButton.position(20, 370); // Position the submit button
  }
  else{
    homePage.show();
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

function showStickyNote() {

  fill('#FFC0CB');
  rect(0, 0, windowWidth, windowHeight);
  fill(0);
  textSize(16);
  //text("Submit your commit of the day", stickyNote.x + 10, stickyNote.y + 30); 
  homePage();
}






// console.log(quote);

// let bgSound1;
// let bgSound2;
// let bgSound3;
// let bgSound4;

// let stars = [];
// let stickyNote = { active: false, x: 0, y: 0 };

// function preload(){
//   bgSound1 = loadSound("Songs/SpringSnow.mp3");
//   bgSound2 = loadSound("Songs/AllDay.mp3");
//   bgSound3 = loadSound("Songs/Happier.mp3");
//   bgSound4 = loadSound("Songs/FirstLove.mp3");
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(0);

//   for (let i = 0; i < 50; i++) {
//     let x = random(width);
//     let y = random(height);
//     let size = random(1, 3);
//     stars.push({ x: x, y: y, size: size });
//   }
   
// }

// function draw() {
//   background(0);
  
//   for (let star of stars) {
//     fill(255);
//     noStroke();
//     ellipse(star.x, star.y, star.size, star.size);
//   }

//   if (stickyNote.active) {
//     showStickyNote();
//   }
// }


// function mouseClicked() {
//   for (let star of stars) {
//     let d = dist(mouseX, mouseY, star.x, star.y);
//     if (d < star.size / 2) {
//       stickyNote.active = true;
//       stickyNote.x = star.x;
//       stickyNote.y = star.y;
//     }
//   }
// }

// function keyPressed() {
//   if (stickyNote.active) {
//     if (keyCode === ENTER) {
//       stickyNote.active = false;
//     }
//   }
// }

// function showStickyNote() {

//   fill('#FFC0CB');
//   rect(0, 0, windowWidth, windowHeight);
//   fill(0);
//   textSize(16);
//   //text("Submit your commit of the day", stickyNote.x + 10, stickyNote.y + 30); 
//   homePage();
// }


// function homePage(){
//   createButtons();
// }

// function openJournal() {
//   let journalPage = createDiv(''); // Create a div element for the journal page
//   journalPage.position(0, 0); // Position the journal page
//   journalPage.size(windowWidth, windowHeight); // Set the size of the journal page
//   journalPage.style('background-color', 'beige'); // Set background color to beige

//   let journalTitle = createElement('h1', 'Journal'); // Create a heading for the journal title
//   journalTitle.position(20, -5); // Position the journal title

//   let journalEntry = createElement('textarea', ''); // Create a textarea for journal entry
//   journalEntry.position(20, 50); // Position the textarea
//   journalEntry.size(400, 300); // Set the size of the textarea

//   let submitButton = createButton('Submit'); // Create a submit button
//   submitButton.position(20, 370); // Position the submit button

//   submitButton.mousePressed(() => {
//     let entry = journalEntry.value(); // Get the text entered by the user
//     // Save the journal entry or perform any desired action with the text
//     console.log('Journal Entry:', entry);
//     journalPage.hide();
//     journalEntry.hide();
//     journalTitle.hide();
//     submitButton.hide();
//   });
// }

// // function displayQuote() {
// // }

// let musicButtonsVisible = false;

// function createButtons(){
//   let journalButton = createButton('Journal');
//   journalButton.position(20, 20);
//   //journalButton.mousePressed(openJournal);

//   let quoteButton = createButton('Quote of the Day');
//   quoteButton.position(120, 20);
  
//   let themeButton = createButton('Change Theme');
//   themeButton.position(280, 20);
//   themeButton.mousePressed(changeTheme);

//   let songsButton = createButton('Songs');
//   songsButton.position(380, 20);
//   songsButton.mousePressed(() => {
//     musicButtonsVisible = !musicButtonsVisible; // Toggle the visibility of the music buttons
//   });

//   createMusicButtons();
// }


// function changeTheme() {
//   // Get the selected theme option
//   let themeOption = select().value();

//   // Change the background based on the selected theme
//   if (themeOption === 'galaxy') {
//     background(0);
//     // Load and display the galaxy image
//     let galaxyImage = loadImage('galaxy.jpg');
//     image(galaxyImage, 0, 0, width, height);
//   } else if (themeOption === 'sunset') {
//     background(255, 0, 0);
//     // Load and display the sunset image
//     let sunsetImage = loadImage('sunset.jpg');
//     image(sunsetImage, 0, 0, width, height);
//   } else if (themeOption === 'garden') {
//     background(0, 255, 0);
//     // Load and display the garden image
//     let gardenImage = loadImage('garden.jpg');
//     image(gardenImage, 0, 0, width, height);
//   }
// }

// function playMusic(sound) {
//   if (sound.isPlaying()) {
//     sound.stop();
//   } else {
//     sound.play();
//   }
// }

// function createMusicButtons() {
//   let calmingButton = createButton('Calming');
//   calmingButton.position(20, 80);
//   calmingButton.style('display', musicButtonsVisible ? 'block' : 'none');
//   calmingButton.mousePressed(() => {
//     playMusic(bgSound1);
//   });

//   let sadButton = createButton('Motivational');
//   sadButton.position(80, 80);
//   sadButton.style('display', musicButtonsVisible ? 'block' : 'none');
//   sadButton.mousePressed(() => {
//     playMusic(bgSound2);
//   });

//   let hopefulButton = createButton('Hopeful');
//   hopefulButton.position(140, 80);
//   hopefulButton.style('display', musicButtonsVisible ? 'block' : 'none');
//   hopefulButton.mousePressed(() => {
//     playMusic(bgSound3);
//   });

//   let motivationalButton = createButton('Sad');
//   motivationalButton.position(200, 80);
//   motivationalButton.style('display', musicButtonsVisible ? 'block' : 'none');
//   motivationalButton.mousePressed(() => {
//     playMusic(bgSound4);
//   });
// }









