var player, bananaImage,obstacleImage, obstacleGroup, background, ground, score;

var backImage, player_running;

var score = 0;

function preload(){
  backImage = loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png", "Monkey_04.png", "Monkey_05.png","Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
}

function setup() {
  createCanvas(500, 500);
  
 background = createSprite(0,0,400,400);
  background.addImage("back",backImage);
  background.velocityX = -5;
  
  ground = createSprite(0,395,400,10);
  ground.velocityX = -5; 
  ground.visible = false;
  
  player = createSprite(20,360,10,10);
  player = addAnimation("player",player_running);
  player.scale = 0.5;



}
function draw() {
  background(220);
  
  if(background.x<0){
  background.x = background.width/2;
}
  if(bananaGroup.isTouching(player)){
    score = score+2;
    bananaGroup.destroyEach();
    
    
  }
  if(obstacleGroup.isTouching(player)){
    player.scale = 0.5;
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
}
stroke("white");
textSize(20);
fill("white");
text("Score: "+score,500,50);