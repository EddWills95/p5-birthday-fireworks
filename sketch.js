var fireworks = [];
var gravity;

var font;

function preload() {
  font = loadFont('DancingScript-Regular.ttf');
}


function setup() {
  createCanvas(700,400);
  gravity = createVector(0, 0.2);
  // stroke(255);
  strokeWeight(4);
  textFont(font);
  textSize(50);
}

function draw() {
  background(51);

  var random_number = random(1);
  if (random_number < 0.04) { 
    fireworks.push(new Firework());
  }
  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();

    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }

  fill(255);
  text('Happy Birthday Lana!', width/5, height/3);
}

function mouseClicked() {
  fireworks.push(new Firework(mouseX, mouseY, 5, 5));
  // prevent default
  return false;
}