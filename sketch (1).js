const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


var ground;
var wallL,wallR;
var rope;
var link;
var jointPoint;
var stones=[];
var stone;
var zombie;
var invisil,invisir;
var bImg,zImg,wImg,sImg,aImg;
var button,axe;
function preload(){
bImg=loadImage("./assets/background.png");
z1Img=loadImage("./assets/zombie1.png");
z2Img=loadImage("./assets/zombie2.png");
z3Img=loadImage("./assets/zombie3.png");
z4Img=loadImage("./assets/zombie4.png");
wImg=loadImage("./assets/wood.png");
sImg=loadImage("./assets/stone.png");
axe=loadImage("assets/axe.png")

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

   
  ground=new Base(width/2,height-10,width,10);
  //wallL=new Base(150,height-150,300,200);
  //wallR=new Base(width-150,height-150,300,200);
  rope=new Bridge(22,{x:50,y:210});
  
  jointPoint=new Base(width-100,210,10,10);
  Matter.Composite.add(rope.body,jointPoint);
  link=new Link(rope,jointPoint);

  zombie=createSprite(10,height-80,10,10);
  //zombie.addAnimation("lefttoright",z3Img,z4Img,z3Img);
  zombie.addAnimation("righttoleft",z1Img,z2Img,z1Img);
  zombie.scale=0.1;
  
  button = createButton(axe);
  button.position(width - 200, height / 2 - 50);
  button.class("breakbutton");
  button.mousePressed(handleButtonPress);
  

  invisil=createSprite(0,height/2,5,height);
  invisil.visible=false;
  invisir=createSprite(width,height/2,5,height);
  invisir.visible=false;   
  zombie.velocityX=2;
  for(var i=0;i<8;i++){
    var x=random(width/2-200,width/2+300);
    var y=random(-10,100);
    stone=new Stone(x,y,70,70);
    stones.push(stone);
  }
  

}

function draw() {
  background(bImg);
  ground.display();
  //wallL.display();
  //wallR.display();
  jointPoint.display();
  rope.show();
  drawSprites();
  zombie.bounceOff(invisil);
  zombie.bounceOff(invisir);
  createEdgeSprites();

  Engine.update(engine);
 
 for(var stone of stones){
   stone.draw();
 }
}

function handleButtonPress(){
  link.detach();
  link=null;

  setTimeout(()=>{
    rope.break();
  },5000);
}