// Replication Generative Art 
// Assiya Boulfiza
// March 27, 2024
// Replication of computer composition with lines by Micheal Noll



function setup() {
  createCanvas(400, 400);
  background(220);
  
  for (let i = 0; i < 800; i++) {
    // make sure they do not draw too far and keep the shape of a circle 
    let x = random(width);
    let y = random(height);
    let squareSize = random(7, 10);
    
    if (dist(x, y, width / 2, height / 2) < 200) {
      //circle will be drawn here, meausrments come from previous height and width from above
      // distance measures the space between x and y points to make sure they stay within the 
      //circle shape with a radius of 200
      //Squares will only be drawn if they fall within the correct distance away from the center of the canvas
      // there is a 40 percent change of horizontal and vertical squares being drawn and a 20 percent change of small squares being drawn 
      if (random() > 0.4) {
        fill(0);
        rect(x, y, squareSize + 3, squareSize - 7);
      }else if (random() > 0.4){
        fill(0);
        rect(x, y, squareSize - 7 , squareSize + 3);
      }
      else {
        if (random() > 0.2){
          fill(0);
          square(x, y, 5);
        }
      }
    }
  }
}

