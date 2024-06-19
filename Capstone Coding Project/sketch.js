// Note taking App
// Assiya Boulfiza and Tanya Bhardwaj
// May 14, 2024
//

//intialize everything global so it can be accessed both ways (globally and locally)
let journalPage, journalTitle, submitButton, journalEntry, returnButton, exploreButton, themePage,
  quoteTitle, quotePage, sadButton, happyButton, motivationalButton, calmingButton, hopefulButton,
  musicButtonsVisible = false, songsPage, generateBtn, regenerateBtn, quotes, currentTheme = 'motivational',
  bgSound1, bgSound2, bgSound3, bgSound4, bgSound5, currentSound, journalButton, themeButton,
  songsButton, quoteButton, duskButton, pastelSkyButton, cottonCandyButton, dawnButton, galaxyButton, unicornButton;

let currentImage = -1; //background of stars
let afinn; //declared in html

//this is for sentiment analysis 
let moodQuotes = {
  positive: [
    "\"The only way to do great work is to love what you do - Steve Jobs\"",
    "\"The best way to predict the future is to invent it - Alan Kay\"",
    "\"You're doing so great so far, so continue to enjoy your day!\"",
    "\"Today is your day so don't let anyone ruin it\"",
    "\"There is more joy and good luck coming your way\"",
  ],
  negative: [
    "\"It is a double pleasureto decieve the deciever\"",
    "\"The word happy would loose its meaning if it were not balanced by sadness - Jarl Jung\"",
    "\"Today wasn't your day, but tomorrow might, so forget today and live for tomorrow\"",
    "\"Hardships often prepare ordinary people for an extraordinary destiny - C.S. Lewis\"",
    "\"Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit - Napoleon Hill\""
  ],
  neutral: [
    "\"Life is 10% what happens to us and 90% how we react to it - Charles R. Swindoll\"",
    "\"Sometimes the most productive thing you do is relax - Mark Black\"",
    "\"Keep your face always toward the sunshine—and shadows will fall behind you - Walt Whitman\"",
    "\"The only limit to our realization of tomorrow is our doubts of today - Franklin D. Roosevelt\"",
    "\"Life is a mix of vlack, white, and all shades of grey, today I'm embracing the grey\""
  ]
};

let journalUI = [];
let songsUI = [];
let themeUI = [];
let quoteUI = [];
let menuUI = [];

function preload() {
  //preloading all essential images and sounds to run smoother , music is declared in html as well
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

  //stars background
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(1, 5);
    fill(255);
    noStroke();
    ellipse(x, y, size, size);
  }

  //for allowing the caclculateSentiment function to acess the words and their scores assigned 
  fetch('affinb11.json')
    .then(response => response.json())
    .then(data => {
      afinn = data;
      submitButton.mousePressed(analyzeSentiment);
    })
    .catch(error => console.error('Error loading AFINN-111:', error));


  //first button that pops up with stars background
  exploreButton = createButton('Begin Your Self Exploration');
  exploreButton.style('background-color', 'beige');
  exploreButton.style('border-radius', '30px');
  exploreButton.style('font-size', '40px');
  exploreButton.style('font-family', 'Cursive')
  exploreButton.position(width / 2 - 200, height / 2 - 50);
  exploreButton.mousePressed(() => {
    exploreButton.hide();
    showStickyNote();
    homePage();
  });

  addAllButtons();  // new function to create all menu buttons
  // other than Explore above. Store each in
  // the arrays to organize each menu set.
  hideAllUI();
}

function updateBackground() {
  //function will reset and make sure backgrounds change appropriately and nit overlap
  print("reset background");
  if (currentImage === - 2) {
    showStickyNote();
  }
  else if (currentImage === -1) {
    background('#FFC0CB');
  }
  else {
    image(images[currentImage], 0, 0, windowWidth, windowHeight);
  }
}


let stars = [];
let stickyNote = { active: false, x: 0, y: 0 };

