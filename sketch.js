var player, bananaImage,obstacleImage, obstacleGroup, background, ground, score, bananaGroup, obstacles, banana, gameOver;

var backImage, player_running;


var PLAY = 1;
var END = 0;
var gameState = PLAY;

var score = 0;
//stroke("Black");
textSize = (20);
//fill("Black");


function preload(){
  backImage = loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png", "Monkey_04.png", "Monkey_05.png","Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
  gameOverImage = loadImage("neon-game-over-sign-on-brick-wall-background-vector-25052663.jpg");
}

function setup() {
  createCanvas(500, 500);
  
 background1 = createSprite(0,0,400,400);
  background1.addImage("back",backImage);
  background1.velocityX = -5;
  
  ground = createSprite(0,395,400,10);
  ground.velocityX = -5; 
  ground.visible = false;
  
  player = createSprite(45,360,10,10);
  player.addAnimation("player",player_running);
  player.scale = 0.2;
  
  

bananaGroup = new Group();
obstaclesGroup = new Group();
}
function draw() {
  background(220);
  
  score = Math.round(frameCount/frameRate());
 text("Score: "+ score , 100, 50);
  
  if (gameState === PLAY){
  //Make the monkey jump when the space key is pressed
 if (keyDown("space")&& player.y >= 47) {
    player.velocityY = -6;
 }
 //resetting the ground
  if (ground.x < 0){
      ground.x = ground.width/2;
  }
    //Making the monkey eat the bananas
  if (player.isTouching(bananaGroup)) {
    bananaGroup.destroyEach();
  }
    
  //Add gravity
   player.velocityY = player.velocityY + 0.2;
    
    //make the monkey collide with the ground
  player.collide(ground);
    
  spawnBananas();
    spawnObstacles();
    
    
  }
  if (obstaclesGroup.isTouching(player)) {
 gameOver = createSprite(250,200,10,10);
 gameOver.addAnimation("gameOver",gameOverImage);
 gameOver.scale= 0.89;
    } 
  
      if(gameState===END){

  
        
    player.destroy();
    ostaclesGroup.destroyEach();
    bananaGroup.destroyEach();
    
    bananaGroup.visible= false;
   obstaclesGroup.visible = false;
  
    bananaGroup.setVelocityXEach(0,0);
    bananaGroup.setVelocityYEach(0,0);
    obstaclesGroup.setVelocityXEach(0,0);
  }

  
  if(background1.x<0){
  background1.x = background1.width/2;
}
  if(bananaGroup.isTouching(player)){
    score = score+2;
    bananaGroup.destroyEach();
    
    spawnBananas();
    spawnObstacles();
    
  }
  
  switch(score){
    case 10: player.scale = 0.12;
        break;
        case 20: player.scale = 0.14;
      break;
      case 30: player.scale = 0.16;
      break;
      case 40: player.scale = 0.18;
    default: break;
  }
  createEdgeSprites();
  if(obstaclesGroup.isTouching(player)){
    player.scale = 0.2;
  }
    drawSprites();
  
}

function spawnBananas(){
    if (frameCount%80===0) {
     banana = createSprite(200,200,20,20);
     banana.addImage("Banana",bananaImage);
     banana.scale = 0.09;
     
     banana.y = random(200,250);
     banana.x = random(390,400);                      
     
     banana.lifetime = 85;
    banana.velocityX = -5;
    bananaGroup.add(banana);
    }
  }
function spawnObstacles(){
  if (frameCount%300===0) {
       obstacles = createSprite(280,375,20,40);
     obstacles.addImage("obstacle",obstacleImage);
      obstacles.scale = 0.1;
      obstacles.velocityX = -6;
      obstaclesGroup.add(obstacles);
      
    }
}




