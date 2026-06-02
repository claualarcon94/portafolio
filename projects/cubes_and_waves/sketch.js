/**
 * Cubes and Waves — traducción de Processing a p5.js
 *
 * Grilla de cubos 3D cuyas alturas oscilan con una onda
 * sinusoidal propagándose desde el centro. Iluminado con
 * luz ambiental y puntual en modo WEBGL.
 */

var cubesAndWavesSketch = function(p) {
  var angle = 0;
  var velocidad = 0.06;
  var w = 24;
  var range;
  var maxD;
  var rotX = 0;
  var rotY = 0;

  /* Configuración: canvas WEBGL, cámara y distancias */
  p.setup = function() {
    p.createCanvas(400, 400, p.WEBGL);
    p.camera(0, 0, 200, 0, 0, 0, 0, 1, 0);
    range = w * 15;
    maxD = p.dist(0, 0, range / 2, range / 2);
  };

  /* Bucle principal: iluminación, rotación manual y grilla de cubos */
  p.draw = function() {
    p.background(255);

    /* Rotación con arrastre del mouse */
    if (p.mouseIsPressed && p.mouseButton === p.LEFT) {
      rotY += p.movedX * 0.01;
      rotX += p.movedY * 0.01;
    }

    p.pointLight(218, 255, 255, -200, -200, 400);
    p.ambientLight(80, 80, 80);
    p.ortho(-400, 400, 400, -400, -200, 800);
    p.scale(1.3);
    p.rotateX(p.radians(30) + rotX);
    p.rotateY(-p.PI / 4 + rotY);

    /* Itera sobre la grilla y dibuja cada cubo con altura modulada por seno */
    for (var z = 0; z < range; z += w) {
      for (var x = 0; x < range; x += w) {
        p.push();
        var distance = p.dist(x, z, range / 2, range / 2);
        var offset = p.map(distance, 0, maxD, -p.PI, p.PI);
        var a = angle + offset;
        var h = p.map(p.sin(a), -1, 1, 100, 350);
        p.translate(x - range / 2, 0, z - range / 2);
        p.fill(192, 243, 242);
        p.noStroke();
        p.box(w - 2, h, w - 2);
        p.pop();
      }
    }
    angle -= velocidad;
  };
};