function addAllButtons() {
  // Create all button objects and organize into other
  // arrays by menu set.

  // ---- MAIN MENU BUTTONS ----
  journalButton = createButton('Journal');
  journalButton.style('background-color', 'beige');
  journalButton.style('border-radius', '10px');
  journalButton.style('font-size', '20px');
  journalButton.style('font-family', 'Cursive')
  journalButton.position(windowWidth / 2 - 270, windowHeight - 850);
  journalButton.mousePressed(() => {
    hideUI(menuUI);
    journal();
  });

  quoteButton = createButton('Quote of the Day');
  quoteButton.style('background-color', 'beige');
  quoteButton.style('border-radius', '10px');
  quoteButton.style('font-size', '20px');
  quoteButton.style('font-family', 'Cursive')
  quoteButton.position(windowWidth / 2 - 180, windowHeight - 850);
  quoteButton.mousePressed(() => {
    hideUI(menuUI);
    quoteGenerator();
  });

  themeButton = createButton('Change Theme');
  themeButton.style('background-color', 'beige');
  themeButton.style('border-radius', '10px');
  themeButton.style('font-size', '20px');
  themeButton.style('font-family', 'Cursive')
  themeButton.position(windowWidth / 2 + 10, windowHeight - 850);
  themeButton.mousePressed(() => {
    hideUI(menuUI);
    changeTheme();
  });

  songsButton = createButton('Songs');
  songsButton.style('background-color', 'beige');
  songsButton.style('border-radius', '10px');
  songsButton.style('font-size', '20px');
  songsButton.style('font-family', 'Cursive')
  songsButton.position(windowWidth / 2 + 170, windowHeight - 850);
  songsButton.mousePressed(() => {
    hideUI(menuUI);
    songs();
  });

  menuUI.push(journalButton);
  menuUI.push(quoteButton);
  menuUI.push(themeButton);
  menuUI.push(songsButton);

  //Journal Buttons/Elements
  //***creating a popup when journal button is pressed */
  journalTitle = createElement('h1', 'Journal'); // Create a heading for the journal title
  journalTitle.position(20, -5); // Position the journal title

  journalEntry = createElement('textarea', ''); // Create a textarea for journal entry for user to write in
  journalEntry.position(20, 50); // Position the textarea
  journalEntry.size(400, 300); // Set the size of the textarea

  submitButton = createButton('Submit'); // Create a submit button
  submitButton.style('background-color', 'beige');
  submitButton.style('border-radius', '15px');
  submitButton.style('font-size', '20px');
  submitButton.style('font-family', 'Cursive')
  submitButton.position(windowWidth / 2 - 265, windowHeight - 580); // Position the submit button    

  submitButton.mousePressed(() => {
    let entry = journalEntry.value(); // Get the text entered by the user
    // Save the journal entry or perform any desired action with the text
    let sentimentScore = calculateSentiment(entry);

    // to log sentiment score to console 
    console.log('Sentiment Score:', sentimentScore);
    let mood;

    // to fetch a random quote based on the detected mood
    if (sentimentScore > 3) {
      mood = "positive";
    } else if (sentimentScore < -3) {
      mood = "negative";
    } else {
      mood = "neutral";

    }

    let quotesArray = moodQuotes[mood];
    let randomIndex = floor(random(quotesArray.length));
    let selectedQuote = quotesArray[randomIndex];


    fill(0);
    textSize(20);
    background('#FFC0CB');
    if(entry.length > 0){
      text(selectedQuote, 100, 400, windowWidth - 200, windowHeight - 200);
    }
    
    // to log the quote to console 
    console.log('Selected Quote:', selectedQuote);


    // to save the journal entry or perform any desired action with the text
    console.log('Journal Entry:', entry);

  });

  //will appear on everypage and take you nack to the homepage
  returnButton = createButton('Return to HomePage');
  returnButton.style('background-color', 'beige');
  returnButton.style('border-radius', '10px');
  returnButton.style('font-size', '20px');
  returnButton.style('font-family', 'Cursive')
  returnButton.position(width / 2 + 100, height / 2 + 400);

  returnButton.mousePressed(() => {
    hideAllUI(journalUI);
    showUI(menuUI);
    updateBackground();
  });

  journalUI.push(journalTitle);
  journalUI.push(journalEntry);
  journalUI.push(submitButton);
  journalUI.push(returnButton);

  //Songs UI
  calmingButton = createButton('Calming');
  calmingButton.position(15, 80);
  calmingButton.style('background-color', 'beige');
  calmingButton.style('border-radius', '10px');
  calmingButton.style('font-size', '20px');
  calmingButton.style('font-family', 'Cursive')
  calmingButton.mousePressed(() => {
    playMusic(bgSound1);
  });

  sadButton = createButton('Sad');
  sadButton.position(105, 80);
  sadButton.style('background-color', 'beige');
  sadButton.style('border-radius', '10px');
  sadButton.style('font-size', '20px');
  sadButton.style('font-family', 'Cursive')
  sadButton.mousePressed(() => {
    playMusic(bgSound4);
  });

  hopefulButton = createButton('Hopeful');
  hopefulButton.position(160, 80);
  hopefulButton.style('background-color', 'beige');
  hopefulButton.style('border-radius', '10px');
  hopefulButton.style('font-size', '20px');
  hopefulButton.style('font-family', 'Cursive')
  hopefulButton.mousePressed(() => {
    playMusic(bgSound3);
  });

  motivationalButton = createButton('Motivational');
  motivationalButton.position(255, 80);
  motivationalButton.style('background-color', 'beige');
  motivationalButton.style('border-radius', '10px');
  motivationalButton.style('font-size', '20px');
  motivationalButton.style('font-family', 'Cursive')
  motivationalButton.mousePressed(() => {
    playMusic(bgSound2);
  });

  happyButton = createButton('Happy');
  happyButton.position(390, 80);
  happyButton.style('background-color', 'beige');
  happyButton.style('border-radius', '10px');
  happyButton.style('font-size', '20px');
  happyButton.style('font-family', 'Cursive')
  happyButton.mousePressed(() => {
    playMusic(bgSound5);
  });



  songsUI.push(sadButton);
  songsUI.push(motivationalButton);
  songsUI.push(hopefulButton);
  songsUI.push(calmingButton);
  songsUI.push(happyButton);
  songsUI.push(returnButton);

  //Theme UI
  duskButton = createButton('Dusk Button');
  duskButton.style('background-color', 'beige');
  duskButton.style('border-radius', '10px');
  duskButton.style('font-size', '20px');
  duskButton.style('font-family', 'Cursive');
  duskButton.position(windowWidth / 2 - duskButton.width / 2, windowHeight - 850);
  duskButton.mousePressed(() => {
    currentImage = 0;
    updateBackground();
  });

  pastelSkyButton = createButton('Pastel Sky Button');
  pastelSkyButton.style('background-color', 'beige');
  pastelSkyButton.style('border-radius', '10px');
  pastelSkyButton.style('font-size', '20px');
  pastelSkyButton.style('font-family', 'Cursive');
  pastelSkyButton.position(windowWidth / 2 - pastelSkyButton.width / 2, windowHeight - 750);
  pastelSkyButton.mousePressed(() => {
    currentImage = 1;
    updateBackground();
  });

  cottonCandyButton = createButton('Cotton Candy Button');
  cottonCandyButton.style('background-color', 'beige');
  cottonCandyButton.style('border-radius', '10px');
  cottonCandyButton.style('font-size', '20px');
  cottonCandyButton.style('font-family', 'Cursive');
  cottonCandyButton.position(windowWidth / 2 - cottonCandyButton.width / 2, windowHeight - 650);
  cottonCandyButton.mousePressed(() => {
    currentImage = 2;
    updateBackground();
  });

  dawnButton = createButton('Dawn Button');
  dawnButton.style('background-color', 'beige');
  dawnButton.style('border-radius', '10px');
  dawnButton.style('font-size', '20px');
  dawnButton.style('font-family', 'Cursive');
  dawnButton.position(windowWidth / 2 - dawnButton.width / 2, windowHeight - 550);
  dawnButton.mousePressed(() => {
    currentImage = 3;
    updateBackground();
  });

  galaxyButton = createButton('Galaxy Button');
  galaxyButton.style('background-color', 'beige');
  galaxyButton.style('border-radius', '10px');
  galaxyButton.style('font-size', '20px');
  galaxyButton.style('font-family', 'Cursive');
  galaxyButton.position(windowWidth / 2 - galaxyButton.width / 2, windowHeight - 550);
  galaxyButton.mousePressed(() => {
    currentImage = 4;
    updateBackground();
  });

  unicornButton = createButton('Unicorn Button');
  unicornButton.style('background-color', 'beige');
  unicornButton.style('border-radius', '10px');
  unicornButton.style('font-size', '20px');
  unicornButton.style('font-family', 'Cursive');
  unicornButton.position(windowWidth / 2 - unicornButton.width / 2, windowHeight - 450);
  unicornButton.mousePressed(() => {
    currentImage = 5;
    updateBackground();
  });

  themeUI.push(duskButton);
  themeUI.push(pastelSkyButton);
  themeUI.push(cottonCandyButton);
  themeUI.push(dawnButton);
  themeUI.push(galaxyButton);
  themeUI.push(unicornButton);
  themeUI.push(returnButton);

  //QuoteUI

  quoteTitle = createElement('h1', 'Quote Generator'); // create a heading for the journal title
  quoteTitle.position(20, -5); // position the journal title

  generateBtn = createButton('Generate Quote of the Day');
  generateBtn.position(0, windowHeight - 150);
  generateBtn.style('background-color', 'beige');
  generateBtn.style('border-radius', '10px');
  generateBtn.style('font-size', '20px');
  generateBtn.style('font-family', 'Cursive');
  generateBtn.mousePressed(function () {
    currentTheme = prompt('What theme fits your mood for today? motivational, calming, comedic, hopeful');
    if (currentTheme === 'motivational' || currentTheme === 'calming' || currentTheme === 'comedic' || currentTheme === 'hopeful') {
      generateQuote();
    } else {
      alert('Invalid theme. Please choose motivational, calming, comedic, or hopeful.');
    }
  });

  //picks another quote from same list
  regenerateBtn = createButton('Regenerate Quote');
  regenerateBtn.position(windowWidth - 200, windowHeight - 150);
  regenerateBtn.style('background-color', 'beige');
  regenerateBtn.style('border-radius', '10px');
  regenerateBtn.style('font-size', '20px');
  regenerateBtn.style('font-family', 'Cursive');

  //button should only work when the generate quote button is presssed
  regenerateBtn.mousePressed(regenerateQuote);

  quoteUI.push(quoteTitle);
  quoteUI.push(generateBtn);
  quoteUI.push(regenerateBtn);
  quoteUI.push(returnButton);

}


