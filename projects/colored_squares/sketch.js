/* Sketch principal — Colored Squares
 * Grilla de rectángulos coloreados por ruido Perlin.
 * El color de cada celda cambia suavemente en el tiempo.
 */

var coloredSquaresSketch = function(p) {
  var filas, columnas;
  var resolucion = 10;
  var rectangulos;

  /* Configuración inicial: crea el canvas y la grilla de rectángulos */
  p.setup = function() {
    var contenedor = document.getElementById('p5-canvas');
    var ancho = contenedor ? contenedor.clientWidth : 560;
    var alto = contenedor ? contenedor.clientHeight : 350;
    p.createCanvas(ancho, alto);
    p.noStroke();

    p.velocidad = 0.01;

    filas = p.floor(alto / resolucion);
    columnas = p.floor(ancho / resolucion);
    rectangulos = [];

    for (var i = 0; i < filas; i++) {
      rectangulos[i] = [];
      for (var j = 0; j < columnas; j++) {
        rectangulos[i][j] = new Rectangulo(p, j * resolucion, i * resolucion, resolucion);
      }
    }
  };

  /* Bucle principal: actualiza y dibuja cada rectángulo */
  p.draw = function() {
    for (var i = 0; i < filas; i++) {
      for (var j = 0; j < columnas; j++) {
        rectangulos[i][j].actualizar();
        rectangulos[i][j].mostrar();
      }
    }
  };

  /* Control por teclado: + aumenta el tamaño, - lo reduce */
  p.keyPressed = function() {
    if (p.key === '+') resolucion += 10;
    if (p.key === '-' && resolucion > 10) resolucion -= 10;
    if (p.key === '+' || p.key === '-') {
      filas = p.floor(p.height / resolucion);
      columnas = p.floor(p.width / resolucion);
      rectangulos = [];
      for (var i = 0; i < filas; i++) {
        rectangulos[i] = [];
        for (var j = 0; j < columnas; j++) {
          rectangulos[i][j] = new Rectangulo(p, j * resolucion, i * resolucion, resolucion);
        }
      }
    }
  };
};
