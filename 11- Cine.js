function shouldBuyFidelity(times) {
  const normalPrice = 12 * times;
  let specialPrice = 250;

  for (let i = 1; i <= times; i++) {
    specialPrice = specialPrice + 12 * 0.75 ** i;
  }
  if (normalPrice < specialPrice) {
    return false;
  }
  return true;
}

// console.log(shouldBuyFidelity(1)); // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(100)); // true -> Mejor comprar tarjeta fidelidad
