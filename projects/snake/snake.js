function Snake(p) {
  this.p = p;
  this.body = [];
  this.speed = {col: 1, row: 0};
  this.moveCounter = 0;
  this.dirLocked = false;
  this.moveDelay = 30;
  for (var i = 0; i < 10; i++) {
    this.body.push({col: 21 - i, row: 20});
  }
}

Snake.prototype.quickMove = function(col, row) {
  for (var i = this.body.length - 1; i > 0; i--) {
    this.body[i].col = this.body[i - 1].col;
    this.body[i].row = this.body[i - 1].row;
  }
  this.body[0].col += col;
  this.body[0].row += row;
  this.moveCounter = 0;
};

Snake.prototype.update = function() {
  this.moveCounter++;
  if (this.moveCounter < this.moveDelay) return false;
  this.moveCounter = 0;
  if (this.colisionPared()) return true;
  this.dirLocked = false;
  this._oldTail = {col: this.body[this.body.length - 1].col, row: this.body[this.body.length - 1].row};
  this.quickMove(this.speed.col, this.speed.row);
  return false;
};

Snake.prototype.crecer = function() {
  this.body.push({col: this._oldTail.col, row: this._oldTail.row});
};

Snake.prototype.colisionPared = function() {
  var nc = this.body[0].col + this.speed.col;
  var nr = this.body[0].row + this.speed.row;
  return nc < 0 || nc > 39 || nr < 0 || nr > 39;
};

Snake.prototype.colisionCuerpo = function() {
  for (var i = 1; i < this.body.length; i++) {
    if (this.body[0].col === this.body[i].col && this.body[0].row === this.body[i].row) return true;
  }
  return false;
};

Snake.prototype.display = function(dead) {
  var p = this.p;
  p.fill(0, 50, 0);
  for (var i = 0; i < this.body.length; i++) {
    p.rect(this.body[i].col * 20, this.body[i].row * 20, 20, 20);
  }
  if (dead) {
    p.stroke(255);
    p.strokeWeight(2);
    var cx = this.body[0].col * 20 + 10;
    var cy = this.body[0].row * 20 + 10;
    p.line(cx - 3, cy - 3, cx + 3, cy + 3);
    p.line(cx + 3, cy - 3, cx - 3, cy + 3);
    p.noStroke();
  } else {
    p.ellipseMode(p.CENTER);
    p.fill(255);
    p.ellipse(this.body[0].col * 20 + 5, this.body[0].row * 20 + 5, 6, 6);
  }
};
