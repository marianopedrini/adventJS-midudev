function contains(store, product) {
  let founded = false;
  for (const key of Object.values(store)) {
    if (typeof key === 'object') {
      if (contains(key, product)) founded = true;
    } else if (key === product) founded = true;
  }
  return founded;
}

const otroAlmacen = {
  baul: {
    fondo: {
      objeto: 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando',
    },
  },
};

console.log(contains(otroAlmacen, 'gameboy'));
