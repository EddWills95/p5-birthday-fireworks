particle_count = 55; 

function Firework(x = null, y = null) {
    this.determine_side = function() {        
        if (random(1) > 0.5) {
            return random(width/3)
        } else {
            return random((width/3 * 2), width);
        }
    }

    this.firework = new Particle((x || this.determine_side()), (y || height));
    this.exploded = false;
    this.particles = [];

    this.update = function() {
        if (!this.exploded) {
            this.firework.applyForce(gravity);
            this.firework.update();
    
            if (this.firework.vel.y >= 0) {
                this.exploded = true;
                this.explode();
            }
        }
        for (var i = this.particles.length -1; i >= 0; i--) {
            this.particles[i].applyForce(gravity);
            this.particles[i].update();


            if (this.particles.length < 5) {
                for(var j = this.particles.length -1; j >= 0; j--) {
                    if (this.particles[i].pos.y <= this.particles[j].pos.y) {
                        console.log('explode');
                        this.explode();
                    }
                    if (this.particles[i].pos.x <= this.particles[j].pos.x) {

                        this.explode();
                    }
                }

            }

            if (this.particles[i].done()) {
                this.particles.splice(i);
            }
        }
    }

    this.explode = function() {
        for (var i = 0; i < particle_count; i++) {
            var p = new Particle(this.firework.pos.x, this.firework.pos.y, false);
            this.particles.push(p);
        }
        for (var i = 0; i < particle_count; i++) {
            this.particles[i].show();
        }
    }

    this.show = function() {
        if (!this.exploded) {
            this.firework.show();
        }
        for (var i = 0; i < this.particles.length; i++) {
            this.particles[i].show();
        }
    }

    this.done = function() {
        if (this.exploded && this.particles.length === 0) { 
            return true;
        } else {
            return false;
        }
    }
}