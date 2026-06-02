/* Representa una rama del árbol fractal.
 * Cada rama puede bifurcarse en dos hijas con ángulos distintos.
 */

class Tree {
  constructor(p, begin, end) {
    this.p = p;
    this.vel = p.createVector(0, 0);
    this.acc = p.createVector(0, 0);
    this.end = end;
    this.begin = begin;
    this.color = p.color(121, 64, 28);
    this.wid = p.ancho;
    this.generation = p.count;
    this.finished = false;
  }

  /* Crea la rama hija hacia la izquierda */
  branchA() {
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.mult(0.67);
    dir.rotate(-this.p.angle2);
    var newEnd = p5.Vector.add(this.end, dir);
    return new Tree(this.p, this.end, newEnd);
  }

  /* Crea la rama hija hacia la derecha */
  branchB() {
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.mult(0.67);
    dir.rotate(this.p.angle1);
    var newEnd = p5.Vector.add(this.end, dir);
    return new Tree(this.p, this.end, newEnd);
  }

  /* Dibuja la rama: las terminales como puntos amarillos, el resto como líneas */
  display() {
    if (this.generation === 10) {
      this.p.noStroke();
      this.p.fill(242, 225, 64);
      this.p.ellipse(this.end.x, this.end.y, 8, 8);
    }
    if (this.generation < 9) {
      this.p.stroke(0);
      this.p.strokeWeight(this.wid);
      this.p.line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    } else {
      this.p.stroke(0, 83, 126);
      this.p.strokeWeight(this.wid);
      this.p.line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }
  }
}
