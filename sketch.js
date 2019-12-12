function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  fill(0, 12);
  rect(0, 0, width, height);
  colorMode(HSB, 255);
  let c = color(150, (height-mouseY)*255/height, 255);
  fill(c);
  noStroke();
  var pointerSize = (displayWidth-mouseX/1.5)/10;
  ellipse(mouseX, mouseY, pointerSize, pointerSize);
}