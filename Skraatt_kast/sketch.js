// Partikkel i felt
// Tom Jarle Christiansen - CC BY SA - 2021
// "Kaster" et gitt antall partikler skrått mot høyre

class Partikkel {
  constructor(x, y, d, v_x, v_y) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.v_x = v_x;
    this.v_y = v_y
  }

  tegn() {
    this.v_y += g;
    this.x += this.v_x;
    this.y += this.v_y;
    circle(this.x, this.y, this.d);
  }
}

// Init
N = 10; // Antall partikler
let g = 0.02; // "Gravitasjon" nedover
let m = 2;

// Lager N partikler
let partikler = [];
for ( let i = 0; i < N; i++ ) {
  partikler.push(new Partikkel(100, 100, 10, Math.random() * 10, -2 * Math.random()));
}

function setup() {
  createCanvas(1000, 600);
  background(220);
}

function draw() {
  for (let p of partikler) {
    p.tegn();
  }
}