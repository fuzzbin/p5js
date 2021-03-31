

class Pendel {
    constructor(vinkel, masse, lengde) {
        this.lengde = lengde;
        this.vinkel = vinkel;
        this.vf = 0;
        this.va = 0;
        this.masse = masse;
        this.lengde = lengde;
        // this.p = createVector(this.lengde * Math.sin(this.vinkel) + 300, this.lengde * Math.cos(this.vinkel));
    }
    oppdater() {
        this.va = 2 / this.lengde * Math.cos(this.vinkel + Math.PI/2);
        this.vf += this.va;
        this.vinkel += this.vf;
        this.p = createVector(this.lengde * Math.sin(this.vinkel) + 400, this.lengde * Math.cos(this.vinkel));
        circle(this.p.x, this.p.y, 20);
        line(this.p.x, this.p.y, 400, 0);
    }
}