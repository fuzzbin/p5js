// Conways Game of life
// Tom Jarle Christiansen - CC BY SA - 2021
// Eksemplet er basert på reglene her: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

let generasjoner = [];

let s = 200;
let c = 1000;

function setup() {
  frameRate(5);
  createCanvas(c, c);

  // Lager et tomt brett
  let brett = [];
  for (let i = 0; i < s; i++) {
    let l = [];
    for (let j = 0; j < s; j++) {
      l.push(0);
    }
    brett.push(l);
  }

  // Starttilstand - Startbrettet

  // En "flyer"
  generasjoner.push(brett);
  generasjoner[0][1][2] = 1;
  generasjoner[0][2][3] = 1;
  generasjoner[0][3][1] = 1;
  generasjoner[0][3][2] = 1;
  generasjoner[0][3][3] = 1;

  // En "oscilator"
  generasjoner[0][5][11] = 1;
  generasjoner[0][5][12] = 1;
  generasjoner[0][5][13] = 1;

  tegnBrett(generasjoner[0]);

}

function draw() {
  background(220);
  tegnBrett(generasjoner[generasjoner.length - 1]); // Tegner siste generasjon av brettet
  generasjoner.push(oppdaterBrett(generasjoner[generasjoner.length - 1])); // Lager neste generasjon av brettet
}

// Tegner brettet på skjermen med data fra siste generasjon
function tegnBrett(b) {
  let bredde = c / s;
  let l_nr = 0;
  let f_nr = 0;
  for (let linje of b) {
    for (let felt of linje) {
      if (felt == 0) {
        fill(0, 0, 0);
        square(f_nr * 10, l_nr * 10, 9);
      } else {
        fill(255, 0, 0);
        square(f_nr * 10, l_nr * 10, 9);
      }
      f_nr++;
    }
    f_nr = 0;
    l_nr++;
  }
}

// Lager en ny generasjon av brettet
function oppdaterBrett(b) {
  let brett = [];
  // Lager et nytt tomt brett som utgangspunkt for neste generasjon
  for (let i = 0; i < s; i++) {
    let l = [];
    for (let j = 0; j < s; j++) {
      l.push(0);
    }
    brett.push(l);
  }
  let n = 0;
  // Traverserer alle celler og sjekker tilstanden i nabocellene
  for(let i = 1; i < b.length - 1; i++) {
    for (let j = 1; j < b.length - 1; j++) {
      n = b[i-1][j-1] + b[i-1][j] + b[i-1][j+1];
      n += b[i][j-1] + b[i][j+1];
      n += b[i+1][j-1] + b[i+1][j] + b[i+1][j+1];
      
      // Bruker reglene på aktuell celle
      if (n < 2 && n > 3) {
        brett[i][j] = 0;
      }
      if ( n == 3 ) {
        brett[i][j] = 1;
      }
      if (b[i][j] == 1 && n == 2) {
        brett[i][j] = 1;
      }
      n = 0;
    }
  }
  return brett;
}