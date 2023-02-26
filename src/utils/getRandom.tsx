export function getRandom(n: number) {
  return Math.floor(Math.random() * n);
}

export const getRandomMinMax = (min = 0, max = 100) =>
  getRandom(max - min) + min;
