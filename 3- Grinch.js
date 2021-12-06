const letter1 = 'bici coche (balón) bici coche peluche'; // -> ✅
const letter2 = '(muñeca) consola bici'; // ✅

const letter3 = 'bici coche (balón bici coche'; // -> ❌
const letter4 = 'peluche (bici [coche) bici coche balón'; // -> ❌
const letter5 = '(peluche {) bici'; // -> ❌
const letter6 = '() bici'; // ❌
const letter7 = '(()) bici'; // ❌

function isValid(letter) {
  if (
    letter.includes('{') ||
    letter.includes('}') ||
    letter.includes('[') ||
    letter.includes(']') ||
    letter.match(/\(\)/)
  ) {
    return false;
  }

  if (letter.match(/\(.*?/)) {
    if (letter.match(/\(([^)]+)\)/)) {
      return true;
    }
    return false;
  }
}

console.log(isValid(letter1));
console.log(isValid(letter2));
console.log(isValid(letter3));
console.log(isValid(letter4));
console.log(isValid(letter5));
console.log(isValid(letter6));
console.log(isValid(letter7));
