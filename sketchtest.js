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
  fullscreen(true);
}

function draw() {
  fill(0, 12);
  rect(0, 0, width, height);
  colorMode(HSB, 255);
  let c = color(150, (height - mouseY) * 255 / height, 175);
  fill(c);
  noStroke();
  lastX.push(mouseX);
  lastY.push(mouseY);
  var pointerSize = (displayWidth - mouseX / 1.5) / 10;
  ellipse(avg(lastX), avg(lastY), pointerSize, pointerSize);
  lastX = lastX.slice(lastX.length - 30);
  lastY = lastY.slice(lastY.length - 30);
  let toneArray = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
  let colorArray = [0, 23, 49, 89,  113, 159, 199, 222, 251, 274, 299, 324]
  grid = function () {
    fill(255);
    colorMode(HSB, 360);
    let tone = 0;
    let colorValue = 0;
    for (var x = 0; x < windowWidth; x += windowWidth / 24) {
      stroke(color(colorArray[colorValue], 200, 200));
      strokeWeight(1);
      line(x, 0, x, windowHeight);
      if (colorValue == 12) {
        colorValue = 0;
      }
      colorValue += 1;
      textSize(26);
      text(toneArray[tone], x - 9, windowHeight);
      tone += 1;
      if (tone == 12) {
        tone = 0
      }
    };
  }
  grid()
}