function Snake(p) {
  this.p = p;
  this.body = [];
  this.speed = {col: 1, row: 0};
  this.moveCounter = 0;
  this.dirLocked = false;
  this.moveDelay = 10;
  var startCol = Math.floor(GRID * 0.55);
  var midRow = Math.floor(GRID * 0.5);
  for (var i = 0; i < 10; i++) {
    this.body.push({col: startCol - i, row: midRow});
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
  return nc < 0 || nc >= GRID || nr < 0 || nr >= GRID;
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
  var eye = Math.min(6, Math.max(3, Math.floor(CELL * 0.3)));
  var a = CELL / 4;
  var b = CELL - eye;
  for (var i = 0; i < this.body.length; i++) {
    p.rect(this.body[i].col * CELL, this.body[i].row * CELL, CELL, CELL);
  }
  var hx = this.body[0].col * CELL;
  var hy = this.body[0].row * CELL;
  var dc = this.body[0].col - this.body[1].col;
  var dr = this.body[0].row - this.body[1].row;
  if (dead) {
    p.stroke(255);
    p.strokeWeight(2);
    p.noFill();
    if (dc === 1) {
      drawX(hx + a, hy + a);
      drawX(hx + a, hy + b);
    } else if (dc === -1) {
      drawX(hx + b, hy + a);
      drawX(hx + b, hy + b);
    } else if (dr === -1) {
      drawX(hx + a, hy + b);
      drawX(hx + b, hy + b);
    } else if (dr === 1) {
      drawX(hx + a, hy + a);
      drawX(hx + b, hy + a);
    }
    p.noStroke();
  } else {
    p.ellipseMode(p.CENTER);
    p.fill(255);
    p.noStroke();
    if (dc === 1) {
      p.ellipse(hx + a, hy + a, eye, eye);
      p.ellipse(hx + a, hy + b, eye, eye);
    } else if (dc === -1) {
      p.ellipse(hx + b, hy + a, eye, eye);
      p.ellipse(hx + b, hy + b, eye, eye);
    } else if (dr === -1) {
      p.ellipse(hx + a, hy + b, eye, eye);
      p.ellipse(hx + b, hy + b, eye, eye);
    } else if (dr === 1) {
      p.ellipse(hx + a, hy + a, eye, eye);
      p.ellipse(hx + b, hy + a, eye, eye);
    }
  }

  function drawX(x, y) {
    var r = eye / 2;
    p.line(x - r, y - r, x + r, y + r);
    p.line(x + r, y - r, x - r, y + r);
  }
};
