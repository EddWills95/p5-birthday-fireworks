function Particle(x, y, firework = true) {
    this.pos = createVector(x, y);
    this.firework = firework;

    this.color = {r: random(255), g: random(255), b: (random(255))}

    this.lifespan = 255;

    if (firework) {
        this.vel = createVector(0, random(-12, -3));
    } else {
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(2, 6));
    }
    this.acc = createVector(0, 0);
  
    this.applyForce = function(force) {
      this.acc.add(force);
    }
  
    this.update = function() {
      if (!this.firework) {
        this.vel.mult(0.95);
        this.lifespan -= 4;
      }

      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }

    this.show = function() {
      if (!this.firework) {
        stroke(this.color.r, this.color.g, this.color.b, this.lifespan);
        strokeWeight(2);
        point(this.pos.x, this.pos.y);
      } else {
        fill(this.color.r, this.color.g, this.color.b);
        // triangle(30, 40, 35, 10, 40, 40);
        triangle(
          this.pos.x, this.pos.y,
          this.pos.x + 0.5, this.pos.y - 2, 
          this.pos.x + 1, this.pos.y
        );
      }
    }

    this.done = function() {
      if (this.lifespan < 0) {
        return true;
      } else {
        return false;
      }
    }
  }