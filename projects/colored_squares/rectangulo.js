/**
 * Rectángulo individual de la grilla.
 * Su color RGB se deriva del ruido Perlin,
 * generando transiciones suaves y orgánicas.
 */
class Rectangulo {
  constructor(p, x, y, res) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.res = res;
    this.r = p.random(0, 1);
    this.g = p.random(0, 1);
    this.b = p.random(0, 1);
    this.actualizar();
  }

  /* Avanza el offset de ruido y calcula un nuevo color */
  actualizar() {
    this.r += this.p.velocidad;
    this.g += this.p.velocidad;
    this.b += this.p.velocidad;
    var R = this.p.floor(this.p.map(this.p.noise(this.r), 0, 1, 0, 255));
    var G = this.p.floor(this.p.map(this.p.noise(this.g), 0, 1, 0, 255));
    var B = this.p.floor(this.p.map(this.p.noise(this.b), 0, 1, 0, 255));
    this.color = this.p.color(R, G, B);
  }

  /* Dibuja el rectángulo en su posición con el color actual */
  mostrar() {
    this.p.fill(this.color);
    this.p.rect(this.x, this.y, this.res, this.res);
  }
}
