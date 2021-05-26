const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,20,20);
    box2 = new Box(240,100,40,20);
    box3 = new Box(250,300,20,50);
    ground = new Ground(200,390,400,20);
}

function draw(){
    background("yellow");
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    ground.display();
   
}