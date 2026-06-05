var RrWall = function(p, x3, y3, x4, y4) {
  this.x3 = x3;
  this.y3 = y3;
  this.x4 = x4;
  this.y4 = y4;

  this.display = function() {
    p.strokeWeight(2);
    p.stroke(155);
    p.line(this.x3, this.y3, this.x4, this.y4);
  };
};
