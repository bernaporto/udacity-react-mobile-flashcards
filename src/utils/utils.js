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
