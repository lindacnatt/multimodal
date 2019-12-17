let lastX = [];
let lastY = [];

function avg(t) {
  let sum = 0;
  for (let item of t) {
    sum += item;
  }
  return sum / t.length;
}

function setup() {
  noCursor()

  createCanvas(displayWidth, displayHeight);
}

function draw() {
  fullscreen(true);
  fill(0, 12);
  rect(0, 0, width, height);
  colorMode(HSB, 255);
  let c = color(150, (height - mouseY * 0.6) * 255 / height, 175);
  fill(c);
  noStroke();
  lastX.push(mouseX);
  lastY.push(mouseY);
  var pointerSize = (displayWidth - mouseX / 1.5) / 10;
  ellipse(avg(lastX), avg(lastY), pointerSize, pointerSize);
  lastX = lastX.slice(lastX.length - 30);
  lastY = lastY.slice(lastY.length - 30);
  let toneArray = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
  grid = function () {
    fill(255);
    let tone = 0;
    let colorValue = 0;
    for (var x = 0; x < windowWidth; x += windowWidth / 24) {
      textSize(26);
      text(toneArray[tone], x + 10, windowHeight);
      tone += 1;
      if (tone == 12) {
        tone = 0
      }
      colorValue = colorValue + 20;
      stroke(colorValue, 100, 100);
      strokeWeight(1);
      line(x, 0, x, windowHeight);
      if (x == windowWidth / 2) {
        colorValue = 0;
      }
    };
  }
  grid()
}