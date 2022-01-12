function sumPairs(numbers, result) {
  let pairOfNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (pairOfNumbers.length < 2) {
      pairOfNumbers[0] = numbers[i];
      for (let j = i + 1; j < numbers.length; j++) {
        if (result - pairOfNumbers[0] === numbers[j]) {
          pairOfNumbers.push(numbers[j]);
          return pairOfNumbers;
        }
      }
    }
  }
  return pairOfNumbers;
}

// sumPairs([3, 5, 7, 2], 10); // [3, 7]
sumPairs([-3, -2, 7, -5], 10); // null
// sumPairs([2, 2, 3, 1], 4); // [2, 2]
// sumPairs([6, 7, 1, 2], 8); // [6, 2]
// sumPairs([0, 2, 2, 3, -1, 1, 5], 6); // [1, 5]
