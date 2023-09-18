function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  // Dibuja el centro de la flor
  fill("yellow");
  noStroke();
  ellipse(200, 200, 100, 100);

  // Dibuja los pétalos de la flor
  fill("yellow");
  beginShape();
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i;
    let x = 200 + cos(angle) * 80;
    let y = 200 + sin(angle) * 80;
    vertex(x, y);
  }
  endShape(CLOSE);
}