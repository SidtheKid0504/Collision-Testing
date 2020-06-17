var moved, fixed;

function setup() {
  createCanvas(1200,800);
  moved = createSprite(200, 200, 50, 50);
  moved.shapeColor = "green";
  moved.debug = true;

  fixed = createSprite(600, 400, 35, 80);
  fixed.shapeColor = "green";
  fixed.debug = true;
}

function draw() {
  background(0,0,0);  
  drawSprites();

  moved.x = mouseX;
  moved.y = mouseY;

  checkCollision();

}

function checkCollision() {
  console.log(fixed.y - moved.y);
  console.log(fixed.height/2 + moved.height/2);

  if (moved.x - fixed.x <= (fixed.width/2 + moved.width/2) + 0.5 && 
  fixed.x - moved.x <= (fixed.width/2 + moved.width/2) + 0.5 &&
  moved.y - fixed.y <= (fixed.height/2 + moved.height/2) &&
  fixed.y - moved.y <= (fixed.height/2 + moved.height/2)) {
    moved.shapeColor = "red";
    fixed.shapeColor = "red";
  } else {
    moved.shapeColor = "green";
    fixed.shapeColor = "green";
  }
}