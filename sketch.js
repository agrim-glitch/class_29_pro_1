const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/back.jpg");
}

function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,2500,20);

    ground2 = new Ground(800,600,300,20);
    


    b1 = new Box(900,560,70,70)
    b2 = new Box1(800,560,70,70)
    b3 = new Box2(700,560,70,70)

    b4 = new Box2(850,500,70,70)
    b5 = new Box(750,500,70,70)
    b6 = new Box1(800,440,70,70)


    ground3 = new Ground(1400,400,300,20);

    p1 = new Box(1400,360,70,70)
    p2 = new Box1(1300,360,70,70)
    p3 = new Box2(1500,360,70,70)

    p4 = new Box1(1450,300,70,70)
    p5 = new Box2(1350,300,70,70)
    p6 = new Box(1400,240,70,70)

    

   
    bird = new Bird(200,500);

    
    slingshot = new SlingShot(bird.body,{x:200, y:450});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);


    text(mouseX + ' , '+ mouseY,40,50);
    strokeWeight(4);
   

    bird.display();
    ground.display();
    ground2.display();
    ground3.display();
    
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();


    p1.display();
    p2.display();
    p3.display();
    p4.display();
    p5.display();
    p6.display();
    
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){

    if(keyCode === 32){

       slingshot.attach(bird.body);

    }
}