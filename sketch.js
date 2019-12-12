var cursor = {X: mouseX, Y: mouseY}

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

function avg(list){
  let sum = values.reduce((previous, current) => current += previous);
  let avg = sum / values.length;
  return avg;
}
function changeX(Xvalue){
  var listX = [0,0,0,0,0]
  list.pop(0)
  list.append(Xvalue)
  return listX;
}
function changeY(Yvalue){
  var listY = [0,0,0,0,0]
  list.pop(0)
  list.append(Yvalue)
  return listY;
}
function avgMouse(cursorObject){
  var X = changeX(cursorObject.X)
  nX = avg(listX)
  var Y = changeY(cursorObject.Y)
  nY = avg(listY)
  var newCursor = {newX:nX, newY: nY }
  return newCursor;  
}