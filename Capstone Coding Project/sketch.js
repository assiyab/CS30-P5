// Note taking App
// Assiya Boulfiza and Tanya Bhardwaj
// May 14, 2024
// 

//intialize everything global so it can be accessed both ways (globally and locally)
let journalPage, journalTitle, submitButton, journalEntry, returnButton, exploreButton, themePage, 
quoteTitle, quotePage, sadButton, happyButton, motivationalButton, calmingButton, hopefulButton, 
musicButtonsVisible = false, songsPage, generateBtn, regenerateBtn, quotes, currentTheme = 'motivational',
bgSound1, bgSound2, bgSound3, bgSound4, bgSound5, currentSound;


let journalUI = [];
let songsUI = [];
let themeUI = [];
let quoteUI = [];
let menuUI = [];

function preload(){
  bgSound1 = loadSound("Songs/SpringSnow.mp3");
  bgSound2 = loadSound("Songs/AllDay.mp3");
  bgSound3 = loadSound("Songs/Happier.mp3");
  bgSound4 = loadSound("Songs/FirstLove.mp3");
  bgSound5 = loadSound("Songs/Swing.mp3");

  images[0] = loadImage('Backgrounds/BG1.jpg');  // load all necessary images
  images[1] = loadImage('Backgrounds/BG2.jpg');
  images[2] = loadImage('Backgrounds/BG3.jpg');
  images[3] = loadImage('Backgrounds/BG4.jpg');
  images[4] = loadImage('Backgrounds/BG5.jpg');
  images[5] = loadImage('Backgrounds/BG6.jpg');
  
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

  


  //changeTheme();
  currentImage = - 1;
}

function draw(){
  if(currentImage === - 1){
    randomSeed(100);
    for (let i = 0; i < 100; i++) {
      let x = random(width);
      let y = random(height);
      let size = random(1, 5);
      fill(255);
      noStroke();
      ellipse(x, y, size, size);
    }
    
  }
  else if(currentImage === - 2){
    showStickyNote();
  }
  else{
    image(images[currentImage], 0, 0, windowWidth, windowHeight);
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
  journalButton.position(windowWidth/2 - 250, windowHeight - 850);
  journalButton.mousePressed(journal);

  let quoteButton = createButton('Quote of the Day');
  quoteButton.style('background-color', 'beige');
  quoteButton.style('border-radius', '10px');
  quoteButton.style('font-size', '16px');
  quoteButton.style('font-family','Cursive')
  quoteButton.position(windowWidth/2 - 160, windowHeight - 850);
  quoteButton.mousePressed(quoteGenerator);
  
  let themeButton = createButton('Change Theme');
  themeButton.style('background-color', 'beige');
  themeButton.style('border-radius', '10px');
  themeButton.style('font-size', '16px');
  themeButton.style('font-family','Cursive')
  themeButton.position(windowWidth/2, windowHeight - 850);
  themeButton.mousePressed(changeTheme);

  let songsButton = createButton('Songs');
  songsButton.style('background-color', 'beige');
  songsButton.style('border-radius', '10px');
  songsButton.style('font-size', '16px');
  songsButton.style('font-family','Cursive')
  songsButton.position(windowWidth/2 + 150, windowHeight - 850);
  songsButton.mousePressed(songs);

  menuUI.push(journalButton);
  menuUI.push(quoteButton);
  menuUI.push(themeButton);
  menuUI.push(songsButton);

}


function journal(){
  hideUI(menuUI);
  fill(255);
  rect(0, 0, windowWidth, windowHeight);

  //***creating a popup when journal button is pressed */
  // journalPage = createDiv(''); // Create a div element for the journal page to store other elements in the div element
  // journalPage.position(0, 0); // Position the journal page
  // journalPage.size(windowWidth, windowHeight); // Set the size of the journal page
  // journalPage.style('background-color', 'beige'); // Set background color to beige
    
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
  submitButton.position(windowWidth/2 - 265, windowHeight - 580); // Position the submit button    
  
  submitButton.mousePressed(() => {
    let entry = journalEntry.value(); // Get the text entered by the user
        // Save the journal entry or perform any desired action with the text
    console.log('Journal Entry:', entry);
    hideUI(journalUI)
    homePage();
  });

  returnButton = createButton('Return to HomePage');
  returnButton.style('background-color', 'pink');
  returnButton.style('border-radius', '30px');
  returnButton.style('font-size', '20px');
  returnButton.style('font-family','Cursive')
  returnButton.position(width/2 + 100, height/2 + 400);
  returnButton.mousePressed(showStickyNote)
  
  returnButton.mousePressed(() => {
    hideUI(journalUI);
    homePage();
  });


  //journalUI.push(journalPage);
  journalUI.push(journalTitle);
  journalUI.push(journalEntry);
  journalUI.push(submitButton);
  journalUI.push(returnButton);
}


function songs(){
  hideUI(menuUI)
  fill(255);
  rect(0, 0, windowWidth, windowHeight);

  // songsPage = createDiv(''); // Create a div element for the journal page to store other elements in the div elements
  // songsPage.position(0, 0); 
  // songsPage.size(windowWidth, windowHeight); 
  // songsPage.style('background-color', 'beige'); 
  
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
    homePage();
  });

  //songsUI.push(songsPage);
  songsUI.push(sadButton);
  songsUI.push(motivationalButton);
  songsUI.push(hopefulButton);
  songsUI.push(calmingButton);
  songsUI.push(happyButton);
  songsUI.push(returnButton);
}


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
  currentImage = - 2;
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

