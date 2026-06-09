var CELL = 40;
var GRID = 20;

var snakeSketch = function (p) {
  var snake, foods;
  var go = false;
  var pendingDir = null;
  var gameOver = false;
  var selectedOption = 0;
  var delayGO = 0;

  p.setup = function () {
    p.createCanvas(GRID * CELL, GRID * CELL);
    p.frameRate(60);
    p.background(50);
    snake = new Snake(p);
    foods = [];
    for (var i = 0; i < 10; i++) {
      foods.push(new Food(p, CELL, snake));
    }
  };

  p.draw = function () {
    p.background(155);
    p.stroke(0);
    p.strokeWeight(1);
    for (var i = 0; i <= p.width; i += CELL) {
      p.line(0, i, p.width, i);
      p.line(i, 0, i, p.height);
    }
    for (var i = 0; i < foods.length; i++) foods[i].display();
    snake.display(gameOver);
    
    if (go && pendingDir) {
      snake.speed.col = pendingDir.col;
      snake.speed.row = pendingDir.row;
      pendingDir = null;
    }
    
    if (go && !gameOver) {
      if (snake.update()) {
        gameOver = true;
        delayGO = 30;
        pendingDir = null;
      } else {
        if (snake.colisionCuerpo()) {
          gameOver = true;
          delayGO = 30;
          pendingDir = null;
        } else {
          for (var j = 0; j < foods.length; j++) {
            if (snake.body[0].col === foods[j].col && snake.body[0].row === foods[j].row) {
              snake.crecer();
              foods[j].respawn(snake);
              break;
            }
          }
        }
      }
    }
  if (gameOver) {
    if (delayGO > 0) { delayGO--; } else {
    p.push();
    p.fill(0, 0, 0, 200);
    p.noStroke();
    p.rect(0, 0, p.width, p.height);
    p.fill(255);
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(64);
    p.text('Game Over', p.width / 2, p.height / 3);
    p.textSize(32);
    p.text('¿Reiniciar?', p.width / 2, p.height / 2);
    p.textSize(28);
    p.fill(selectedOption === 0 ? 255 : 100);
    p.text('Sí', p.width / 2 - 50, p.height * 2 / 3);
    p.fill(selectedOption === 1 ? 255 : 100);
    p.text('No', p.width / 2 + 50, p.height * 2 / 3);
    p.pop();
    }
  }
};

  p.keyPressed = function () {
    if (gameOver) {
      if (delayGO > 0) return;
      if (p.keyCode === 37) { selectedOption = 0; return false; }
      if (p.keyCode === 39) { selectedOption = 1; return false; }
      if (p.keyCode === 13 || p.keyCode === 32) {
        if (selectedOption === 1) {
          closeModal();
          return false;
        }
        snake = new Snake(p);
        foods = [];
        for (var i = 0; i < 10; i++) {
          foods.push(new Food(p, CELL, snake));
        }
        go = true;
        gameOver = false;
        pendingDir = null;
        selectedOption = 0;
        return false;
      }
      return;
    }
  if (snake.dirLocked) return false;
  if (p.keyCode === 38) {
    if (!go) { go = true; snake.moveCounter = snake.moveDelay - 1; }
    else if (snake.speed.row !== 0) return false;
    pendingDir = { col: 0, row: -1 };
    snake.dirLocked = true;
    return false;
  } else if (p.keyCode === 40) {
    if (!go) { go = true; snake.moveCounter = snake.moveDelay - 1; }
    else if (snake.speed.row !== 0) return false;
    pendingDir = { col: 0, row: 1 };
    snake.dirLocked = true;
    return false;
  } else if (p.keyCode === 37) {
    if (!go) { go = true; snake.moveCounter = snake.moveDelay - 1; }
    else if (snake.speed.col !== 0) return false;
    pendingDir = { col: -1, row: 0 };
    snake.dirLocked = true;
    return false;
  } else if (p.keyCode === 39) {
    if (!go) { go = true; snake.moveCounter = snake.moveDelay - 1; }
    else if (snake.speed.col !== 0) return false;
    pendingDir = { col: 1, row: 0 };
    snake.dirLocked = true;
    return false;
  }
};
};
