// Note taking App
// Assiya Boulfiza and Tanya Bhardwaj
// May 14, 2024
// 


let journalPage, journalTitle, submitButton, journalEntry, returnButton, exploreButton, themePage, 
quoteTitle, quotePage, sadButton, happyButton, motivationalButton, calmingButton, hopefulButton, 
musicButtonsVisible = false, songsPage, generateBtn, regenerateBtn;


let journalUI = [];
let songsUI = [];
let themeUI = [];
let quoteUI = [];

let bgSound1;
let bgSound2;
let bgSound3;
let bgSound4;
let bgSound5;


function preload(){
  bgSound1 = loadSound("Songs/SpringSnow.mp3");
  bgSound2 = loadSound("Songs/AllDay.mp3");
  bgSound3 = loadSound("Songs/Happier.mp3");
  bgSound4 = loadSound("Songs/FirstLove.mp3");
  bgSound5 = loadSound("Songs/Swing.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  exploreButton = createButton('Begin Your Self Exploration');
  exploreButton.style('background-color', 'beige');
  exploreButton.style('border-radius', '30px');
  exploreButton.style('font-size', '40px');
  exploreButton.style('font-family','Cursive')
  exploreButton.position(width/2 -200, height/2 - 50);
  exploreButton.mousePressed(() => {
    showStickyNote();
    exploreButton.hide();
  });
  
  
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(1, 5);
    fill(255);
    noStroke();
    ellipse(x, y, size, size);
  }
}


let stars = [];
let stickyNote = { active: false, x: 0, y: 0 };

function homePage(){
  let journalButton = createButton('Journal');
  journalButton.style('background-color', 'beige');
  journalButton.style('border-radius', '10px');
  journalButton.style('font-size', '16px');
  journalButton.style('font-family','Cursive')
  journalButton.position(20, 20);
  journalButton.mousePressed(journal);

  let quoteButton = createButton('Quote of the Day');
  quoteButton.style('background-color', 'beige');
  quoteButton.style('border-radius', '10px');
  quoteButton.style('font-size', '16px');
  quoteButton.style('font-family','Cursive')
  quoteButton.position(120, 20);
  quoteButton.mousePressed(quoteGenerator);
  
  let themeButton = createButton('Change Theme');
  themeButton.style('background-color', 'beige');
  themeButton.style('border-radius', '10px');
  themeButton.style('font-size', '16px');
  themeButton.style('font-family','Cursive')
  themeButton.position(280, 20);
  themeButton.mousePressed(changeTheme);

  let songsButton = createButton('Songs');
  songsButton.style('background-color', 'beige');
  songsButton.style('border-radius', '10px');
  songsButton.style('font-size', '16px');
  songsButton.style('font-family','Cursive')
  songsButton.position(440, 20);
  songsButton.mousePressed(songs);
}


function journal(){
  //***creating a popup when journal button is pressed */
  journalPage = createDiv(''); // Create a div element for the journal page to store other elements in the div element
  journalPage.position(0, 0); // Position the journal page
  journalPage.size(windowWidth, windowHeight); // Set the size of the journal page
  journalPage.style('background-color', 'beige'); // Set background color to beige
    
  journalTitle = createElement('h1', 'Journal'); // Create a heading for the journal title
  journalTitle.position(20, -5); // Position the journal title
    
  journalEntry = createElement('textarea', ''); // Create a textarea for journal entry for user to write in
  journalEntry.position(20, 50); // Position the textarea
  journalEntry.size(400, 300); // Set the size of the textarea
    
  submitButton = createButton('Submit'); // Create a submit button
  submitButton.style('background-color', 'pink');
  submitButton.style('border-radius', '15px');
  submitButton.style('font-size', '20px');
  submitButton.style('font-family','Cursive')
  submitButton.position(20, 370); // Position the submit button    
  
  submitButton.mousePressed(() => {
    let entry = journalEntry.value(); // Get the text entered by the user
        // Save the journal entry or perform any desired action with the text
    console.log('Journal Entry:', entry);
    hideUI(journalUI)
  });

  returnButton = createButton('Return to HomePage');
  returnButton.style('background-color', 'pink');
  returnButton.style('border-radius', '30px');
  returnButton.style('font-size', '20px');
  returnButton.style('font-family','Cursive')
  returnButton.position(width/2 + 100, height/2 + 400);
  returnButton.mousePressed(showStickyNote)
  
  returnButton.mousePressed(() => {
    hideUI(journalUI)
  });

  journalUI.push(journalPage);
  journalUI.push(journalTitle);
  journalUI.push(journalEntry);
  journalUI.push(submitButton);
}



