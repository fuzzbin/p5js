

class Rakett {
    constructor(m, x, y) {
        this.p = createVector(x, y);
        this.v = createVector(0, 0);
        this.a = createVector(0, g);
        this.m = m;
    }
  
    tegn() {
        square(this.p.x, this.p.y, 30);
    }

    oppdater(a) {
        this.v += this.a;
        this.p += this.v;
        square(this.p.x, this.p.y, 30);
    }
  }