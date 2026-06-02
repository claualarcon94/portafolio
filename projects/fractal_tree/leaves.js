/* Hoja individual que cae del árbol.
 * Responde a gravedad y viento, simulando una caída orgánica.
 */

class Leaves {
  constructor(p, tpos) {
    this.p = p;
    this.pos = p.createVector(tpos.x, tpos.y);
    this.vel = p.createVector(0, 0);
    this.acc = p.createVector(0, 0);
    this.orientation = p.random(0, p.PI / 2);
    this.generation = p.count;
  }

  /* Actualiza posición mediante integración de Euler */
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  /* Amortiguación vertical para que la hoja no caiga tan rápido */
  damp() {
    var d = this.p.random(0, 1);
    this.pos.y -= d;
  }

  /* Acumula una fuerza externa en la aceleración */
  applyForce(force) {
    this.acc.add(force);
  }

  /* Aplica el viento respetando la orientación de la hoja */
  applyWind(twind) {
    var mag = twind.mag();
    mag = mag * this.p.cos(this.orientation);
    twind.normalize();
    twind.mult(mag);
    this.applyForce(twind);
  }

  /* Dibuja la hoja como un pequeño círculo semitransparente */
  display() {
    this.p.noStroke();
    this.p.fill(255, 100, 0, 150);
    this.p.ellipse(this.pos.x, this.pos.y, 2, 2);
  }
}
