var bg1
var ease, med, dif, levels;

var nemo, nemoimg;
var cup, cupimg;
var screen, screenimg;
var boundary1, boundary2, boundary3, boundary4;
var cb1, cb2, cb3, cb4, cb5;
var back;
var ease1,ease2,ease3,ease4,ease5;
var flag = "start"
function preload(){
    bg1 = loadImage("back.png");
    level = loadAnimation("easy.png");
    level1 = loadAnimation("medium.png");
    level2 = loadAnimation("difficult.png");

    screenimg = loadImage("step14.jpg");
    cupimg = loadImage("cup.png");
    nemoimg = loadImage("nemo.png");
    ease1 = loadImage("1.png");
    ease2 = loadImage("2.png");
    ease3 = loadImage("3.png");
    ease4 = loadImage("4.png");
    ease5 = loadImage("5.png");
}

function setup(){
    createCanvas(windowWidth-10, windowHeight-10);
   ease = createSprite(300, 500, 50 ,50);
   ease.addAnimation("easy.png", level)
   med = createSprite(650, 500, 50 ,50);
   med.addAnimation("medium.png", level1)
   dif = createSprite(1000, 500, 50 ,50);
   dif.addAnimation("difficult.png", level2)

   //levels for easy
   e1 = createSprite(windowWidth/4,300, 50, 50);
   e1.addImage(ease1);
   e1.visible=false;
   e2 = createSprite(windowWidth/4+200,300, 50, 50);
   e2.addImage(ease2);
   e2.visible=false;
   e3 = createSprite(windowWidth/4+400,300, 50, 50);
   e3.addImage(ease3);
   e3.visible=false;
   e4 = createSprite(windowWidth/4+600,300, 50, 50);
   e4.addImage(ease4);
   e4.visible=false;
   e5 = createSprite(windowWidth/4+800,300, 50, 50);
   e5.addImage(ease5);
   e5.visible=false;

   screen = createSprite(701, 380, 50, 50);
   screen.addImage(screenimg);
   screen.scale = 0.35;
   screen.visible = false
   nemo = createSprite(450 ,580, 20, 20);//main object
   nemo.addImage(nemoimg);
   nemo.scale = 0.033;
   nemo.visible=false
   nemo.shapeColor = "black";
   cup = createSprite(975,440,50,60);
   cup.addImage(cupimg);
   cup.scale = 0.298;
   cup.visible = false
   boundary1 = createSprite(701, 125, 674, 10);
   boundary1.shapeColor = "black"
   boundary1.visible=false
   boundary2 = createSprite(369, 380, 10, 505);
   boundary2.shapeColor = "black";
    boundary2.visible = false
   boundary3 = createSprite(701, 628, 674, 10);
   boundary3.shapeColor = "black"
   boundary3.visible = false
   boundary4 = createSprite(1033, 380, 10, 505);
   boundary4.shapeColor = "black"
   boundary4.visible = false
   cb1 = createSprite(930, 310, 10, 150)
   cb1.shapeColor= "black"
   cb1.visible = false
   cb2 = createSprite(750, 570, 10, 120)
   cb2.shapeColor= "black"
   cb2.visible = false
   cb3 = createSprite(730, 510, 320, 10)
   cb3.shapeColor= "black"
   cb3.visible = false
   cb4 = createSprite(450, 310, 10, 180)
   cb4.shapeColor= "black"
   cb4.visible = false
   cb5 = createSprite(610, 260, 320, 10)
   cb5.shapeColor= "black"
   cb5.visible = false

}

function draw(){
   background(bg1);
   if(flag === "start"){
    fill("black")
    textSize(60)
    stroke(0 , 255, 255)
    strokeWeight(10)
    text("WELCOME! To The Maze Runner Game", windowWidth/2-550, 200 )
    textSize(40)
    fill("white")
    stroke(0)
    strokeWeight(10)
    text("Choose Difficulty", windowWidth/2-140, windowHeight/2 ) 
   }
   if(mousePressedOver(ease) && flag==="start"){
       flag="easy";
       med.visible = false;
       dif.visible = false;
       ease.visible = false;
       e1.visible=true;
       e2.visible=true;
       e3.visible=true;
       e4.visible=true;
       e5.visible=true;
       console.log("flag"+ flag);
   }
   if(mousePressedOver(e1) && flag ==="easy"){
    console.log("error2")
    e1.visible=false;
    e2.visible=false;
    e3.visible=false;
    e4.visible=false;
    e5.visible=false;
    screen.visible = true
    nemo.visible=true
    cup.visible = true
    boundary1.visible=true
    boundary2.visible=true
    boundary3.visible=true
    boundary4.visible=true   
    cb1.visible = true
    cb2.visible = true
    cb3.visible = true
    cb4.visible = true
    cb5.visible = true
    
    console.log("error1")
    }
    if (nemo.isTouching(cb1)||nemo.isTouching(cb2)||nemo.isTouching(cb3)||nemo.isTouching(cb4)||nemo.isTouching(cb5)||nemo.isTouching(boundary1)||nemo.isTouching(boundary2)||nemo.isTouching(boundary3)||nemo.isTouching(boundary4) && flag==="easy") {
        nemo.velocityX=0;
        nemo.velocityY=0;
        nemo.x = 450;
         nemo.y = 580;
       }
       if (keyDown("right") && flag === "easy") {
        nemo.x = nemo.x + 4;
      }
      
      if (keyDown("left") && flag === "easy") {
      nemo.x = nemo.x -4 ;
      }
      
      if (keyDown("up") && flag === "easy") {
      nemo.y = nemo.y - 4;
      }
      if (keyDown("down") && flag === "easy") {
      nemo.y = nemo.y + 4;
      }

      if (nemo.isTouching(cup) && flag === "easy") {
        nemo.velocityX=0;
        nemo.velocityY=0;
      nemo.scale = 0.020;
        textSize(50);
        fill("black");
        textFont(" italic small-caps bold 12px/30px Georgia, serif");
        text("win!!",  701, 440);
        nemo.x =975;
        nemo.y = 500;
    }
   drawSprites();
   textSize(60)
   fill("white")
   stroke(0)
   strokeWeight(10)
   text("MAZE RUNNER", windowWidth/2-250, 100 )
   
}