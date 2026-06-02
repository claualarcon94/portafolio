/* Sketch principal — Marching Squares
 * Implementación del algoritmo Marching Squares sobre un campo
 * escalar generado por metaballs (burbujas).
 * Controles de teclado y mouse para interactuar.
 */

var marchingSquaresSketch = function(p) {
  var res = 10;
  var cols, rows;
  var bubbles = [];
  var Field = [];
  var threshold = 1.0;

  /* Toggles visuales */
  var grid = false;
  var balls = true;
  var inter = false;
  var rec = false;

  /* Índices de esquinas para cada arista de una celda */
  var edgeCorners = [[3, 2], [2, 1], [0, 1], [3, 0]];

  /* Posiciones relativas de las cuatro esquinas de la celda */
  var cornerPos = [
    {x: 0, y: 0},
    {x: 1, y: 0},
    {x: 1, y: 1},
    {x: 0, y: 1}
  ];

  /* Metaball que genera influencia en el campo escalar */
  function Bubble(x, y) {
    this.r = p.random(10, 100);
    this.x = x !== undefined ? x : p.random(this.r, p.width - this.r);
    this.y = y !== undefined ? y : p.random(this.r, p.height - this.r);
    this.vx = p.random(-2, 2);
    this.vy = p.random(-2, 2);
  }

  Bubble.prototype.show = function() {
    p.noFill();
    p.stroke(255);
    p.strokeWeight(1);
    p.fill('#2E94E5');
    p.circle(this.x, this.y, this.r * 2);
  };

  Bubble.prototype.update = function() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x > p.width - this.r || this.x < this.r) this.vx *= -1;
    if (this.y > p.height - this.r || this.y < this.r) this.vy *= -1;
  };

  /* Configuración: canvas, grilla del campo y burbujas iniciales */
  p.setup = function() {
    var contenedor = document.getElementById('p5-canvas');
    var ancho = contenedor ? contenedor.clientWidth : 560;
    var alto = contenedor ? contenedor.clientHeight : 400;
    p.createCanvas(ancho, alto);
    p.canvas.oncontextmenu = function(e) { e.preventDefault(); };
    cols = Math.floor(p.width / res) + 1;
    rows = Math.floor(p.height / res) + 1;
    Field = new Array(rows);
    for (var i = 0; i < rows; i++) Field[i] = new Array(cols);
    for (var i = 0; i < 16; i++) bubbles.push(new Bubble());
  };

  /* Bucle principal: calcula el campo, dibuja contornos y metaballs */
  p.draw = function() {
    p.background(100);

    /* Calcula el campo escalar con la influencia de cada burbuja */
    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < cols; j++) {
        var sum = 0;
        var cx = j * res;
        var cy = i * res;
        for (var k = 0; k < bubbles.length; k++) {
          var b = bubbles[k];
          var dx = cx - b.x;
          var dy = cy - b.y;
          var d2 = dx * dx + dy * dy;
          if (d2 > 0) sum += (b.r * b.r) / d2;
        }
        Field[i][j] = sum;
      }
    }

    /* Relleno interior de las metaballs (opcional, toggle r) */
    if (rec) {
      for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
          if (Field[i][j] >= 1) p.fill('#2E94E5');
          else p.fill(100);
          p.noStroke();
          p.rect(j * res, i * res, res, res);
        }
      }
    }

    /* Actualiza y dibuja las burbujas */
    for (var i = 0; i < bubbles.length; i++) {
      bubbles[i].update();
      if (balls) bubbles[i].show();
    }

    /* Extrae las líneas de contorno con Marching Squares */
    p.stroke(255);
    p.strokeWeight(5);
    p.noFill();

    for (var i = 0; i < rows - 1; i++) {
      for (var j = 0; j < cols - 1; j++) {
        var ox = j * res;
        var oy = i * res;

        /* Determina qué esquinas están dentro del umbral */
        var c1 = Field[i][j] >= threshold ? 1 : 0;
        var c2 = Field[i][j + 1] >= threshold ? 1 : 0;
        var c3 = Field[i + 1][j + 1] >= threshold ? 1 : 0;
        var c4 = Field[i + 1][j] >= threshold ? 1 : 0;
        var state = c1 * 8 + c2 * 4 + c3 * 2 + c4;

        if (inter) {
          /* Interpolación lineal para bordes más suaves */
          var vals = [
            Field[i][j],
            Field[i][j + 1],
            Field[i + 1][j + 1],
            Field[i + 1][j]
          ];
          var mid = [{x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}];
          for (var e = 0; e < 4; e++) {
            var ca = edgeCorners[e][0];
            var cb = edgeCorners[e][1];
            var t = (threshold - vals[ca]) / (vals[cb] - vals[ca]);
            if (isNaN(t)) t = 0.5;
            mid[e].x = (j + cornerPos[ca].x + (cornerPos[cb].x - cornerPos[ca].x) * t) * res;
            mid[e].y = (i + cornerPos[ca].y + (cornerPos[cb].y - cornerPos[ca].y) * t) * res;
          }
          displayState(state, mid[2], mid[1], mid[0], mid[3]);
        } else {
          /* Puntos medios fijos sin interpolación */
          var a = {x: ox + res * 0.5, y: oy};
          var b = {x: ox + res, y: oy + res * 0.5};
          var c = {x: ox + res * 0.5, y: oy + res};
          var d = {x: ox, y: oy + res * 0.5};
          displayState(state, a, b, c, d);
        }
      }
    }

    /* Dibuja la rejilla de celdas (opcional, toggle g) */
    if (grid) {
      p.stroke(255);
      p.strokeWeight(1);
      for (var i = 0; i < rows; i++) {
        p.line(0, i * res, p.width, i * res);
      }
      for (var j = 0; j < cols; j++) {
        p.line(j * res, 0, j * res, p.height);
      }
    }

  };

  /* Mouse: clic izquierdo agrega burbuja, derecho la elimina */
  p.mousePressed = function() {
    if (p.mouseButton === p.LEFT) {
      bubbles.push(new Bubble(p.mouseX, p.mouseY));
    } else if (p.mouseButton === p.RIGHT) {
      if (bubbles.length > 1) bubbles.shift();
    }
  };

  /* Teclas de control */
  p.keyPressed = function() {
    if (p.key === 'g') grid = !grid;
    if (p.key === 'b') balls = !balls;
    if (p.key === 'l') inter = !inter;
    if (p.key === 'r') rec = !rec;
    if (p.key === '+') res += 10;
    if (p.key === '-' && res > 10) res -= 10;
  };

  /* Dibuja las líneas según el estado de la celda (los 16 casos de Marching Squares) */
  function displayState(state, a, b, c, d) {
    switch (state) {
      case 1:  p.line(c.x, c.y, d.x, d.y); break;
      case 2:  p.line(b.x, b.y, c.x, c.y); break;
      case 3:  p.line(b.x, b.y, d.x, d.y); break;
      case 4:  p.line(a.x, a.y, b.x, b.y); break;
      case 5:  p.line(a.x, a.y, d.x, d.y); p.line(b.x, b.y, c.x, c.y); break;
      case 6:  p.line(a.x, a.y, c.x, c.y); break;
      case 7:  p.line(a.x, a.y, d.x, d.y); break;
      case 8:  p.line(a.x, a.y, d.x, d.y); break;
      case 9:  p.line(a.x, a.y, c.x, c.y); break;
      case 10: p.line(a.x, a.y, b.x, b.y); p.line(c.x, c.y, d.x, d.y); break;
      case 11: p.line(a.x, a.y, b.x, b.y); break;
      case 12: p.line(b.x, b.y, d.x, d.y); break;
      case 13: p.line(b.x, b.y, c.x, c.y); break;
      case 14: p.line(c.x, c.y, d.x, d.y); break;
    }
  }
};
