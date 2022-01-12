function wrapGifts(gifts) {
  let result = [];
  if (gifts.length !== 0) {
    let topBottom = '**';
    for (let i = 0; i < gifts.length; i++) {
      topBottom = `*${'*'.repeat(gifts[i].length)}*`;
      result.push(`*${gifts[i]}*`);
      if (i === gifts.length - 1) {
        result.push(topBottom);
        result.unshift(topBottom);
      }
    }
  }
  console.log(result);
  return result;
}

wrapGifts(['📷', '⚽️']);
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

wrapGifts(['🏈🎸', '🎮🧸']);
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

wrapGifts(['📷']);
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/
