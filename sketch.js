var rect1;
var rect2;

function setup() {
        createCanvas(1200,800);
        rect1=createSprite(600, 400, 50, 80);
        rect2=createSprite(600,200,80,30);
        rect1.shapeColor=("white");
        rect2.shapeColor=("Black");
        rect1.debug=true;
        rect2.debug=true;
        rect1.velocityY=-3;
        rect2.velocityY=3;
}

function draw() {
        background("cyan");  
         //rect2.x=World.mouseX;
         //rect2.y=World.mouseY;
      if(rect2.x-rect1.x<rect1.width/2+rect2.width/2
         &&rect1.x-rect2.x<rect1.width/2+rect2.width/2) {
         rect2.velocityX=rect2.velocityX*(-1);
         rect1.velocityX=rect1.velocityX*(-1);
         rect1.shapeColor=("orange");
         rect2.shapeColor=("red");
}
      if(rect1.y-rect2.y<rect1.height/2+rect2.height/2
         &&rect2.y-rect1.y<rect2.height/2+rect1.height/2) {
         rect2.velocityY=rect2.velocityY*(-1);
         rect1.velocityY=rect1.velocityY*(-1);
         rect1.shapeColor=("orange");
         rect2.shapeColor=("red");
}
          else {
          rect1.shapeColor=("white");
          rect2.shapeColor=("black");
}

          drawSprites();
}