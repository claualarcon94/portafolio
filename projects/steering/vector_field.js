/* SteeringVectorField — campo de vectores generado con ruido Perlin.
 * Cada celda contiene un vector normalizado que guía el movimiento
 * de los vehículos que lo consultan mediante lookup(). */
var SteeringVectorField = function(p, r) {
  var resolution = r;
  this.cols = Math.floor(p.width / r);
  this.rows = Math.floor(p.height / r);
  this.field = [];

  for (var i = 0; i < this.rows; i++) {
    this.field[i] = [];
  }

  /* Genera vectores en cada celda usando ruido Perlin 3D */
  this.initialize = function(time) {
    var yoff = 0;

    for (var i = 0; i < this.rows; i++) {
      var xoff = 0;
      for (var j = 0; j < this.cols; j++) {
        var theta = p.noise(xoff, yoff, time) * 8 * Math.PI;
        this.field[i][j] = p5.Vector.fromAngle(theta);
        xoff += 0.1;
      }
      yoff += 0.2;
    }
  };

  /* Dibuja cada vector como una línea orientada */
  this.display = function() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        drawVector(this.field[i][j], j * resolution, i * resolution, resolution - 2);
      }
    }
  };

  /* Dibuja un vector individual rotado según su dirección */
  function drawVector(v, x, y, scayl) {
    p.push();
    p.translate(x + resolution / 2, y + resolution / 2);
    p.stroke(0, 150, 200);
    p.strokeWeight(2 * Math.min(1, p.width / 800));
    p.rotate(v.heading());
    var len = v.mag() * scayl;
    p.line(0, 0, len, 0);
    p.pop();
  }

  /* Retorna el vector en la celda que contiene la posición dada */
  this.lookup = function(lookup) {
    var column = Math.floor(Math.min(Math.max(lookup.x / resolution, 0), this.cols - 1));
    var row = Math.floor(Math.min(Math.max(lookup.y / resolution, 0), this.rows - 1));
    return this.field[row][column].copy();
  };
};
