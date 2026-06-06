/* Sound — envoltura de HTMLAudioElement para reproducir efectos
 * con control de volumen, pausa y detención.
 * Mantiene un registro estático de todas las instancias activas. */
/* Crea un Audio, configura volumen y lo registra en la lista estática */
var Sound = function(url, volume) {
  this.audio = new Audio(url);
  this.audio.volume = volume || 1;
  this.audio.preload = 'auto';
  Sound._instances.push(this);
};

Sound._instances = [];

/* Detiene y limpia todas las instancias de Sound activas */
Sound.stopAll = function() {
  for (var i = 0; i < Sound._instances.length; i++) {
    Sound._instances[i].stop();
  }
  Sound._instances = [];
};

/* Reproduce desde el inicio, rebobinando si ya sonaba */
Sound.prototype.play = function() {
  try {
    this.audio.currentTime = 0;
    var p = this.audio.play();
    if (p && p.catch) p.catch(function() {});
  } catch (e) {}
};

/* Pausa la reproducción */
Sound.prototype.pause = function() {
  this.audio.pause();
};

/* Detiene la reproducción y rebobina al inicio */
Sound.prototype.stop = function() {
  this.audio.pause();
  this.audio.currentTime = 0;
};

Sound.prototype.jump = function() {};
