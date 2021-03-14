// Fall med luftmotstand
// Tom Jarle Christiansen

class Ball {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.d = d;
  }

  tegn() {
    circle(this.x, this.y, this.d);
  }
}

// Init
let b1 = new Ball(100, 100, 10);

let g = 0.02;
let v = -1;
let x = 100;
let y = 100;
let m = 2;

function setup() {
  createCanvas(1000, 600);
  background(220);
}

function draw() {
  v += g;
  b1.x += 1;
  b1.y += v;
  b1.tegn();
  if(mouseButton) {
    g = -0.01;
  }
}