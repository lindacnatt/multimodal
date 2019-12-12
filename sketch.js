let pg;

function setup() {
  createCanvas(displayWidth, displayHeight);
  pg = createGraphics(400, 250);
}

function draw() {
  fill(0, 12);
  rect(0, 0, width, height);
  colorMode(HSB, 255);
  let c = color(150, (height-mouseY)*255/height, 255);
  fill(c);
  noStroke();
  ellipse(mouseX, mouseY, mouseX/log(mouseX),mouseX/log(mouseX));

  pg.background(51);
  pg.noFill();
  pg.stroke(255);
  pg.ellipse(mouseX - 150, mouseY - 75, 60, 60);
}