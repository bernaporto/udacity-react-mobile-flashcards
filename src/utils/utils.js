export function generateUID() {
  return Math.random()
    .toString(36)
    .substring(2, 15) + Math.random()
    .toString(36)
    .substring(2, 15);
}

export function valuesToArray(obj) {
  return Array.from(Object.values(obj));
}

export function keysToArray(obj) {
  return Array.from(Object.keys(obj));
}

// reference: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export function shuffleArray(array) {
  const result = array.slice();

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}
