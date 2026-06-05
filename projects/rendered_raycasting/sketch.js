var renderedRaycastingSketch = function(p) {
  var paredes = 10;
  var rays = 401;
  var walls = paredes + 4;
  var rayos = rays;

  var wallH, angle, d, proy;
  var fuentex = 0, fuentey = 0;
  var wall = [];
  var ray = [];
  var distances = [];

  p.setup = function() {
    var contenedor = document.getElementById('p5-canvas');
    var ancho = contenedor ? contenedor.clientWidth : 800;
    var alto = contenedor ? Math.round(ancho * 0.4) : 320;
    p.createCanvas(ancho, alto);

    wall.push(new RrWall(p, 0, 0, ancho / 2, 0));
    wall.push(new RrWall(p, ancho / 2, 0, ancho / 2, alto));
    wall.push(new RrWall(p, ancho / 2, alto, 0, alto));
    wall.push(new RrWall(p, 0, alto, 0, 0));

    for (var i = 4; i < walls; i++) {
      wall.push(new RrWall(p,
        p.random(0, ancho / 2), p.random(0, alto),
        p.random(0, ancho / 2), p.random(0, alto)
      ));
    }

    angle = 0;
    for (var j = 0; j < rays; j++) {
      ray.push(new RrRay(p, angle));
      angle += 75 / rayos;
    }

    for (var k = 0; k < rays; k++) distances[k] = 0;
  };

  p.draw = function() {
    p.background(0);

    for (var i = 0; i < wall.length; i++) wall[i].display();
    for (var j = 0; j < ray.length; j++) ray[j].update(fuentex, fuentey);

    look();
    render();

    p.fill(255, 0, 0);
    p.rectMode(p.CENTER);
    p.rect(p.width - p.width / 4, p.height / 2, 5, 5);
  };

  function look() {
    for (var i = 0; i < rays; i++) {
      var closest = null;
      var record = 10000;

      for (var j = 0; j < wall.length; j++) {
        var pt = ray[i].intersection(wall[j]);
        if (pt !== null) {
          d = p5.Vector.dist(ray[i].pos, pt);
          d = d * Math.cos(ray[i].angle - ray[Math.floor(rays / 2)].angle);

          if (d < record) {
            record = d;
            closest = pt;
          }
        }
      }

      distances[i] = record;

      if (closest !== null) {
        var b = p.map(distances[i], 0, Math.SQRT2 * p.width * p.width / 2, 255, 0);
        p.stroke(255);
        p.strokeWeight(0.5);
        p.line(fuentex, fuentey, closest.x, closest.y);
        p.fill(b);
        p.ellipse(closest.x, closest.y, 8, 8);
      }
    }
  }

  function render() {
    for (var i = 0; i < rays; i++) {
      proy = 25000 / distances[i];
      wallH = proy;

      p.push();
      var grosor = (p.width / 2) / rays;
      p.translate(grosor / 2 + p.width / 2, 0);
      var b = p.map(distances[i], 0, Math.SQRT2 * p.width / 2, 255, 0);
      p.fill(b);
      p.stroke(1);
      p.rectMode(p.CENTER);
      p.rect(i * grosor, p.height / 2, grosor, wallH);
      p.pop();
    }
  }

  p.keyPressed = function() {
    for (var j = 0; j < ray.length; j++) {
      if (p.key === 'a' || p.key === 'A') { ray[j].angle -= 0.05; }
      else if (p.key === 'd' || p.key === 'D') { ray[j].angle += 0.05; }
    }
    if (p.key === 'w' || p.key === 'W') {
      var vel = p5.Vector.fromAngle(ray[Math.floor(rays / 2)].angle);
      vel.normalize();
      vel.mult(5);
      fuentex += vel.x;
      fuentey += vel.y;
    } else if (p.key === 's' || p.key === 'S') {
      var vel = p5.Vector.fromAngle(ray[Math.floor(rays / 2)].angle);
      vel.normalize();
      vel.mult(5);
      fuentex -= vel.x;
      fuentey -= vel.y;
    }
  };
};
