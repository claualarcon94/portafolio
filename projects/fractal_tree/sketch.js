/* Sketch principal — Fractal Tree
 * Árbol recursivo con ramificación estilo L-system.
 * Las hojas caen y responden al viento simulado con ruido Perlin.
 */

var fractalTreesSketch = function(p) {
  var t = 0;
  var gravity;

  /* Configuración: crea el tronco raíz del árbol */
  p.setup = function() {
    var contenedor = document.getElementById('p5-canvas');
    var anchoCanvas = contenedor ? contenedor.clientWidth : 560;
    var altoCanvas = contenedor ? contenedor.clientHeight : 350;
    p.createCanvas(anchoCanvas, altoCanvas);
    p.background(55);

    p.ramas = [];
    p.hojas = [];
    p.count = 1;
    p.ancho = p.height * 0.03;
    p.angle1 = p.PI / 4;
    p.angle2 = p.radians(15);

    var len = p.height * 0.185;
    gravity = p.createVector(0, 0.01);
    p.randomSeed(42);

    var root = new Tree(p,
      p.createVector(p.width / 4 + 50, p.height),
      p.createVector(p.width / 4 + 50, p.height - len)
    );
    p.ramas.push(root);
  };

  /* Bucle principal: dibuja ramas, simula viento y actualiza hojas */
  p.draw = function() {
    p.background(55);
    t += 0.005;

    /* Dibuja todas las ramas del árbol */
    for (var i = 0; i < p.ramas.length; i++) p.ramas[i].display();

    /* Aplica fuerzas (gravedad y viento Perlin) a cada hoja */
    for (var i = 0; i < p.hojas.length; i++) {
      var turbulence = p.noise(t);
      turbulence = p.map(turbulence, 0, 1, -0.05, 0.05);
      var wind = p.createVector(turbulence, 0);
      p.hojas[i].applyForce(gravity);
      p.hojas[i].applyWind(wind);
      p.hojas[i].damp();
      p.hojas[i].update();
      p.hojas[i].display();
    }

    /* Genera hojas nuevas desde las ramas terminales */
    for (var i = 0; i < p.ramas.length; i++) {
      if (p.ramas[i].generation == 10) {
        var chance = p.random(1000);
        if (chance < 20) {
          var hoja = new Leaves(p, p.ramas[i].end);
          p.hojas.push(hoja);
        }
      }
    }

    /* Elimina hojas que salen de la pantalla */
    for (var i = p.hojas.length - 1; i >= 0; i--) {
      if (p.hojas[i].pos.y > p.height || p.hojas[i].pos.y < 0 || p.hojas[i].pos.x < 0 || p.hojas[i].pos.x > p.width) {
        p.hojas.splice(i, 1);
      }
    }
  };

  /* Hace crecer el árbol una generación más */
  function crecer() {
    if (p.count < 10) {
      p.count++;
      p.ancho *= 0.67;
      for (var i = p.ramas.length - 1; i >= 0; i--) {
        var current = p.ramas[i];
        if (!current.finished) {
          var pct = p.random(0, 101);
          if (pct < 100 && current.generation > 3 || current.generation <= 3) {
            p.ramas.push(current.branchA());
          }
          pct = p.random(0, 101);
          if (pct < 100 && current.generation > 3 || current.generation <= 3) {
            p.ramas.push(current.branchB());
          }
        }
        current.finished = true;
      }
    }
  }

  p.mousePressed = function() { crecer(); };
};
