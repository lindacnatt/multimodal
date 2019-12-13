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
  let c = color(150, (height-mouseY*0.6)*255/height, 175); 
  fill(c);
  noStroke();
  lastX.push(mouseX);
  lastY.push(mouseY);
  var pointerSize = (displayWidth-mouseX/1.5)/10;
  ellipse(avg(lastX), avg(lastY), pointerSize, pointerSize);
  lastX = lastX.slice(lastX.length-30);
  lastY = lastY.slice(lastY.length-30);
  sketch.grid = function() {
    for (var x = 0; x < sketch.windowWidth; x += sketch.windowWidth / 24) {
        sketch.stroke(50);
        sketch.strokeWeight(1);
        sketch.line(x, 0, x, sketch.windowHeight);
      };
  }
}