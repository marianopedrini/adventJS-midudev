const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
];

// function contarOvejas(ovejas) {
//   let filtered = [];
//   ovejas.forEach((each) => {
//     each.color === 'rojo' &&
//       (each.name.includes('n') || each.name.includes('a')
//         ? filtered.push(each)
//         : '');
//   });
//   return filtered;
// }

function contarOvejas(ovejas) {
  // aquí tu magia
  return ovejas.filter(
    (each) =>
      each.color == 'rojo' &&
      each.name.toLowerCase().includes('n') &&
      each.name.toLowerCase().includes('a')
  );
}

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);
