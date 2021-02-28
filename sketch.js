var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2

	
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	
	
	this.rope=Constraint.create(options);
	World.add(world,this.rope);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  var options={
	bodyA:body1,
	bodyB:body2,
	pointB:{x:this . offsetX,y:this.offsetY}

}

  function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body,{x:85,y:-85});
	}
}
rope.display;
strokeWeight(2);
line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

  
  drawSprites();
 
}




