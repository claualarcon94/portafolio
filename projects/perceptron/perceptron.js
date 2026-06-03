/* Perceptrón de una capa con 3 pesos (x, y, bias)
 * Ajusta sus pesos mediante la regla de aprendizaje
 * del perceptrón (error × entrada × tasa de aprendizaje).
 */

class Perceptron {
  constructor(p) {
    this.p = p;
    this.w = [p.random(-1, 1), p.random(-1, 1), p.random(-1, 1)];
    this.lr = 0.01;
  }

  /* Predice la clase de una entrada: 1 o -1 */
  guess(input) {
    var sum = 0;
    for (var i = 0; i < this.w.length; i++) {
      sum += input[i] * this.w[i];
    }
    return sum < 0 ? -1 : 1;
  }

  /* Ajusta los pesos según el error entre la predicción y el valor real */
  train(input, target) {
    var g = this.guess(input);
    var error = target - g;
    for (var i = 0; i < this.w.length; i++) {
      this.w[i] += error * input[i] * this.lr;
    }
  }

  /* Calcula la Y de la recta de decisión para una X dada */
  guessY(x) {
    return -(this.w[2] + this.w[0] * x) / this.w[1];
  }
}
