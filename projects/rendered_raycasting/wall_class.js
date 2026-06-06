/* RrWall — pared individual para el raycasting renderizado.
 * Almacena dos puntos (x3,y3)-(x4,y4) y se dibuja como línea. */
/* Almacena los dos puntos extremos de una pared */
var RrWall = function(p, x3, y3, x4, y4) {
  this.x3 = x3;
  this.y3 = y3;
  this.x4 = x4;
  this.y4 = y4;

  /* Dibuja la pared como una línea gris */
  this.display = function() {
    p.strokeWeight(2);
    p.stroke(155);
    p.line(this.x3, this.y3, this.x4, this.y4);
  };
};
