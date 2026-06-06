var SteeringPath = function(p) {
  this.radius = 6;
  this.points = [];
  this.numOfPoints = 80;

  for (var i = 0; i < this.numOfPoints; i++) {
    var x = p.map(i, 0, this.numOfPoints - 1, 0, p.width);
    var y = Math.sin(p.map(x, 0, p.width, 0, 8 * Math.PI)) * 100 + p.height / 2;
    this.points.push(new p5.Vector(x, y));
  }

  this.display = function() {
    p.stroke(175);
    p.strokeWeight(this.radius * 2);
    p.noFill();
    p.beginShape();
    for (var i = 0; i < this.points.length; i++) {
      p.vertex(this.points[i].x, this.points[i].y);
    }
    p.endShape();

    p.stroke(0);
    p.strokeWeight(1);
    p.noFill();
    p.beginShape();
    for (var i = 0; i < this.points.length; i++) {
      p.vertex(this.points[i].x, this.points[i].y);
    }
    p.endShape();
  };
};
