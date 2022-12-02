export function getRandom(n) {
  return Math.floor(Math.random(n));
}

export function getRandomMinMax(min = 0, max = 100) {
  return getRandom(max - min) + min;
}
