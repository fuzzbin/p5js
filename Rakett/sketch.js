
function setup() {
  createCanvas(400, 400);
  r1 = new Rakett(100, 200, 10);
  r1.tegn();
}

function draw() {
  background(220);
  r1.oppdater(createVector(ah, g));
  r1.tegn();
}

function keyPressed() {
  fill(255, 0, 0);
  if (keyCode == LEFT_ARROW) {
    ah = -0.2;
  } else if (keyCode == RIGHT_ARROW) {
    ah = 0.2 ;
  } else if (keyCode == UP_ARROW) {
    g += -0.2; 
  }
}

function keyReleased() {
  fill(0, 0, 255);
  g = 0.1 ;
  ah = 0;
  }

let g = 0.1; 
let ah = 0;
