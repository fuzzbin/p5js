// Fjærkraft
// Tom Jarle Christiansen - CC BY SA - 2021
// Eksemplet er basert på koden laget av Daniel Shiffman
// i filmen: https://www.youtube.com/watch?v=Rr-5HiXquhw

function setup() {
  createCanvas(1000, 1000);
  // Lager partikler og fjærer
  p1 = new Partikkel(100, 100, 30, 1, 0, 0, 0, 0);
  p2 = new Partikkel(100, 200, 30, 1, 10, 0, 0, 0);
  p3 = new Partikkel(100, 400, 30, 1, 0, 0, 0, 0);
  f1 = new Fjær(0.01, 50, p1, p2);
  f2 = new Fjær(0.01, 50, p2, p3);
  f3 = new Fjær(0.01, 50, p1, p3);
}

// Oppdaterer alle partikler og fjærer (60fps tror jeg)
function draw() {
  background(220);
  p1.oppdater();
  p2.oppdater();
  p3.oppdater();
  f1.oppdater();
  f2.oppdater();
  f3.oppdater();
}

// Liste med partiklene
let partikkler = [];