let x = 0;
let images = [];
let currentImage;

function looper() {
  if (x < 5) {
    x++;
  } else {
    x = 0;
  }
  currentImage = images[x];  // Update current image based on x
}


function changeTheme() {
  hideUI(menuUI);
  fill(255);
  rect(0, 0, windowWidth, windowHeight);

  //themePage = createDiv(''); // Create a div element for the journal page to store other elements in the div element
  //themePage.position(0, 0); // Position the journal page
  //themePage.size(windowWidth, windowHeight); // Set the size of the journal page
  //themePage.style('background-color', 'beige'); // Set background color to beige
 
    duskButton = createButton('Dusk Button');
    duskButton.style('background-color', 'pink');
    duskButton.style('border-radius', '30px');
    duskButton.style('font-size', '20px');
    duskButton.style('font-family', 'Cursive');
    duskButton.position(windowWidth/2, windowHeight - 850);
    duskButton.mousePressed(() => {
      currentImage = 0;
    });
  
    pastelSkyButton = createButton('Pastel Sky Button');
    pastelSkyButton.style('background-color', 'pink');
    pastelSkyButton.style('border-radius', '30px');
    pastelSkyButton.style('font-size', '20px');
    pastelSkyButton.style('font-family', 'Cursive');
    pastelSkyButton.position(windowWidth/2, windowHeight - 750);
    pastelSkyButton.mousePressed(() => {
      currentImage = 1;
    });
  
    cottonCandyButton = createButton('Cotton Candy Button');
    cottonCandyButton.style('background-color', 'pink');
    cottonCandyButton.style('border-radius', '30px');
    cottonCandyButton.style('font-size', '20px');
    cottonCandyButton.style('font-family', 'Cursive');
    cottonCandyButton.position(windowWidth/2, windowHeight - 650);
    cottonCandyButton.mousePressed(() => {
      currentImage = 2;
    });

    dawnButton = createButton('Dawn Button');
    dawnButton.style('background-color', 'pink');
    dawnButton.style('border-radius', '30px');
    dawnButton.style('font-size', '20px');
    dawnButton.style('font-family', 'Cursive');
    dawnButton.position(windowWidth/2, windowHeight - 550);
    dawnButton.mousePressed(() => {
      currentImage = 3;
    });

    galaxyButton = createButton('Galaxy Button');
    galaxyButton.style('background-color', 'pink');
    galaxyButton.style('border-radius', '30px');
    galaxyButton.style('font-size', '20px');
    galaxyButton.style('font-family', 'Cursive');
    galaxyButton.position(windowWidth/2, windowHeight - 550);
    galaxyButton.mousePressed(() => {
      currentImage = 4;
    });

    unicornButton = createButton('Unicorn Button');
    unicornButton.style('background-color', 'pink');
    unicornButton.style('border-radius', '30px');
    unicornButton.style('font-size', '20px');
    unicornButton.style('font-family', 'Cursive');
    unicornButton.position(windowWidth/2, windowHeight - 450);
    unicornButton.mousePressed(() => {
      currentImage = 5;
    });
  

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
    hideUI(themeUI);
    homePage();
  });

  // themeUI.push(themePage);
  themeUI.push(duskButton);
  themeUI.push(pastelSkyButton);
  themeUI.push(cottonCandyButton);
  themeUI.push(dawnButton);
  themeUI.push(galaxyButton);
  themeUI.push(unicornButton);
  themeUI.push(returnButton);

}


