function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  fill(0);
  frameRate(500);
  let i = antall();
  fordeling[i]++;

  for (var j = 1; j < 10; j++) {
    //Verdier på x-aksen
    text(j, j * 30 + 65, 620);

    // Gjennomsnitt
    text("Hvor mange tilfeldig tall mellom 0 og 1 trengs før summen er større enn 1?");
    text("Antall forsøk: " + gjennomsnitt()[0], 100, 100);
    text("Gjennomsnitt av antall førsøk: " + gjennomsnitt()[1], 100, 120);

    //Tegn søyle
    rect(j * 30 + 60, 600 - fordeling[j]/5, 20, fordeling[j]/5);
  }
}

function antall() {
  let n = 0;
  let s = 0;

  while ( s < 1 ) {
    s += Math.random();
    n++;
  }
  return n;
}

function gjennomsnitt() {
  let sum = 0;
  let i = 1;
  let N = 0;

  for (let x of fordeling) {
    sum += x * i;
    i++;
    N += x;
  }

  return [N, sum / N - 1];
}

let fordeling =[0, 0, 0, 0, 0, 0, 0, 0, 0 ,0];