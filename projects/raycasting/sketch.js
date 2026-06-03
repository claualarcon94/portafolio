/* Sketch principal — Raycasting
 * Lanza 360 rayos desde el cursor en todas direcciones
 * y encuentra la intersección más cercana con paredes
 * colocadas aleatoriamente. Visualización top-down en 2D.
 */

var raycastingSketch = function(p) {
  var walls = [];
  var rays = [];
  var numWalls = 10;
  var numRays = 360;

  /* Configuración: canvas, paredes del borde, paredes aleatorias y rayos */
  p.setup = function() {
    var contenedor = document.getElementById('p5-canvas');
    var ancho = contenedor ? contenedor.clientWidth : 560;
    var alto = contenedor ? contenedor.clientHeight : 350;
    p.createCanvas(ancho, alto);

    /* Paredes del borde del canvas */
    walls.push(new Wall(p, 0, 0, ancho, 0));
    walls.push(new Wall(p, ancho, 0, ancho, alto));
    walls.push(new Wall(p, ancho, alto, 0, alto));
    walls.push(new Wall(p, 0, alto, 0, 0));

    /* Paredes aleatorias internas */
    for (var i = 0; i < numWalls; i++) {
      walls.push(new Wall(p, p.random(0, ancho), p.random(0, alto), p.random(0, ancho), p.random(0, alto)));
    }

    /* Rayos espaciados uniformemente en 360° */
    var angle = -numRays / 2;
    for (var j = 0; j < numRays; j++) {
      rays.push(new Ray(p, angle));
      angle++;
    }
  };

  /* Bucle principal: dibuja paredes, actualiza rayos y calcula intersecciones */
  p.draw = function() {
    p.background(0);

    for (var i = 0; i < walls.length; i++) {
      walls[i].display();
    }

    for (var j = 0; j < rays.length; j++) {
      rays[j].update();
    }

    look();
  };

  /* Para cada rayo, encuentra la pared más cercana y dibuja la línea */
  function look() {
    var closest;
    var d, record;
    var pt;

    for (var i = 0; i < rays.length; i++) {
      closest = null;
      record = 10000;

      for (var j = 0; j < walls.length; j++) {
        pt = rays[i].intersection(walls[j]);

        if (pt !== null) {
          d = p5.Vector.dist(rays[i].pos, pt);
          if (d < record) {
            record = d;
            closest = pt;
          }
        }
      }

      if (closest !== null) {
        p.stroke(255);
        p.strokeWeight(0.5);
        p.line(rays[i].pos.x, rays[i].pos.y, closest.x, closest.y);
        p.fill(255);
        p.ellipse(closest.x, closest.y, 8, 8);
      }
    }
  }
};