function quoteGenerator(){
  quotes = {
    motivational: [
      "\"Success is not final, failure is not fatal. It is the courage to continue that counts - Unknown\"",
      "\"Work hard in silence, let success be your noise - Park Jihyo\"",
      "\"Hardships often prepare ordinary people for an extraordinary destiny - Unknown\"",
      "\"Believe you can and you're halfway there - Unknown\"",
      "\"Pain is weakness leaving the body - Lewis Burwell\"",
      "\"Perfection does not exist, but if you chase perfection you will obtain excellence - Vince Lombardi\"",
      "\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time - Thomas Edison\"",
      "\"Setting goals is the first step of turning invisible to visible - Tany Robins\"",
      "\"The sturggle you're in today is deveoping the strength you need for tomorrow - Unknown\"",
      "\"You cannot swim for new horizons until you have courage to lose sight of the shore — William Faulkner\"",
    ],
    
    calming: [
      "\"In the midst of movement and chaos, keep stillness inside of you - Unknown\"",
      "\"The best way out is always through - Unknown\"",
      "\"Serenity comes when you trade expectations for acceptance - Unknown\"",
      "\"Set peace of mind at the highest goal, and organize your life around it - Brian Tracy\"",
      "\"Just because we are in a stressful situation, does not mean we must be stressed out - Joel Osteen\"",
      "\"If you wouldn't say it to a stranger, why say it to yourself? - Jane Travis\"",
      "\"By staying calm, you increase your resistance against any kind of storms -  Mehmet Murat ildan\"",
      "\"Don’t try to force anything. Let life be a deep let-go. God opens millions of flowers every day without forcing their buds - Osho\"",
      "\"Give your stress wings and let it fly away - Terri Guillemets\"",
      "\"To be calm is the highest achievement of the self - Unknown\"",
      "\"We must accept finite disappointment, but never lose infinite hope — Martin Luther King, Jr.\"",
      "\"When you’re at the end of your rope, tie a knot and hold on — Theodore Roosevelt\"",
    ],
    
    comedic: [
      "\"When in doubt, look intelligent - Garrison Keiler\"",
      "\"Hard work never killed anybody but why take the chance? - Ronald Regan\"",
      "\"Lazy is such a cruel word, I prefer to call it selective participation - John Silver\"",
      "\"Finally my winter fat is gone, now I have spring rolls - Unknown\"",
      "\"Why do they call it rush hour when nothing moves? - Robin Williams\"",
      "\"The man who says his wife can't take a joke forgot that she took him - Oscar Wilde\"",
      "\"One day.... I'll make the onions cry - Unknown\"",
      "\"Are your forehead and hairline old friends? Because they seem to go way back - Unknown\"",
      "\"Have you ever noticed that anybody driving slower than you is an idiot, and anyone going faster than you is a maniac? — George Carlin\"",
      "\"Whoever said that money can’t buy happiness, simply didn’t know where to go shopping ― Bo Derek\"",
      "\"The reason I talk to myself is because I’m the only one whose answers I accept ― George Carlin\""
      
    ],
    
    hopeful:[
      "\"Trust the timing of your life - Unknown\"",
      "\"Learn from yesterday, live for today, hope for tomorrow. The important thing is to stop questioning - Albert Einstein\"",
      "\"Life is like a bicycle, to keep balance you must keep moving - Albert Einstein\"",
      "\"Optimism is what leads to achievement - Helen Keller\"",
      "\"Even if it wasn't today, it could be tomorrow - Unknown\"",
      "\"Nothing in the past can be changed, but you can still control your future - Jim Rohn\"",
      "\"There is a crack in everything, that is how light gets in - Leaonrad Cohen\"",
      "\"Hope is being able to see that there is light despite the darkness - Desmond Tutu\"",
      "\"It’s the children the world almost breaks who grow up to save it — Frank Warren\"",
      "\"Let your hopes, not your hurts, shape your future — Robert H. Schuller\"",
      "\"Never give up. Have hope. Expect only the best from life and take action to get it — Catherine Pulsifer\""
    ]
  };

  quotePage = createDiv(''); // Create a div element for the journal page to store other elements in the div element
  quotePage.position(0, 0); // Position the journal page
  quotePage.size(windowWidth, windowHeight); // Set the size of the journal page
  quotePage.style('background-color', 'beige'); // Set background color to beige
  //Arrays of positive and negative words

  quoteTitle = createElement('h1', 'Quote Generator'); // Create a heading for the journal title
  quoteTitle.position(20, -5); // Position the journal title


  generateBtn = createButton('Generate Quote of the Day');
  generateBtn.position(0, windowHeight - 100);
  generateBtn.style('background-color', 'pink');
  generateBtn.style('border-radius', '10px');
  generateBtn.style('font-size', '16px');
  generateBtn.style('font-family','Cursive')
  generateBtn.mousePressed(function() {
    currentTheme = prompt('What theme fits your mood for today? motivational, calming, comedic, hopeful');
    if (currentTheme === 'motivational' || currentTheme === 'calming' || currentTheme === 'comedic' || currentTheme === 'hopeful') {
      generateQuote();
    } else {
      alert('Invalid theme. Please choose motivational, calming, comedic, or hopeful.');
    }
  });

  //picks another quote from same list 
  regenerateBtn = createButton('Regenerate Quote');
  regenerateBtn.position(windowWidth - 160, windowHeight - 100);
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



function generateQuote() {
  let randomIndex = floor(random(quotes[currentTheme].length));
  let quote = quotes[currentTheme][randomIndex];
  
  fill(0);
  textFont('Comic Sans MS');
  textSize(30);
  text(quote, 100, 230, 360, 300);
}


function regenerateQuote() {
  let randomIndex = floor(random(quotes[currentTheme].length));
  let quote = quotes[currentTheme][randomIndex];
  
  fill(0);
  textSize(30);
  textFont('Comic Sans MS');
  text(quote, windowWidth/2 - 100, windowHeight - 450, 360, 300);
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









