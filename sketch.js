
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var startingXposition,startingYposition

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	startBobPositionX=width/2
	startBobPositionY=height/4+500

	bobDiameter=40;

	bob1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	 bob2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	  bob3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
	   bob4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter); 
	   bob5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	//Create the Bodies Here.

	roofObject=new roof(width/2,height/4,width/7,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  roofObject.display();

  drawSprites();
 
}



