var Sound = function(url, volume) {
  this.audio = new Audio(url);
  this.audio.volume = volume || 1;
  this.audio.preload = 'auto';
  Sound._instances.push(this);
};

Sound._instances = [];

Sound.stopAll = function() {
  for (var i = 0; i < Sound._instances.length; i++) {
    Sound._instances[i].stop();
  }
  Sound._instances = [];
};

Sound.prototype.play = function() {
  try {
    this.audio.currentTime = 0;
    var p = this.audio.play();
    if (p && p.catch) p.catch(function() {});
  } catch (e) {}
};

Sound.prototype.pause = function() {
  this.audio.pause();
};

Sound.prototype.stop = function() {
  this.audio.pause();
  this.audio.currentTime = 0;
};

Sound.prototype.jump = function() {};
