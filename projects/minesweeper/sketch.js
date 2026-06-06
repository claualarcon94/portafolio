var minesweeperSketch = function(p) {
  var total = 10;
  var probability = 9;
  var ncells = 10;
  var w = 40;
  var minec = 0;
  var seconds = 0;
  var minutes = 0;
  var over = false;
  var lost = false;
  var last = 0;
  var field;
  var face;

  var alertSound = new Sound('projects/minesweeper/data/alert.mp3', 0.18);
  var screamSound = new Sound('projects/minesweeper/data/scream.mp3', 0.32);
  var gameoverSound = new Sound('projects/minesweeper/data/gameover.mp3', 0.56);

  p.stats = {};
  p.stats.revealeds = 0;
  p.stats.ncells = ncells;
  p.stats.w = w;
  p.stats.lost = false;
  p.stats.lostSoundsPlayed = false;
  p.stats.ready = false;

  p.setup = function() {
    p.createCanvas(401, 451);
    p.canvas.oncontextmenu = function() { return false; };

    var loadCount = 0;

    function onImageLoaded() {
      loadCount++;
      if (loadCount === 4) {
        face = new Face(p, normalImg, surprisedImg, deadImg, winImg);
        p.stats.ready = true;
        startnewgame();
      }
    }

    var normalImg = new Image();
    normalImg.onload = onImageLoaded;
    normalImg.src = 'projects/minesweeper/data/normal.png';

    var surprisedImg = new Image();
    surprisedImg.onload = onImageLoaded;
    surprisedImg.src = 'projects/minesweeper/data/surprised.png';

    var deadImg = new Image();
    deadImg.onload = onImageLoaded;
    deadImg.src = 'projects/minesweeper/data/dead.png';

    var winImg = new Image();
    winImg.onload = onImageLoaded;
    winImg.src = 'projects/minesweeper/data/win.png';
  };

  p.draw = function() {
    if (!p.stats.ready) return;
    if (lost && !p.stats.lostSoundsPlayed) {
      p.stats.lostSoundsPlayed = true;
      alertSound.pause();
      screamSound.play();
      gameoverSound.play();
    }
    p.background(255);
    showTime();
    face.displayN();
    if (p.mouseIsPressed && !lost) {
      face.displayS();
    }
    for (var i = 0; i < ncells; i++) {
      for (var j = 0; j < ncells; j++) {
        field[i][j].show();
      }
    }
    if (p.stats.revealeds + minec === ncells * ncells && !lost) {
      win();
      face.displayW();
    }
    if (lost) {
      gamelost();
      face.displayD();
    }
  };

  var gameover = function() {
    for (var i = 0; i < ncells; i++) {
      for (var j = 0; j < ncells; j++) {
        field[i][j].revealed = true;
      }
    }
    over = true;
  };

  var win = function() {
    gameover();
    p.push();
    p.textSize(50);
    p.fill(255, 255, 100);
    p.text("YOU'VE WON!!", p.width / 2 - 175, p.height / 2);
    p.pop();
    for (var i = 0; i < ncells; i++) {
      for (var j = 0; j < ncells; j++) {
        field[i][j].flag = false;
      }
    }
  };

  var gamelost = function() {
    gameover();
    lost = true;
    for (var i = 0; i < ncells; i++) {
      for (var j = 0; j < ncells; j++) {
        field[i][j].flag = false;
      }
    }
    p.textSize(50);
    p.fill(255, 255, 100);
    p.text("YOU'VE LOST!!", p.width / 2 - 175, p.height / 2);
  };

  var startnewgame = function() {
    lost = false;
    over = false;
    p.stats.lost = false;
    field = [];
    for (var fi = 0; fi < ncells; fi++) {
      field[fi] = [];
    }
    alertSound.stop();
    alertSound.play();
    screamSound.stop();
    gameoverSound.stop();
    p.stats.lostSoundsPlayed = false;
    minec = 0;
    seconds = 0;
    minutes = 0;
    p.stats.revealeds = 0;

    do {
      minec = 0;
      for (var i = 0; i < ncells; i++) {
        for (var j = 0; j < ncells; j++) {
          var m = false;
          if (p.random(100) < probability && minec < total) {
            m = true;
            minec++;
          }
          field[i][j] = new Cell(p, i, j, m);
        }
      }
    } while (minec !== total);

    p.stats.field = field;

    for (var i = 0; i < ncells; i++) {
      for (var j = 0; j < ncells; j++) {
        field[i][j].countneighbours();
      }
    }
  };

  var flagcount = function() {
    var flagc = 0;
    for (var i = 0; i < ncells; i++) {
      for (var j = 0; j < ncells; j++) {
        if (field[i][j].flag) {
          flagc++;
        }
      }
    }
    return flagc;
  };

  var showTime = function() {
    p.textSize(32);
    p.fill(200, 0, 0);
    p.text(seconds, p.width / 2 + 10 + 100, p.height - 15);
    p.text(":", p.width / 2 + 100, p.height - 15);
    p.text(minutes, p.width / 2 - 20 + 100, p.height - 15);
    p.text(minec - flagcount(), 50, p.height - 15);
    if (p.millis() > last + 1000 && !over) {
      last = p.millis();
      seconds++;
      if (seconds % 60 === 0 && !over) {
        seconds = 0;
        minutes++;
      }
    }
  };

  p.mousePressed = function() {
    if (!p.stats.ready) return false;
    if (p.mouseX >= p.width / 2 - 25 && p.mouseX <= p.width / 2 - 25 + 50 && p.mouseY >= p.height - 50 && p.mouseY <= p.height - 50 + 50) {
      startnewgame();
      return false;
    }
    if (over) return false;
    for (var i = 0; i < ncells; i++) {
      for (var j = 0; j < ncells; j++) {
        if (p.mouseX >= j * w && p.mouseX < j * w + w && p.mouseY >= i * w && p.mouseY < i * w + w) {
          if (p.mouseButton === p.RIGHT && !field[i][j].revealed && !field[i][j].flag && !field[i][j].doubt) {
            field[i][j].flag = true;
          } else if (p.mouseButton === p.RIGHT && !field[i][j].revealed && field[i][j].flag) {
            field[i][j].flag = false;
            field[i][j].doubt = true;
          } else if (p.mouseButton === p.RIGHT && !field[i][j].revealed && field[i][j].doubt) {
            field[i][j].doubt = false;
          }
          if (p.mouseButton === p.LEFT && !field[i][j].flag && !field[i][j].doubt && !lost) {
            field[i][j].reveal();
            if (field[i][j].mine) {
              field[i][j].triggered = true;
              lost = true;
              p.stats.lost = true;
            }
          }
        }
      }
    }
    return false;
  };
};
