var fireworks = [];
var gravity;

var font;

function preload() {
  font = loadFont('DancingScript-Regular.ttf');
}


function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerHeight);
  gravity = createVector(0, 0.15);
  strokeWeight(4);
}

function draw() {
  background(51);

  var random_number = random(1);
  if (random_number < 0.2) { 
    fireworks.push(new Firework());
  }
  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();

    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}

function mouseClicked() {
  fireworks.push(new Firework(mouseX, mouseY, 5, 5));
  // prevent default
  return false;
}