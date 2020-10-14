let grid = [];
const pointerRotation = [45, 135, 225, 315];
const startColor = "#8338ec";
const endColor = "#f72585";

function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(30);
  for (var i = 10; i < width; i += 30) {
    for (var j = 10; j < height; j += 30) {
      //add the circles to the array at x = a and y = b
      grid.push(new Clock(i, j, 15, random(pointerRotation)));
    }
  }
}

function draw() {
  // put drawing code here
  background("#ffbe0b");
  for (var i = 0; i < grid.length; i++) {
    grid[i].display();
    if (grid[i].rotation != grid[i].endRotation) {
      grid[i].color = startColor;
      grid[i].update();
    } else {
      grid[i].color = endColor;
    }
  }
  if (frameCount % (450) == 0) {
    newAngle();
  }
}

function newAngle() {
  for (var i = 0; i < grid.length; i++) {
    grid[i].endRotation = random(pointerRotation);
  }
}

class Clock {
  constructor(temp_x, temp_y, temp_r, temp_rotation) {
    this.x = temp_x;
    this.y = temp_y;
    this.r = temp_r;
    this.rotation = 0;
    this.endRotation = temp_rotation;
    this.color = startColor;
  }

  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    noFill();
    ellipse(0, 0, this.r * 2);
    pop();

    push();
    translate(this.x, this.y);
    stroke(this.color);
    rotate(this.rotation);
    strokeWeight(4);
    line(0, -this.r - 5, 0, this.r + 5);
    pop();
  }

  update() {
    if (this.rotation >= 360) {
      this.rotation = 0;
    } else {
      this.rotation = this.rotation + 1;
    }
  }
}
