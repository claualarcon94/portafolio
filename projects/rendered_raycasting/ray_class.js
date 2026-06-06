/* RrRay — rayo que se proyecta desde una posición en un ángulo dado.
 * Calcula la intersección más cercana con una pared y retorna el punto. */
var RrRay = function(p, tempAngle) {
  this.R = 1000;
  this.angle = Math.PI * tempAngle / 180;
  this.pos = new p5.Vector(0, 0);
  this.dir = new p5.Vector(0, 0);

  /* Reposiciona el origen del rayo y recalcula su dirección */
  this.update = function(cx, cy) {
    this.pos = new p5.Vector(cx, cy);
    this.dir = new p5.Vector(
      cx + this.R * Math.cos(this.angle),
      cy + this.R * Math.sin(this.angle)
    );
  };

  /* Calcula si el rayo intersecta una pared y retorna el punto de contacto */
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
