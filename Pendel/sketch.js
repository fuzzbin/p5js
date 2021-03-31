function setup() {
  createCanvas(800, 800);
  for (let i=0; i < 10; i++) {
    pendler.push(new Pendel((30/360)*2*Math.PI, 10, 400 + i*10));
  }
}

function draw() {
  background(220);
  for( let p of pendler) {
    p.oppdater();
  }
}

let pendler = [];
