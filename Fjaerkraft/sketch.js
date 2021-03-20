// Fjærkraft
// Tom Jarle Christiansen - CC BY SA - 2021
// Eksemplet er basert på koden i filmen: https://www.youtube.com/watch?v=Rr-5HiXquhw

function setup() {
  createCanvas(1000, 1000);
  p1 = new Partikkel(100, 0, 50, 0, 0, 1, 0, 0.1);
  p2 = new Partikkel(100, 200, 50, 0, 0, 1, 0, 0.1);
  f1 = new Fjær(1, 100, p1, p2);
  g = -0.1;
}

function draw() {
  background(220);
  p1.oppdater();
  p2.oppdater();
  f1.oppdater();
}

let p1, p2, f1, g;