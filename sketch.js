var fixedrect,movingrect;

function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(200, 200, 80, 80);
  fixedrect.shapeColor="green";

  movingrect=createSprite(400,200,80,30);
  movingrect.shapeColor="green";

  rect1=createSprite(100,400,30,30);
  rect1.shapeColor="blue";
  rect1.velocityX=4;
  
  rect2=createSprite(600,400,30,30);
  rect2.shapeColor="red";
  rect2.velocityX=-4;
  
}

function draw() {
  background(0);
  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2&&fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    &&movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2&&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){

    fixedrect.shapeColor="red";
    movingrect.shapeColor="red";

  }

  else{

     fixedrect.shapeColor="green";
     movingrect.shapeColor="green";

  }
  
  if(rect1.x-rect2.x<rect2.width/2+rect1.width/2&&rect2.x-rect1.x<rect2.width/2+rect1.width/2){

     rect1.velocityX=rect1.velocityX*-1;

     rect2.velocityX=rect2.velocityX*-1;


  }


  drawSprites();
}