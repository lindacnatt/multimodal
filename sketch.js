var guiSketch = new p5(( sketch ) => {

let lastX = [];
let lastY = [];
  
sketch.avg = function(t) {
  let sum = 0;
  for (let item of t) {
    sum += item;
  }
  return sum / t.length;
};

sketch.grid = function(n) {
    for (let x = 0; x < sketch.windowWidth; x += sketch.windowWidth / n) {
        sketch.stroke(50);
        sketch.strokeWeight(1); 
        sketch.line(x, 0, x, sketch.windowHeight);
      }
  }
  sketch.mouseMoved = function() {
    let mouseX = sketch.mouseX;
    let mouseY = sketch.mouseY;
    Bela.data.sendBuffer(0, 'float', [mouseX, mouseY]);
    Bela.control.send({mouseX: mouseX, mouseY: mouseY});
  };

sketch.setup = function() {
	sketch.fullscreen();
  sketch.noCursor();
  sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
  sketch.background(0);
};

sketch.draw = function() {
  sketch.fill(0, 12);
  sketch.rect(0, 0, sketch.width, sketch.height);
  sketch.colorMode(sketch.HSB, 255);
  let c = sketch.color(150, (sketch.height - sketch.mouseY*0.6)*255/sketch.height, 175); 
  sketch.fill(c);
  sketch.noStroke();
  lastX.push(sketch.mouseX);
  lastY.push(sketch.mouseY);
  let pointerSize = (sketch.windowWidth-sketch.mouseX/1.5)/10;
  sketch.ellipse(sketch.avg(lastX), sketch.avg(lastY), pointerSize, pointerSize);
  lastX = lastX.slice(lastX.length-30);
  lastY = lastY.slice(lastY.length-30);
  sketch.grid(5)
  
};
  
}, 'gui');

