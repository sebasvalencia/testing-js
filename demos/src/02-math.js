function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}

function secondsConverter(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const residue = Math.floor((seconds % 3600) / 60);

  return `${hours}:${minutes}:${residue}`;
}

function cylinderVol(r, a) {
  return Math.ceil(Math.PI * r * r * a);
}

function promedio(array) {
  if (array.length === 0) return null;

  const sumNumbers = array.reduce((previous, current) => previous + current);

  return sumNumbers / array.length;
}

module.exports = {
  sum,
  multiply,
  divide,
  secondsConverter,
  promedio,
  cylinderVol,
};
