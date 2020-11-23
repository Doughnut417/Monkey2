
var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup,bananaGroup,invisibleGround;
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
createCanvas(400,400);
monkey = createSprite(80,350,20,20);
monkey.addAnimation("running", monkey_running);
monkey.scale = 0.1;
ground = createSprite(400,350,900,10);
ground.velocityX = -4;
ground.x = ground.width/2;
console.log(ground.x)

  
bananaGroup = new Group();
obstacleGroup = new Group();

}


function draw() {
background("red");
if(keyDown("space")){
monkey.velocityY = -3;
} 
monkey.velocityY = monkey.velocityY + 0.08;

  if(ground.x<0){
ground.x = ground.width/2
}
monkey.collide(ground) 
  
food();
obstacle();

drawSprites();
}
 

function food(){
if (frameCount % 80 === 0) {
    banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,190));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 300;
  
    bananaGroup.add(banana);
}
}
 
function obstacle(){
 if(frameCount % 80 === 0) {
   var obstacle = createSprite(600,330,40,10);
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.1;
   obstacle.velocityX = -3
   obstacle.lifetime = 300;
   
   obstacleGroup.add(obstacle);
 }
  
}





