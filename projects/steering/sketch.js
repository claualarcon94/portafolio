var steeringSketch = function(p) {
  var numero = 100;
  var vehicles, field, path;
  var showgrid = false;
  var pathfollowing = true;
  var fieldfollowing = false;
  var resolution = 50;
  var time = 0;

  p.setup = function() {
    var contenedor = document.getElementById('p5-canvas');
    var ancho = contenedor ? contenedor.clientWidth : 800;
    var alto = contenedor ? Math.round(ancho * 0.6) : 480;
    p.createCanvas(ancho, alto);

    field = new SteeringVectorField(p, resolution);
    vehicles = new SteeringParticleSystem(p, numero, ancho, alto);
    path = new SteeringPath(p);
  };

  p.draw = function() {
    p.background(255);
    if (pathfollowing) path.display();

    field.initialize(time);
    if (showgrid) field.display();

    vehicles.run(field, path, {
      fieldfollowing: fieldfollowing,
      pathfollowing: pathfollowing
    });

    time += 0.001;
  };

  p.keyPressed = function() {
    if (p.key === 'g') {
      showgrid = !showgrid;
    } else if (p.key === 'p') {
      pathfollowing = !pathfollowing;
      fieldfollowing = !pathfollowing;
    }
  };
};
