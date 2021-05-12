// Langtons ant - https://en.wikipedia.org/wiki/Langton%27s_ant
// CC BY SA - 2021 - Tom Jarle Christiansen


// Klasser
class Piksel {
  constructor (x, y) {
    this.x = x;
    this.y = y;
    this.aktiv = false;
  }

  tegn() {
    if ( this.aktiv ) {
      fill(255, 0, 0);
    } else {
      fill(0, 0, 0)
    }
    square(this.x * 10 + 100, this.y * 10 + 100, 8);
  }
}

// Globale variabler
let ant = {
  x: 40,
  y: 40,
  retning: "venstre"
};

const piksler = [];

// Størrelse på brettet
const bredde = 80;
const lengde = 80; 

// Funksjoner

function setup() {
  frameRate(200);
  createCanvas(1000, 1000);
  background(220);
  lagBrett(bredde, lengde);
  piksler[bredde/2][bredde/2].aktiv = true;
  piksler[bredde/2][bredde/2].tegn();
}

function draw() {
  // background(220);
  neste(ant);
}

function lagBrett(lengde, bredde) {
  for ( let i = 0; i < lengde; i++ ) {
    const linje = [];
    for ( let j = 0; j < bredde; j++) {
      linje.push(new Piksel(j, i));
      linje[linje.length - 1].tegn();
    }
    piksler.push(linje);
  }
}

// Funksjon som beregner neste "trekk"
function neste(a) {

  if ( !piksler[a.x][a.y].aktiv ) {
      switch (a.retning) {
        case "opp":
          ant.retning = "venstre"; 
          ant.x = ant.x - 1;  
          break;
        case "høyre":
          ant.retning = "opp"; 
          ant.y = ant.y - 1;  
          break;
        case "ned":
          ant.retning = "høyre"; 
          ant.x = ant.x + 1;  
          break;
        case "venstre":
          ant.retning = "ned"; 
          ant.y = ant.y + 1;  
          break;
        default:
          break;
      }
    } else {
      switch (a.retning) {
        case "opp":
          ant.retning = "høyre"; 
          ant.x = ant.x + 1;  
          break;
        case "høyre":
          ant.retning = "ned"; 
          ant.y = ant.y + 1;  
          break;
        case "ned":
          ant.retning = "venstre"; 
          ant.x = ant.x - 1;  
          break;
        case "venstre":
          ant.retning = "opp"; 
          ant.y = ant.y - 1;  
          break;
        default:
          break;
    }
    }
  piksler[a.x][a.y].aktiv = !piksler[a.x][a.y].aktiv;
  piksler[a.x][a.y].tegn();
}