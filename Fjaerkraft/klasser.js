class Partikkel {
    constructor(x, y, d, m, vx, vy, ax, ay) {
        this.p = createVector(x, y);
        this.v = createVector(vx, vy);
        this.a = createVector(ax, ay);
        this.d = d;
        this.m = m;
    }

    skyv(kraft) {
        let f = kraft.copy();
        let da = p5.Vector.div(f, this.m);
        this.a.add(da);
    }

    oppdater() {
        this.v.mult(0.99);
        this.v.add(this.a);
        this.p.add(this.v);
        circle(this.p.x, this.p.y, this.d);
        this.a.mult(0);
    }
}

class Fjær {
    constructor(k, lengde, a, b) {
        this.k = k;
        this.lengde = lengde;
        this.a = a;
        this.b = b;
    }
    // F = -kx
    oppdater() {
        let kraft = p5.Vector.sub(this.b.p, this.a.p); // Lager enhetsvektor
        let x = kraft.mag() - this.lengde;
        kraft.normalize();
        kraft.mult(this.k * x);
        this.a.skyv(kraft);
        kraft.mult(-1);
        this.b.skyv(kraft);
        stroke(255, 0, 0);
        line(this.a.p.x, this.a.p.y, this.b.p.x, this.b.p.y);
    }
}