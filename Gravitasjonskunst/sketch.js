// Gravitasjonskunst
// CC - BY SA - Tom Jarle Christiansen 2022
function setup() {
  createCanvas(400, 400);

  // Tilfeldige initialbetingelser - masse, diameter, x-pos, y-pos, fargekode
  for ( let i = 0; i < 50; i++) {
    let m = Math.random() * 10000; //
    let d = Math.random() * 10 + 4;
    let x = Math.random() * 400;
    let y = Math.random() * 400;

    let r = Math.ceil(Math.random() * 255);
    let g = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);
    let c = color(r,g,b);

    l.push(new Partikkel(i, m, d, x, y, c));
  }
}

function draw() {
  // background(220);
  for ( let p of l ) {
    p.tegn();
    p.oppdater();
  }
}

let l = [];

class Partikkel {
  constructor(id,m, d, x, y, c) {
    this.id = id;
    this.m = m;
    this.d = d;
    this.c = c;
    this.posisjon = createVector(x, y);
    this.hastighet = createVector(0, 0);
    this.akselerasjon = createVector(0, 0);
  }

  tegn() {
    fill(this.c);
    noStroke();
    circle(this.posisjon.x, this.posisjon.y, this.d);
  }

  oppdater() {
    for ( let p of l ) {
      if ( this.id != p.id ) {
        let r = createVector(p.posisjon.x - this.posisjon.x, p.posisjon.y - this.posisjon.y);
        let dist = mag(r);
        r.normalize()
        let f = r.add(this.m / (dist * dist));
        this.akselerasjon = f.div(this.m);
        this.hastighet.add(this.akselerasjon);
        this.posisjon.add(this.hastighet);
      } 
    }
  }
}
