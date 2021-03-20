class Partikkel {
    // Grunnegenskapene til partiklene
    constructor(x, y, d, m, vx, vy, ax, ay) {
        this.p = createVector(x, y);
        this.v = createVector(vx, vy);
        this.a = createVector(ax, ay);
        this.d = d;
        this.m = m;
    }

    // "Dytter på partiklene" ved å endre akselerasjonen (a = F/m)
    skyv(kraft) {
        let f = kraft.copy();
        let da = p5.Vector.div(f, this.m);
        this.a.add(da);
    }

    // Oppdaterer egenskapene til partikkelen og tegner den i ny posisjon.
    oppdater() {
        this.v.mult(0.99); // Litt demping. :-)
        this.v.add(this.a);
        this.p.add(this.v);
        circle(this.p.x, this.p.y, this.d);
        this.a.mult(0);
    }
}

class Fjær {
    // Grunnegenskapene til fjæra
    constructor(k, lengde, a, b) {
        this.k = k;
        this.lengde = lengde;
        this.a = a;
        this.b = b;
    }

    // Beregner Hookes lov (F = -kx) slik at fjære drar
    // partikler i begge ender med riktig kraft. Tilkoblede partiklers
    // akselerasjon blir oppdatert.
    oppdater() {
        let kraft = p5.Vector.sub(this.b.p, this.a.p); // Lager enhetsvektor
        let x = kraft.mag() - this.lengde; // Differansen mellom fjæras hvilelengde og faktiske lengde.
        kraft.normalize();
        kraft.mult(this.k * x); // Hookes lov.
        this.a.skyv(kraft);
        kraft.mult(-1); // Endepunktene utsettes for motsatt rettet og like stor kraft. (N3)
        this.b.skyv(kraft);
        // Tegner fjæra
        stroke(255, 0, 0);
        line(this.a.p.x, this.a.p.y, this.b.p.x, this.b.p.y);
    }
}