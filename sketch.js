const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
Plane = new plane(400,690,800,10)
hammer = new Hammer(200,200)
stone = new Stone(480,600)  

sand1 = new Sand(110,13)
sand2 = new Sand(200,12)
sand3 = new Sand(690,10)
sand4 = new Sand(15,10)
sand5 = new Sand(240,11)
sand6 = new Sand(550,10)
sand7 = new Sand(650,17)
sand8 = new Sand(444,7)
sand9 = new Sand(350,17)
sand10 = new Sand(220,2)
sand11 = new Sand(302,20)
sand12 = new Sand(108,7)
sand13 = new Sand(202,8)
sand14 = new Sand(333,15)
sand15 = new Sand(170,11)
sand16 = new Sand(111,7)
}


function draw() {
  
  background("grey");
  Engine.update(engine)
//to update engine

Plane.display()
hammer.display()
stone.display()
sand1.display()
sand2.display()
sand3.display()
sand4.display()
sand5.display()
sand6.display()
sand7.display()
sand8.display()
sand9.display()
sand10.display()
sand11.display()
sand12.display()
sand13.display()
sand14.display()
sand15.display()
sand16.display()


}