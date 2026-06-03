/* Pared representada como un segmento de línea.
 * Los rayos colisionan con estas paredes y se detienen en el
 * punto de intersección más cercano al origen del rayo.
 */

var Wall = function(p, x3, y3, x4, y4) {
  this.x3 = x3;
  this.y3 = y3;
  this.x4 = x4;
  this.y4 = y4;

  /* Dibuja la pared como una línea gruesa de color gris */
  this.display = function() {
    p.strokeWeight(10);
    p.stroke(155);
    p.line(this.x3, this.y3, this.x4, this.y4);
  };
};
