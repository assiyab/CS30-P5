//parent class or ("super class")
class AnitmatedObjcet{
    constructor(x, y){
      this.x = x;
      this.y = y;
      this.size = 1;
    }
  
    move(){ //should have a "wiggle" effect
      this.x += random(-2, 2);
      this.y += random(-2, 2);
    }
  
    display(){
      strokeWeight(4);
      point(this.x, this.y);
    }
  }