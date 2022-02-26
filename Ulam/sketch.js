
// Funksjoner
function erPrimtall(n) {
  if (n == 1) {
    return false;
  }
  for (let i = 2; i <= sqrt(n); i++) {
    if ( n % i == 0 || n % 2 == 0 ) {
      return false;
    }
  }
  return true;
}

// Globale variabler
let bredde = 800;
let hoyde = 800;
let x_0 = bredde / 2;
let y_0 = hoyde / 2;
let x = 0;
let y = 0;

let lengde = 1; // mal
let skritt = 0; // Skritt på en side
let n_tot = 2; 
let retning = 0;

let o = 1;

function setup() {
  // frameRate(2);
  createCanvas(bredde, hoyde);
  background(220);
  circle((x_0 + x * o), (y_0 + y * o), 1);
  x++;
  circle((x_0 + x * o), (y_0 + y * o), 1);
}

function draw() {
  n_tot++;
  skritt++;

  if( skritt == lengde ) {    
    skritt = 0;
    retning++;
    if ( retning > 3 ) {
      retning = 0;
    }
  if ( retning % 2 == 0 ) {
    lengde++;
  }
  }

  switch(retning) {
    case 0:
      x++;
      break;
    case 1:
      y--;
      break;
    case 2:
      x--;
      break;
    case 3:
      y++;
      break;
  }
  if (erPrimtall(n_tot)) {
    circle((x_0 + x * o), (y_0 + y * o), 1);
    console.log(n_tot);
  }
}






