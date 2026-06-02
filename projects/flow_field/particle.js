/* Partícula que navega por el campo de vectores.
 * Su velocidad y color se modulan por los sliders del panel.
 */

class Particle {
  constructor(p) {
    this.p = p;
    this.pos = p.createVector(p.random(p.width), p.random(p.height));
    this.vel = p.createVector(0, 0);
    this.acc = p.createVector(0, 0);
    this.h = 0;
    this.prevPos = this.pos.copy();
  }

  /* Integración de Euler con límite de velocidad máxima */
  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.p.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  /* Lee el vector del campo en la celda actual y lo aplica como aceleración */
  recieveField(field) {
    var x = Math.floor(this.pos.y / this.p.scl);
    var y = Math.floor(this.pos.x / this.p.scl);
    this.acc.add(field[x][y]);
  }

  /* Dibuja un trazo desde la posición anterior a la actual */
  show() {
    var p = this.p;
    p.stroke(this.h, p.sliderGreen.value(), p.sliderBlue.value(), 255);
    this.h = this.h + 1;
    if (this.h > p.sliderRed.value()) {
      this.h = 0;
    }
    p.strokeWeight(0.1);
    p.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev();
  }

  updatePrev() {
    this.prevPos.set(this.pos);
  }

  /* Teletransporta la partícula al borde opuesto si se sale de la pantalla */
  edges() {
    if (this.pos.x > this.p.width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = this.p.width;
      this.updatePrev();
    }
    if (this.pos.y > this.p.height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = this.p.height;
      this.updatePrev();
    }
  }
}
