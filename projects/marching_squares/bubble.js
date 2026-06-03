/* Metaball que genera influencia en el campo escalar.
 * Cada burbuja aporta su masa al cálculo del campo
 * y rebota contra los bordes del canvas.
 */

class Bubble {
  constructor(p, x, y) {
    this.p = p;
    this.r = p.random(10, 50);
    this.x = x !== undefined ? x : p.random(this.r, p.width - this.r);
    this.y = y !== undefined ? y : p.random(this.r, p.height - this.r);
    this.vx = p.random(-2, 2);
    this.vy = p.random(-2, 2);
  }

  /* Dibuja la burbuja como un círculo azul semitransparente */
  show() {
    this.p.noFill();
    this.p.stroke(255);
    this.p.strokeWeight(1);
    this.p.fill('#2E94E5');
    this.p.circle(this.x, this.y, this.r * 2);
  }

  /* Actualiza la posición y rebota contra los bordes */
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x > this.p.width - this.r || this.x < this.r) this.vx *= -1;
    if (this.y > this.p.height - this.r || this.y < this.r) this.vy *= -1;
  }
}
