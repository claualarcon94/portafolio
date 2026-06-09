function Food(p, cellSize, snake) {
  this.p = p;
  this.cellSize = cellSize;
  this.cols = p.floor(p.width / cellSize);
  this.rows = p.floor(p.height / cellSize);
  this.position = p.createVector(0, 0);
  this.respawn(snake);
}

Food.prototype.respawn = function(snake) {
  var p = this.p;
  var pos;
  do {
    var col = p.floor(p.random(this.cols));
    var row = p.floor(p.random(this.rows));
    pos = {col: col, row: row};
  } while (this.ocupada(pos, snake));
  this.col = col;
  this.row = row;
  this.position.set(col * this.cellSize, row * this.cellSize);
};

Food.prototype.ocupada = function(pos, snake) {
  for (var i = 0; i < snake.body.length; i++) {
    if (snake.body[i].col === pos.col && snake.body[i].row === pos.row) return true;
  }
  return false;
};

Food.prototype.display = function() {
  var p = this.p;
  p.fill(150, 0, 0);
  p.rect(this.position.x, this.position.y, this.cellSize, this.cellSize);
};