function songs(){
  songsPage = createDiv(''); // Create a div element for the journal page to store other elements in the div elements
  songsPage.position(0, 0); 
  songsPage.size(windowWidth, windowHeight); 
  songsPage.style('background-color', 'beige'); 
  
  calmingButton = createButton('Calming');
  calmingButton.position(20, 80);
  calmingButton.style('background-color', 'pink');
  calmingButton.style('border-radius', '10px');
  calmingButton.style('font-size', '16px');
  calmingButton.style('font-family','Cursive')
  calmingButton.mousePressed(() => {
    playMusic(bgSound1);
  });

  sadButton = createButton('Sad');
  sadButton.position(105, 80);
  sadButton.style('background-color', 'pink');
  sadButton.style('border-radius', '10px');
  sadButton.style('font-size', '16px');
  sadButton.style('font-family','Cursive')
  sadButton.mousePressed(() => {
    playMusic(bgSound4);
  });

  hopefulButton = createButton('Hopeful');
  hopefulButton.position(160, 80);
  hopefulButton.style('background-color', 'pink');
  hopefulButton.style('border-radius', '10px');
  hopefulButton.style('font-size', '16px');
  hopefulButton.style('font-family','Cursive')
  hopefulButton.mousePressed(() => {
    playMusic(bgSound3);
  });

  motivationalButton = createButton('Motivational');
  motivationalButton.position(250, 80);
  motivationalButton.style('background-color', 'pink');
  motivationalButton.style('border-radius', '10px');
  motivationalButton.style('font-size', '16px');
  motivationalButton.style('font-family','Cursive')
  motivationalButton.mousePressed(() => {
    playMusic(bgSound2);
  });

  happyButton = createButton('Happy');
  happyButton.position(370, 80);
  happyButton.style('background-color', 'pink');
  happyButton.style('border-radius', '10px');
  happyButton.style('font-size', '16px');
  happyButton.style('font-family','Cursive')
  happyButton.mousePressed(() => {
    playMusic(bgSound5);
  });
  
  returnButton = createButton('Return to HomePage');
  returnButton.style('background-color', 'pink');
  returnButton.style('border-radius', '30px');
  returnButton.style('font-size', '20px');
  returnButton.style('font-family','Cursive')
  returnButton.position(width/2 + 100, height/2 + 400);
  returnButton.mousePressed(showStickyNote)
  
  returnButton.mousePressed(() => {
    hideUI(songsUI)
  });

  songsUI.push(songsPage);
  songsUI.push(sadButton);
  songsUI.push(motivationalButton);
  songsUI.push(hopefulButton);
  songsUI.push(calmingButton);
  songsUI.push(happyButton);

}

let currentSound;

function playMusic(sound) {
  if (currentSound) {
    currentSound.stop();
  }
  currentSound = sound;
  currentSound.loop();
}



function hideUI(set){
  for(let item of set){
    item.hide();
  }
}

function showUI(set){
  for(let item of set){
    item.show();
  }
}

function showStickyNote() {
  fill('#FFC0CB');
  rect(0, 0, windowWidth, windowHeight);
  fill(0);
  textSize(16);
  homePage();
}


function returnHome(){
  let returnButton = createButton('Return to HomePage');
  returnButton.style('background-color', 'pink');
  returnButton.style('border-radius', '30px');
  returnButton.style('font-size', '20px');
  returnButton.style('font-family','Cursive')
  returnButton.position(width/2 + 100, height/2 + 400);
  returnButton.mousePressed(showStickyNote)
}

function changeTheme() {
  themePage = createDiv(''); // Create a div element for the journal page to store other elements in the div element
  themePage.position(0, 0); // Position the journal page
  themePage.size(windowWidth, windowHeight); // Set the size of the journal page
  themePage.style('background-color', 'beige'); // Set background color to beige

  duskButton = createButton('Dusk Button');
  duskButton.style('background-color', 'pink');
  duskButton.style('border-radius', '30px');
  duskButton.style('font-size', '20px');
  duskButton.style('font-family','Cursive')
  duskButton.position(10, 100);
  duskButton.mousePressed(() => {
    let duskImage = loadImage('Backgrounds/BG1.jpg');
    image(duskImage, 0, 0, windowWidth, windowHeight);
  });

  pastelSkyButton = createButton('Pastel Sky Button');
  pastelSkyButton.style('background-color', 'pink');
  pastelSkyButton.style('border-radius', '30px');
  pastelSkyButton.style('font-size', '20px');
  pastelSkyButton.style('font-family','Cursive')
  pastelSkyButton.position(200, 100);

  cottonCandyButton = createButton('CottonCandy Button');
  cottonCandyButton.style('background-color', 'pink');
  cottonCandyButton.style('border-radius', '30px');
  cottonCandyButton.style('font-size', '20px');
  cottonCandyButton.style('font-family','Cursive')
  cottonCandyButton.position(400, 100);


  // Get the selected theme option
  // let themeOption = select().value();
  // // Change the background based on the selected theme
  // if (themeOption === 'Dusk') {
  //   let duskImage = loadImage('BG1.jpg');
  //   image(duskImage, 0, 0, width, height);

  // } else if (themeOption === 'Pastel Skys') {
  //   let pastelSkyImage = loadImage('BG2.jpg');
  //   image(pastelSkyImage, 0, 0, width, height);

  // } else if (themeOption === 'CottonCandy') {
  //   let cottonCandyImage = loadImage('BG3.jpg');
  //   image(cottonCandyImage, 0, 0, width, height);
  // }

  // else if (themeOption === 'Dawn') {
  //   let dawnImage = loadImage('BG4.jpg');
  //   image(dawnImage, 0, 0, width, height);
  // }

  // else if (themeOption === 'Galaxy') {
  //   let galaxyImage = loadImage('BG5.jpg');
  //   image(galaxyImage, 0, 0, width, height);
  // }

  // else if (themeOption === 'Unicorns Residence') {
  //   let unicornsResidenceImage = loadImage('BG6.jpg');
  //   image(unicornsResidenceImage, 0, 0, width, height);
  // }

  returnButton = createButton('Return to HomePage');
  returnButton.style('background-color', 'pink');
  returnButton.style('border-radius', '30px');
  returnButton.style('font-size', '20px');
  returnButton.style('font-family','Cursive')
  returnButton.position(width/2 + 100, height/2 + 400);
  returnButton.mousePressed(showStickyNote)
  
  returnButton.mousePressed(() => {
    hideUI(themeUI)
  });

  themeUI.push(themePage);
  themeUI.push(duskButton);
  themeUI.push(pastelSkyButton);
  themeUI.push(cottonCandyButton);

}


