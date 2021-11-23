const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var building,buildingImg,building2Img,building3Img;
var ground;
var plane,Img,gameState = "play";
var buildingGroup,bGround,bGroundImg;

function preload(){
  Img = loadImage("plane.png");
  buildingImg = loadImage("art.png");
  building2Img = loadImage("empire state.png");
  building3Img = loadImage("green2.png");
  bGroundImg = loadImage("bg.png");
}

function setup() {
  createCanvas(800,390);

  engine = Engine.create();
	world = engine.world;

  ground = createSprite(0,380,1600,30);

  //bGround = createSprite(700,200);
  //bGround.addImage("background",bGroundImg);
  //bGround.x = bGround.width/2;
  //bGround.velocityX = -5;
  //bGround.scale = 1;

  plane  = createSprite(50,50,50,25);
  plane.addImage(Img);
  plane.scale = 0.3;
  //plane.debug = true;
  plane.setCollider("rectangle",0,0,220,50);

  plane.velocityY = 15;
  
  buildingGroup = new Group();

  Engine.run(engine);
}

function draw() {
  //background(255,255,255);
  background(0);    
  plane.collide(ground);
  
  if(gameState === "play"){
    text("Don't touch the buildings! (Use arrow keys to move up and down)",100,50);
    text("Note: There is a limit till where you can fly, if you touch the limit u will instantly start falling down again",100,70)
  if(keyDown("UP_ARROW")){
    plane.velocityY = -2.5;
  }
  if(keyDown("DOWN_ARROW")){
    plane.velocityY = 2.5;
  }
  spawnBuildings();
  }
  if(plane.y <= 65){
    plane.velocityY = 4;
  }


  
  
  if(buildingGroup.isTouching(plane)){ 
    buildingGroup.velocityX = 0;
    gameState = "end";
  }
  if(gameState === "end"){
    text("GAME OVER!",100,100);
    buildingGroup.velocityX = 0;
    gameEnd();
  }
  if(keyDown("R")){
    buildingGroup.x = 810;
    gameState = "play"
  }
  drawSprites();
}

function spawnBuildings() {
  if(frameCount % 110 === 0) {
    building = createSprite(800,350,40,40);
    building.velocityX = -2;
    var r = Math.round(random(1,3));
    if(r === 1){
      building.addImage(buildingImg);
      building.height = 80;
      building.y = 255;
      building.scale = 0.6;
      building.setCollider("rectangle",0,0,50,350);
  }else if(r === 2){
      building.setCollider("rectangle",0,0,100,900);
      building.addImage(building2Img);
      building.y = 230;
      building.height = 100;
      building.scale = 0.3;
  }else if(r === 3){
    building.setCollider("rectangle",0,0,150,450);
    building.addImage(building3Img);
    building.height = 140;
    building.y = 300  ;
    building.scale = 0.3;
   }
    //console.log(r);
    //building.debug = true;
    
    
    //assign scale and lifetime to the obstacle     
    building.lifetime = 400;
    
    //add each obstacle to the group
    buildingGroup.add(building);
  }
}

function gameEnd(){
  background("red")
  text("Press R to continue",500,100);
}