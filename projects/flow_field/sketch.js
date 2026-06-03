/* Sketch principal — Flow Field
 * Campo de vectores generado con ruido Perlin que guía
 * el movimiento de cientos de partículas.
 * Incluye sliders para controlar color, fuerza y velocidad.
 */

var flowFieldSketch = function(p) {
  /* Configuración: crea el canvas, las partículas y los sliders */
  p.setup = function() {
    var contenedor = document.getElementById('p5-canvas');
    if (!contenedor || contenedor.clientWidth === 0) contenedor = document.getElementById('hero-flow-field');
    var ancho = contenedor ? contenedor.clientWidth : 560;
    var alto = contenedor ? contenedor.clientHeight : 350;
    p.createCanvas(ancho, alto);
    p.background(25);

    p.inc = 0.1;
    p.scl = 20;
    p.cols = Math.floor(p.width / p.scl);
    p.rows = Math.floor(p.height / p.scl);
    p.zoff = 0;
    p.maxspeed = 5;
    p.magnitude = 5;

    p.particles = [];
    for (var i = 0; i < 200; i++) {
      p.particles[i] = new Particle(p);
    }
    p.noiseSeed(99);

    crearSliders(p);

    if (!p.sliderRed) {
      p.sliderRed = { value: function() { return 150; } };
      p.sliderGreen = { value: function() { return 200; } };
      p.sliderBlue = { value: function() { return 255; } };
      p.forceSlider = { value: function() { return 5; } };
      p.velocitySlider = { value: function() { return 5; } };
    }
  };

  /* Bucle principal: recalcula el campo de vectores y mueve las partículas */
  p.draw = function() {
    p.maxspeed = p.velocitySlider.value();
    p.magnitude = p.forceSlider.value();

    /* Genera el campo de vectores 2D con ruido Perlin */
    p.field = [];
    var yoff = 0;
    for (var y = 0; y <= p.rows; y++) {
      var xoff = 0;
      var row = [];
      for (var x = 0; x <= p.cols; x++) {
        var angle = p.noise(xoff, yoff, p.zoff) * p.TWO_PI * 4;
        var vector = p5.Vector.fromAngle(angle);
        vector.setMag(p.magnitude);
        row.push(vector);
        xoff += p.inc;
      }
      yoff += p.inc;
      p.field.push(row);
      p.zoff += 0.0002;
    }

    /* Actualiza y dibuja cada partícula según el campo */
    for (var i = 0; i < p.particles.length; i++) {
      p.particles[i].recieveField(p.field);
      p.particles[i].update();
      p.particles[i].edges();
      p.particles[i].show();
    }
  };

  /* Reinicia las partículas al hacer clic dentro del canvas */
  p.mousePressed = function() {
    if (p.mouseX < 0 || p.mouseX > p.width || p.mouseY < 0 || p.mouseY > p.height) return;
    p.background(25);
    p.particles = [];
    for (var i = 0; i < 400; i++) p.particles[i] = new Particle(p);
  };

  /* Crea los controles deslizantes de color, fuerza y velocidad */
  function crearSliders(p) {
    var controlsEl = document.getElementById('modalControls');
    if (!controlsEl) return;

    var section = document.createElement('div');
    section.className = 'slider-section flow-sliders';
    section.innerHTML =
      '<h4 class="controls-title">Color RGB</h4>' +
      '<div class="slider-row"><span class="slider-label" style="color:#e74c3c">R</span><div id="rs"></div></div>' +
      '<div class="slider-row"><span class="slider-label" style="color:#2ecc71">G</span><div id="gs"></div></div>' +
      '<div class="slider-row"><span class="slider-label" style="color:#3498db">B</span><div id="bs"></div></div>' +
      '<h4 class="controls-title" style="margin-top:12px">Fuerza / Velocidad</h4>' +
      '<div class="slider-row"><span class="slider-label">F</span><div id="fs"></div></div>' +
      '<div class="slider-row"><span class="slider-label">V</span><div id="vs"></div></div>';
    controlsEl.appendChild(section);

    var sr = p.createSlider(0, 255, 150);
    sr.parent('rs');
    var sg = p.createSlider(0, 255, 50);
    sg.parent('gs');
    var sb = p.createSlider(0, 255, 255);
    sb.parent('bs');
    p.sliderRed = sr;
    p.sliderGreen = sg;
    p.sliderBlue = sb;

    p.forceSlider = p.createSlider(0, 10, 5);
    p.forceSlider.parent('fs');
    p.velocitySlider = p.createSlider(0, 10, 5);
    p.velocitySlider.parent('vs');
  }
};
