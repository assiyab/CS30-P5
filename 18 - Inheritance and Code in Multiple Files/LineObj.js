class LineObj extends AnitmatedObjcet{
    constructor(){
      super(random(width), random(height));
    }
  
    move(){ //overriding
      super.move() // starts with parents move code 
      this.x -= 5;
      if(this.x < 0) this.x = width;
    }
  
    display(){
      if(mouseIsPressed) strokeWeight(10);
      else strokeWeight(2);
      line(this.x, this.y, this.x + 15, this.y);
  
    }
  }
  