function calculateSentiment(text) {
  let words = text.split(/\W+/); //from coding train has been working so well so we took inspiration
  let score = 0;

  for (let word of words) {
    word = word.toLowerCase();
    if (afinn[word] !== undefined) {
      score += int(afinn[word]);
    }
  }

  return score;
}


function homePage() {
  updateBackground();
  showUI(menuUI);
}

function journal() {
  updateBackground();
  showUI(journalUI);

}

function songs() {
  updateBackground();
  showUI(songsUI);
}

//make sure music swicthes when user clicks another theme and loops song 
function playMusic(sound) {
  if (currentSound) {
    currentSound.stop();
  }
  currentSound = sound;
  currentSound.loop();
}

function hideUI(set) {
  for (let item of set) {
    item.hide();
  }
}

function hideAllUI() {
  // For the use of the return button, hide ALL buttons so
  // that we can have one "return" button but not need to keep track
  // of what UI elements need to be hidden.
  for (let item of menuUI) {
    item.hide();
  }
  for (let item of themeUI) {
    item.hide();
  }
  for (let item of songsUI) {
    item.hide();
  }
  for (let item of journalUI) {
    item.hide();
  }
  for (let item of quoteUI) {
    item.hide();
  }
}

function showUI(set) {
  for (let item of set) {
    item.show();
  }
}

