/* SteeringParticleSystem — sistema que gestiona múltiples vehículos
 * y les aplica comportamientos colectivos (campo, camino, separación). */
/* Crea N vehículos en posiciones aleatorias dentro del canvas */
var SteeringParticleSystem = function(p, numero, ancho, alto) {
  this.vehicles = [];

  for (var i = 0; i < numero; i++) {
    this.vehicles.push(new SteeringVehicle(p, p.random(ancho), p.random(alto), 3, 0.5));
  }

  /* Aplica comportamientos (campo, camino, separación), actualiza y dibuja cada vehículo */
  this.run = function(field, path, state) {
    for (var i = 0; i < this.vehicles.length; i++) {
      var car = this.vehicles[i];

      if (state.fieldfollowing) car.followField(field);
      car.separateFromNehighbours(this.vehicles);
      if (state.pathfollowing) car.followPath(path);

      if (p.mouseIsPressed) {
        car.seek(new p5.Vector(p.mouseX, p.mouseY));
      }

      car.update();
      car.borders();
      car.display();
    }
  };
};
