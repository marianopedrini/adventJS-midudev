const letter = 'bici coche balón _playstation bici coche peluche';

function listGifts(letter) {
  let items = letter.split(' ');
  let gifts = {};

  items.forEach((each) => {
    let key = each;
    if (!each.includes('_') && each !== '') {
      if (!gifts[key]) {
        gifts[key] = 1;
      } else if (gifts[key]) {
        gifts[key] = gifts[key] + 1;
      }
    }
  });

  return gifts;
}
const regalos = listGifts(letter);

console.log(regalos);
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/

/* ---------- Better Version ----------*/

function listGifts(letter) {
  const obj = {};
  letter
    .split(' ')
    .filter((item) => !item.includes('_') && item !== '')
    .forEach((item) => (obj[item] = (obj[item] || 0) + 1));

  return obj;
}
