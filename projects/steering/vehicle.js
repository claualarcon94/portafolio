var SteeringVehicle = function(p, lx, ly, ms, mf) {
  this.location = new p5.Vector(lx, ly);
  this.velocity = new p5.Vector(2, -2);
  this.acceleration = new p5.Vector(0, 0);
  this.r = 6;
  this.maxspeed = ms;
  this.maxforce = mf;

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  };

  this.applyForce = function(force) {
    this.acceleration.add(force);
  };

  this.seek = function(target) {
    var desired = p5.Vector.sub(target, this.location);
    desired.normalize();
    desired.mult(this.maxspeed);
    var steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce);
    this.applyForce(steer);
  };

  this.flee = function(target) {
    var distance = p5.Vector.dist(this.location, target);
    if (distance < 100) {
      var desired = p5.Vector.sub(target, this.location);
      desired.mult(-1);
      desired.setMag(this.maxspeed);
      var steer = p5.Vector.sub(desired, this.velocity);
      steer.limit(this.maxforce);
      this.applyForce(steer);
    }
  };

  this.separateFromNehighbours = function(vehicles) {
    var target = new p5.Vector();
    var count = 0;

    for (var i = 0; i < vehicles.length; i++) {
      var other = vehicles[i];
      if (this === other) continue;

      var distance = p5.Vector.dist(this.location, other.location);
      if (distance < this.r * 2) {
        target.div(distance);
        target.add(p5.Vector.sub(this.location, other.location));
        count++;
      }
    }

    target.add(this.location);
    var desired = p5.Vector.sub(target, this.location);

    if (count > 0) {
      desired.normalize();
      desired.div(count);
      desired.mult(this.maxspeed);
      var steer = p5.Vector.sub(desired, this.velocity);
      steer.limit(this.maxforce);
      this.applyForce(steer);
    }
  };

  this.stayBetweenWalls = function() {
    if (this.location.x < 25) {
      var desired = new p5.Vector(this.maxspeed, this.velocity.y);
      var steer = p5.Vector.sub(desired, this.velocity);
      steer.limit(this.maxforce);
      this.applyForce(steer);
    } else if (this.location.x > p.width - 25) {
      var desired = new p5.Vector(-this.maxspeed, this.velocity.y);
      var steer = p5.Vector.sub(desired, this.velocity);
      steer.limit(this.maxforce);
      this.applyForce(steer);
    } else if (this.location.y < 25) {
      var desired = new p5.Vector(this.velocity.x, this.maxspeed);
      var steer = p5.Vector.sub(desired, this.velocity);
      steer.limit(this.maxforce);
      this.applyForce(steer);
    } else if (this.location.y > p.height - 25) {
      var desired = new p5.Vector(this.velocity.x, -this.maxspeed);
      var steer = p5.Vector.sub(desired, this.velocity);
      steer.limit(this.maxforce * 3.5);
      this.applyForce(steer);
    }
  };

  this.followField = function(field) {
    var desired = field.lookup(this.location);
    desired.mult(this.maxspeed);
    var steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce / 2);
    this.applyForce(steer);
  };

  this.followPath = function(path) {
    var velPred = this.velocity.copy();
    velPred.mult(10);
    var predictedLoc = p5.Vector.add(this.location, velPred);

    var normal = new p5.Vector();
    var target = new p5.Vector();
    var segment = new p5.Vector();
    var record = 1000000;

    for (var i = 0; i < path.numOfPoints - 1; i++) {
      var a = path.points[i];
      var b = path.points[i + 1];
      var normalPoint = getNormalPoint(a, b, predictedLoc);

      if (normalPoint.x < a.x || normalPoint.x > b.x) {
        normalPoint = b.copy();
      }

      var distance = p5.Vector.dist(predictedLoc, normalPoint);
      if (distance < record) {
        record = distance;
        normal = normalPoint;
        segment = p5.Vector.sub(b, a);
        segment.normalize();
        segment.mult(10);
        target = normal.copy();
        target.add(segment);
      }
    }

    if (record > path.radius) {
      this.seek(target);
    }
  };

  function getNormalPoint(a, b, predictedLoc) {
    var seg = p5.Vector.sub(b, a);
    var aux = p5.Vector.sub(predictedLoc, a);
    seg.normalize();
    seg.mult(aux.dot(seg));
    return p5.Vector.add(a, seg);
  }

  this.borders = function() {
    if (this.location.x < 0) { this.location.x = p.width; }
    if (this.location.y < -this.r) { this.location.y = p.height + this.r; }
    if (this.location.x > p.width) { this.location.x = 0; }
    if (this.location.y > p.height + this.r) { this.location.y = -this.r; }
  };

  this.display = function() {
    var theta = this.velocity.heading() + Math.PI / 2;
    p.fill(250, 132, 35);
    p.stroke(0);
    p.strokeWeight(1);
    p.push();
    p.translate(this.location.x, this.location.y);
    p.rotate(theta);
    p.beginShape();
    p.vertex(0, -this.r * 2);
    p.vertex(-this.r, this.r * 2);
    p.vertex(this.r, this.r * 2);
    p.endShape(p.CLOSE);
    p.pop();
  };
};
