class Log extends BaseClass{
  constructor(x,y,heigth,angle) {
     super(x,y,20,heigth,angle);
     this.image = loadImage("sprites/wood2.png");
     Matter.Body.setAngle(this.body,angle);
    }
};
