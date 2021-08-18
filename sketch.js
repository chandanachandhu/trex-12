var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;



var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;


  //var rand = Math.round(random(1,100));
  //console.log(rand);
  
  
}

function draw() {
  background(180);
  
  
  //console.log(frameCount);
  if(keyDown("space") && trex.y>=100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();

 
  
  drawSprites();
}

function spawnClouds() {

  if(frameCount % 60 === 0 )
{
  cloud = createSprite(600,100,40,10);
  cloud.velocityX = -3;

  cloud.y  = Math.round(random(10,60))

  cloud.addImage(cloudImage);
  cloud.scale = 0.5;


  console.log(cloud.depth);

  cloud.depth = trex.depth;
  trex.depth = trex.depth + 1;



  
}
}

