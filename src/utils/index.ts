export const randomInteger = (min: number, max: number) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

export const initRandomNumbersArray = (): any[] => {
  const set = new Set();
  while (set.size < 15) {
    set.add(randomInteger(1, 50));
  }
  return Array.from(set);
};

export function shuffle<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const generateId = () => {
  return Math.random().toString(16).slice(2);
};
