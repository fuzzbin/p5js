// Partikkel i felt
// Tom Jarle Christiansen - CC BY SA - 2021
// "Kaster" et gitt antall partikler skrått mot høyre

class Partikkel {
  constructor(x, y, d, v_x, v_y) {
    this.p = createVector(x, y);
    this.v = createVector(v_x, v_y);
    this.a = createVector(0, 0.2); // Litt gravitasjon
    this.d = d;
    this.cr = parseInt(Math.random() * 255);
    this.cg = parseInt(Math.random() * 255);
    this.cb = parseInt(Math.random() * 255);
  }

  tegn() {
    this.v.add(this.a);
    this.p.add(this.v);
    fill(this.cr, this.cg, this.cb); // Fargelegger partikkelen
    noStroke();
    circle(this.p.x, this.p.y, this.d);
  }
}

// Init
N = 100; // Antall partikler
let m = 2;
let partikler = [];



function setup() {
  createCanvas(1000, 600);
  background(220);

  // Lager N partikler
  for ( let i = 0; i < N; i++ ) {
    partikler.push(new Partikkel(100, 100, 3, Math.random() * 10, -2 * Math.random()));
  }
}

function draw() {
  for (let p of partikler) {
    p.tegn();
  }
}
