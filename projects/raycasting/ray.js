/* Rayo individual que se extiende desde el cursor en una dirección.
 * Calcula su intersección con cualquier pared usando el algoritmo
 * de intersección línea-línea (segmento-segmento).
 */

var Ray = function(p, tempAngle) {
  this.R = 1000;
  this.angle = 2 * Math.PI * tempAngle / 360;
  this.pos = new p5.Vector(p.mouseX, p.mouseY);
  this.dir = new p5.Vector(p.mouseX + Math.cos(this.angle), p.mouseY + Math.sin(this.angle));

  /* Actualiza origen y dirección según la posición actual del mouse */
  this.update = function() {
    this.pos = new p5.Vector(p.mouseX, p.mouseY);
    this.dir = new p5.Vector(p.mouseX + this.R * Math.cos(this.angle), p.mouseY + this.R * Math.sin(this.angle));
  };

  /* Intersección línea-línea entre el rayo y una pared.
   * Devuelve el punto de impacto o null si no hay intersección. */
  this.intersection = function(wall) {
    var x1 = this.pos.x;
    var y1 = this.pos.y;
    var x2 = this.dir.x;
    var y2 = this.dir.y;
    var x3 = wall.x3;
    var y3 = wall.y3;
    var x4 = wall.x4;
    var y4 = wall.y4;

    var den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (den === 0) return null;

    var t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
    var u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

    if (t > 0 && t < 1 && u > 0 && u < 1) {
      return new p5.Vector(x1 + t * (x2 - x1), y1 + t * (y2 - y1));
    }
    return null;
  };
};
