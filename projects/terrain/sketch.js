/* Terreno 3D — superficie animada generada con ruido Perlin en modo WEBGL.
 * Cada frame varía el offset Z para crear una ondulación continua. */
var terrainSketch = function(p) {
  var cols, rows, scl;
  var terrain = [];
  var w, h;
  var yin = 0;
  var zoff = 0;

  /* Configura canvas WEBGL e inicializa la matriz del terreno */
  p.setup = function() {
    var contenedor = document.getElementById('p5-canvas');
    var ancho = contenedor ? contenedor.clientWidth : 800;
    var alto = contenedor ? Math.round(ancho * 0.5) : 400;
    p.createCanvas(ancho, alto, p.WEBGL);

    scl = 20;
    w = 1300;
    h = 600;
    cols = Math.floor(w / scl);
    rows = Math.floor(h / scl);

    for (var x = 0; x < cols; x++) {
      terrain[x] = [];
    }
  };

  /* Genera altura con Perlin noise y dibuja la superficie 3D animada */
  p.draw = function() {
    var yoff = yin;
    yin -= 0.02;

    for (var y = 0; y < rows; y++) {
      var xoff = 0;
      for (var x = 0; x < cols; x++) {
        terrain[x][y] = p.map(p.noise(xoff, yoff, zoff), 0, 1, -100, 200);
        xoff += 0.1;
      }
      yoff += 0.1;
    }

    p.background(0);
    p.stroke(150);
    
    p.translate(0,100);
    p.rotateX(p.PI / 3);
    p.translate(-w / 2, -h / 2);
    p.noFill();

    for (var y = 0; y < rows - 1; y++) {
      p.beginShape(p.TRIANGLE_STRIP);
      p.fill(3, 33, 64);

      for (var x = 0; x < cols; x++) {
        p.vertex(x * scl, y * scl, terrain[x][y]);
        p.vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
      }
      p.endShape();
    }

    zoff += 0.005;
  };
};
