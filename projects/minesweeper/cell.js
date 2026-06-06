var Cell = function(p, x, y, m) {
  this.p = p;
  this.row = x;
  this.col = y;
  this.revealed = false;
  this.mine = false;
  this.flag = false;
  this.doubt = false;
  this.triggered = false;
  this.neighbours = 0;
  if (m) {
    this.mine = true;
  }
};

Cell.prototype.countneighbours = function() {
  var field = this.p.stats.field;
  var ncells = this.p.stats.ncells;
  for (var i = -1; i <= 1; i++) {
    for (var j = -1; j <= 1; j++) {
      if (this.row + i >= 0 && this.row + i < ncells && this.col + j >= 0 && this.col + j < ncells) {
        if (field[this.row + i][this.col + j].mine && field[this.row][this.col] !== field[this.row + i][this.col + j]) {
          this.neighbours++;
        }
      }
    }
  }
};

Cell.prototype.show = function() {
  var w = this.p.stats.w;
  var field = this.p.stats.field;
  var ncells = this.p.stats.ncells;
  if (this.revealed) {
    this.p.fill(155);
    this.p.stroke(50);
    this.p.strokeWeight(1.5);
    this.p.rect(this.col * w, this.row * w, w, w);
    if (this.neighbours > 0 && !this.mine) {
      this.numbers();
    }
    if (this.mine) {
      if (this.triggered) {
        this.p.fill(175, 0, 0);
        this.p.rect(this.col * w, this.row * w, w, w);
      }
      this.drawmine();
    }
  } else if (!this.revealed) {
    this.unrcell();
  }
  if (this.flag) {
    this.drawflag();
  } else if (this.doubt) {
    this.drawdoubt();
  }
};

Cell.prototype.reveal = function() {
  if (!this.revealed) {
    this.revealed = true;
    this.p.stats.revealeds++;
  }
  if (this.neighbours === 0) {
    this.floodFill();
  }
};

Cell.prototype.floodFill = function() {
  var field = this.p.stats.field;
  var ncells = this.p.stats.ncells;
  for (var i = -1; i <= 1; i++) {
    for (var j = -1; j <= 1; j++) {
      var rowoff = this.row + i;
      var coloff = this.col + j;
      if (rowoff >= 0 && rowoff < ncells && coloff >= 0 && coloff < ncells && !field[rowoff][coloff].revealed && !field[rowoff][coloff].flag && !field[rowoff][coloff].doubt) {
        field[rowoff][coloff].reveal();
      }
    }
  }
};

Cell.prototype.numbers = function() {
  var w = this.p.stats.w;
  if (this.neighbours === 1) {
    this.p.fill(0, 0, 155);
  } else if (this.neighbours === 2) {
    this.p.fill(0, 100, 0);
  } else if (this.neighbours === 3) {
    this.p.fill(155, 0, 0);
  } else if (this.neighbours === 4) {
    this.p.fill(0, 0, 50);
  } else if (this.neighbours === 5) {
    this.p.fill(0, 50, 0);
  } else if (this.neighbours === 6) {
    this.p.fill(50, 0, 0);
  }
  this.p.textSize(32);
  this.p.text(this.neighbours, this.col * w + 10, this.row * w + w - 5);
};

Cell.prototype.drawmine = function() {
  var w = this.p.stats.w;
  this.p.fill(75);
  this.p.text("X", this.col * w + 10, this.row * w + w - 8);
  this.p.noStroke();
  this.p.rect(this.col * w + 8, this.row * w + 18, 24, 4);
  this.p.ellipse(this.col * w + w / 2, this.row * w + w / 2, 16, 16);
};

Cell.prototype.unrcell = function() {
  var w = this.p.stats.w;
  this.p.fill(175);
  this.p.rect(this.col * w, this.row * w, w, w);
  this.p.beginShape();
  this.p.vertex(this.col * w, this.row * w + w);
  this.p.vertex(this.col * w, this.row * w);
  this.p.vertex(this.col * w + w, this.row * w);
  this.p.vertex(this.col * w + w - 4, this.row * w + 4);
  this.p.vertex(this.col * w + 4, this.row * w + 4);
  this.p.vertex(this.col * w + 4, this.row * w + w - 4);
  this.p.noStroke();
  this.p.fill(255);
  this.p.endShape(this.p.CLOSE);
  this.p.beginShape();
  this.p.vertex(this.col * w, this.row * w + w);
  this.p.vertex(this.col * w + w, this.row * w + w);
  this.p.vertex(this.col * w + w, this.row * w);
  this.p.vertex(this.col * w + w - 4, this.row * w + 4);
  this.p.vertex(this.col * w + w - 4, this.row * w + w - 4);
  this.p.vertex(this.col * w + 4, this.row * w + w - 4);
  this.p.noStroke();
  this.p.fill(50);
  this.p.endShape(this.p.CLOSE);
  
  this.p.noFill();
  this.p.stroke(50);
  this.p.strokeWeight(1.5);
  this.p.rect(this.col * w, this.row * w, w, w);
};

Cell.prototype.drawflag = function() {
  var w = this.p.stats.w;
  this.p.fill(0);
  this.p.rect(this.col * w + 16, this.row * w + w / 2 + w / 6, 8, 4);
  this.p.rect(this.col * w + 12, this.row * w + w / 2 + 2 * w / 8, 16, 4);
  this.p.beginShape();
  this.p.vertex(this.col * w + w / 6, this.row * w + w / 2);
  this.p.vertex(this.col * w + w / 2, this.row * w + w / 4);
  this.p.vertex(this.col * w + w / 2, this.row * w + 4 * w / 6);
  this.p.fill(200, 0, 0);
  this.p.endShape(this.p.CLOSE);
};

Cell.prototype.drawdoubt = function() {
  var w = this.p.stats.w;
  this.p.text("?", this.col * w + 14, this.row * w + w - 8);
};