function showStickyNote() {
  //displays homePage();`
  fill('#FFC0CB');
  rect(0, 0, windowWidth, windowHeight);
  fill(0);
  textSize(16);
  showUI(menuUI);
}

let x = 0;
let images = [];

function looper() {
  if (x < 5) {
    x++;
  } else {
    x = 0;
  }
  currentImage = images[x];  // update current image based on x
}

function changeTheme() {
  updateBackground()
  showUI(themeUI);
}

function quoteGenerator() {
  //all possible quotes from their themes, this is for quoteGenerator(); not sentiment analysis 
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

    hopeful: [
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
  if (returnButton.mousePressed) {
    hideUI(quoteUI);
  }
  hideUI(menuUI);
  showUI(quoteUI);
  updateBackground();

}

function generateQuote() {
  updateBackground();
  let randomIndex = floor(random(quotes[currentTheme].length));
  let quote = quotes[currentTheme][randomIndex];

  fill(0);
  textFont('Comic Sans MS');
  textSize(30);
  updateBackground();
  text(quote, 100, 230, 360, 300);
}

function regenerateQuote() {
  fill(255);
  rect(0, 0, windowWidth, windowHeight);
  let randomIndex = floor(random(quotes[currentTheme].length));
  let quote = quotes[currentTheme][randomIndex];

  fill(0);
  textSize(30);
  textFont('Comic Sans MS');
  updateBackground();
  text(quote, windowWidth / 2 - 100, windowHeight - 450, 360, 300);
}
