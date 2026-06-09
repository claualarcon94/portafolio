/* Función lineal objetivo que separa las dos clases */
function f(x) {
  return 0.5 * x + 0.1;
}

/* Punto con coordenadas normalizadas (-1 a 1) y su etiqueta
 * La etiqueta se asigna según su posición respecto a f(x).
 */

class Point {
  constructor(p, x_, y_) {
    this.p = p;
    this.x = x_;
    this.y = y_;
    this.bias = 1;
    this.label = this.y < f(this.x) ? -1 : 1;
  }

  /* Convierte coordenada X normalizada a píxeles */
  pixelX() {
    return this.p.map(this.x, -1, 1, 0, this.p.width);
  }

  /* Convierte coordenada Y normalizada a píxeles */
  pixelY() {
    return this.p.map(this.y, -1, 1, this.p.height, 0);
  }

  /* Crea un punto en una posición aleatoria del espacio normalizado */
  static random(p) {
    return new Point(p, p.random(-1, 1), p.random(-1, 1));
  }

  /* Dibuja el punto: círculo exterior (blanco/negro según predicción)
   * e interior (verde si acierta, rojo si se equivoca) */
  display(guess) {
    var px = this.pixelX();
    var py = this.pixelY();
    var scale = Math.min(1, this.p.width / 800);
    if (guess === -1) this.p.fill(0);
    else this.p.fill(255);
    this.p.ellipse(px, py, 25 * scale, 25 * scale);
    if (guess === this.label) this.p.fill(0, 255, 0);
    else this.p.fill(255, 0, 0);
    this.p.ellipse(px, py, 12 * scale, 12 * scale);
  }
}
