var Face = function(p, normal, surprised, dead, win) {
  this.p = p;
  this.normal = normal;
  this.surprised = surprised;
  this.dead = dead;
  this.win = win;
};

Face.prototype.displayN = function() {
  if (this.normal) {
    var ctx = this.p.drawingContext;
    ctx.drawImage(this.normal, this.p.width / 2 - 25, this.p.height - 50, 50, 50);
  }
};

Face.prototype.displayS = function() {
  if (this.surprised) {
    var ctx = this.p.drawingContext;
    ctx.drawImage(this.surprised, this.p.width / 2 - 25, this.p.height - 50, 50, 50);
  }
};

Face.prototype.displayD = function() {
  if (this.dead) {
    var ctx = this.p.drawingContext;
    ctx.drawImage(this.dead, this.p.width / 2 - 25, this.p.height - 50, 50, 50);
  }
};

Face.prototype.displayW = function() {
  if (this.win) {
    var ctx = this.p.drawingContext;
    ctx.drawImage(this.win, this.p.width / 2 - 25, this.p.height - 50, 50, 50);
  }
};
