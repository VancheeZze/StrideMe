/**
* A generic currency filter
*
* Example:
* {{ 1000000 | currency }}            => $ 1.000.000,00
* {{ 1000000.65 | currency }}         => $ 1.000.000,65
* {{ 1000000 | currency('%') }}       => % 1.000.000,00
*/

const currency = function (value, symbol = '$') {
  if (!value) return ''
  let val = (value / 1).toFixed(2).replace('.', ',')
  return `${symbol} ${val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
}

export default {
  currency
}
