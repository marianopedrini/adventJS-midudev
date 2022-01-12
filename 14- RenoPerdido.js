function missingReindeer(ids) {
  ids.sort();
  let reindeer = ids.length;
  for (let i = 0; i < ids.length; i++) {
    if (ids[i] !== i) {
      reindeer = i;
      break;
    }
  }
  return reindeer;
}

missingReindeer([0, 2, 3]); // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0, 8, 9, 10, 11, 12, 13, 14, 15, 16]); // -> 4
missingReindeer([0, 1]); // -> 2 (¡es el último el que falta!)
missingReindeer([3, 0, 1]); // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]); // -> 8
missingReindeer([0]); // -> 1 (¡es el último el que falta!)
