var wall, thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(28,83);
  bullet = createSprite(50,200,100,10);
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "brown";
  
}

function draw() {
  background ("black");
  
  if(hascollided(bullet,wall)){
    bullet . velocityX =0;
    var damage = 0.5*weight*speed*speed/(thickness *thickness *thickness);
    if(damage>10){
      wall.shapeColor = "Red"
    }
    if(damage<10){
      wall.shapeColor = "Green"
    }
  }
  drawSprites();
}
function hascollided(lbullet,lwall){
bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;
if(bulletRightEdge >= wallLeftEdge){
 return true
} else{
return false
}


}