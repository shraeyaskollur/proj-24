
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground = Bodies.rectangle(400,470,800,20, {isStatic:true});
World.add(world,ground)

paper = new Paper(85,410,20)
box1 = new Box(500,400,15,100)
box2 = new Box(700,400,15,100)
box3 = new Box(600,450,200,15)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("brown")
  paper.display()
  box1.display()
  box2.display()
  box3.display()
  rect(ground.position.x,ground.position.y,800,20)
drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-60})
  }
}



