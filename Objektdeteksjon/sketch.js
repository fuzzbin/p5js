// Creative Commons - BY SA - 2021
// Tom Jarle Christiansen
// Koden er kopiert/basert på eksempel av Daniel Shiffman: https://thecodingtrain.com/learning/ml5/
// Bibliotek: https://ml5js.org/
// Datasett: https://cocodataset.org/


let detector; // Maskinlæringsmodellen
let detections = []; // Detekterte objekter
let video; // Webkameraet

function preload() {
  detector = ml5.objectDetector("cocossd"); // Laster inn modellen
}

function gotDetections(error, results) {
  if (error) {
    console.log(error)
  } else {
    detections = results; // Detekteringen legges inn i global variabel
  }
}

function setup() {
  createCanvas(800, 600);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  frameRate(20);
  image(video, 0, 0); // Nytt bilde fra webkamera
  detector.detect(video, gotDetections); // Detekterer objekter i bildet.
  for (let r of detections) { // Tegner grønne rammer og skriver navn på objekt
    noFill();
    stroke(0, 255, 0);
    strokeWeight(4);
    rect(r.x, r.y, r.width, r.height);
    fill(255);
    textSize(24);
    let t = r.label +  " " + r.confidence.toFixed(2) * 100 + "%";
    text(t, r.x + 10, r.y + 20)
  }
}