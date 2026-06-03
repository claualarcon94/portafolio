/* Sketch principal — Perceptron
 * Perceptrón de una capa entrenado sobre 1000 puntos aleatorios.
 * La frontera de decisión se ajusta en tiempo real hasta clasificar
 * todos los puntos correctamente. Después, haz clic para evaluar
 * nuevos puntos.
 */

var perceptronSketch = function(p) {
  var neuron;
  var n = 1000;
  var attempts = 0;
  var points = [];
  var finish = false;

  /* Configuración: canvas, perceptrón y puntos iniciales */
  p.setup = function() {
    var contenedor = document.getElementById('p5-canvas');
    var ancho = contenedor ? contenedor.clientWidth : 560;
    var alto = contenedor ? contenedor.clientHeight : 400;
    p.createCanvas(ancho, alto);
    p.background(150);

    neuron = new Perceptron(p);
    points = [];
    for (var i = 0; i < n; i++) {
      points.push(Point.random(p));
    }
  };

  /* Bucle principal: clasifica, dibuja y entrena */
  p.draw = function() {
    var done = 1;
    p.background(150);

    /* Verifica si todos los puntos están correctamente clasificados */
    for (var i = 0; i < points.length; i++) {
      var input = [points[i].x, points[i].y, points[i].bias];
      if (neuron.guess(input) !== points[i].label) {
        done = 0;
        break;
      }
    }

    /* Dibuja cada punto con la predicción actual */
    for (var i = 0; i < points.length; i++) {
      var inp = [points[i].x, points[i].y, points[i].bias];
      points[i].display(neuron.guess(inp));
    }

    /* Línea objetivo (negra) — la función f(x) que queremos aprender */
    var pa1 = new Point(p, -1, f(-1));
    var pb1 = new Point(p, 1, f(1));
    p.stroke(0);
    p.strokeWeight(1);
    p.line(pa1.pixelX(), pa1.pixelY(), pb1.pixelX(), pb1.pixelY());

    /* Línea ajustada por el perceptrón (blanca) */
    var px1 = new Point(p, -1, neuron.guessY(-1));
    var py1 = new Point(p, 1, neuron.guessY(1));
    p.stroke(255);
    p.strokeWeight(2);
    p.line(px1.pixelX(), px1.pixelY(), py1.pixelX(), py1.pixelY());

    /* Entrena el perceptrón con todos los puntos en cada frame */
    if (!finish) {
      for (var i = 0; i < points.length; i++) {
        var inp = [points[i].x, points[i].y, points[i].bias];
        neuron.train(inp, points[i].label);
      }
      attempts++;
    }

    /* Cuando clasifica todos correctamente, se detiene el entrenamiento */
    if (done === 1 && !finish) {
      console.log('Entrenamiento completado en', attempts, 'intentos');
      finish = true;
    }
  };

  /* Después del entrenamiento, agrega un punto donde se hace clic */
  p.mousePressed = function() {
    if (!finish) return;
    if (p.mouseX < 0 || p.mouseX > p.width || p.mouseY < 0 || p.mouseY > p.height) return;
    var nx = p.map(p.mouseX, 0, p.width, -1, 1);
    var ny = p.map(p.mouseY, 0, p.height, 1, -1);
    points.push(new Point(p, nx, ny));
  };
};
