
function setup() {
  createCanvas(400, 400);
  r1 = new Rakett(100, 200, 10);
  r1.tegn();
}

function draw() {
  background(220);
  r1.oppdater(createVector(0, g));
  r1.tegn();
}

function keyPressed() {
  g += -0.2;
  
}

function keyReleased() {
  g -= -0.2;
  }

let g = 0.1;