function quoteGenerator(){

  quotePage = createDiv(''); // Create a div element for the journal page to store other elements in the div element
  quotePage.position(0, 0); // Position the journal page
  quotePage.size(windowWidth, windowHeight); // Set the size of the journal page
  quotePage.style('background-color', 'beige'); // Set background color to beige
  //Arrays of positive and negative words

  quoteTitle = createElement('h1', 'Quote Generator'); // Create a heading for the journal title
  quoteTitle.position(20, -5); // Position the journal title



  generateBtn = createButton('Generate Quote of the Day');
  generateBtn.position(0, height - 100);
  generateBtn.style('background-color', 'pink');
  generateBtn.style('border-radius', '10px');
  generateBtn.style('font-size', '16px');
  generateBtn.style('font-family','Cursive')
  generateBtn.mousePressed(function() {
    currentTheme = prompt('What theme fits your mood for today? motivational, calming, comedic, hopeful');
  });

  //picks another quote from same list 
  regenerateBtn = createButton('Regenerate Quote');
  regenerateBtn.position(width - 160, height - 100);
  regenerateBtn.style('background-color', 'pink');
  regenerateBtn.style('border-radius', '10px');
  regenerateBtn.style('font-size', '16px');
  regenerateBtn.style('font-family','Cursive')
  
  //button should only work when the generate quote button is presssed
  regenerateBtn.mousePressed(regenerateQuote);

  returnButton = createButton('Return to HomePage');
  returnButton.style('background-color', 'pink');
  returnButton.style('border-radius', '30px');
  returnButton.style('font-size', '20px');
  returnButton.style('font-family','Cursive')
  returnButton.position(width/2 + 100, height/2 + 400);
  returnButton.mousePressed(showStickyNote)
  
  returnButton.mousePressed(() => {
    hideUI(quoteUI)
  });

  quoteUI.push(quotePage);
  quoteUI.push(quoteTitle);
  quoteUI.push(generateBtn);
  quoteUI.push(regenerateBtn);


// const positiveWords = ["happy", "good", "great", "awesome", "fantastic", "positive", "love", "excellent", "lit", "cool", "amazing", "fire", "chill", "slay", "vibe", "sick", "banger", "blessed", "pumped", "hyped"];

// const negativeWords = ["sad", "bad", "terrible", "awful", "horrible", "negative", "hate", "poor", "trash", "sucks", "lame", "cringe", "depressed", "worst", "mad", "angry", "annoyed" , "bummer", "fail", "yikes", "toxic", "drained", "overwhelmed"];


// // Function to perform sentiment analysis

// function analyzeSentiment(text) {

//     const words = text.toLowerCase().split(/\W+/);

//     let sentimentScore = 0;

//     let sentiment = "";
//     if (positiveCount > negativeCount) {
//         sentiment = "Positive";
//     } else if (negativeCount > positiveCount) {
//         sentiment = "Negative";
//     } else {
//         sentiment = "Neutral";
//     }
//     return sentiment;
// }

 

// // Function to get user input and analyze sentiment

// function journalSentiment() {
//     const text = prompt("Enter your journal entry:");
//     if (text) {
//         const sentiment = analyzeSentiment(text);
//         console.log(`Sentiment: ${sentiment}`);
//     } else {
//         console.log("No input provided.");
//     }
// }


// // Run the function to prompt the user and analyze sentiment

// journalSentiment();

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
//     // Load and display the galaxy image
//     let galaxyImage = loadImage('galaxy.jpg');
//     image(galaxyImage, 0, 0, width, height);
//   } else if (themeOption === 'sunset') {
//     // Load and display the sunset image
//     let sunsetImage = loadImage('sunset.jpg');
//     image(sunsetImage, 0, 0, width, height);
//   } else if (themeOption === 'garden') {
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









