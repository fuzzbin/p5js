class Partikkel {
    constructor(x, y, d, m, vx, vy, ax, ay) {
        this.p = createVector(x, y);
        this.v = createVector(vx, vy);
        this.a = createVector(ax, ay);
        this.d = d;
        this.m = m;
    }

    skyv(kraft) {
        let F = kraft.copy();
        F.div(this.m);
        this.a.add(F);
    }

    oppdater() {
        this.v.add(this.a);
        this.p.add(this.v);
        circle(this.p.x, this.p.y, this.d);
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
        console.log(this.b);
        let kraft =   p5.Vector.sub(this.b - this.a);
        let x = kraft.mag() - this.lengde();
        kraft.normalize();
        kraft(-1 * this.k * x);
        this.a.skyv(kraft);
        kraft.mult(-1);
        this.b.skyv(kraft);
        // F = m * a
        ret
    }
}