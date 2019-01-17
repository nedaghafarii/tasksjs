
'use strict';
function sumDigits (num) {
  let reminder = 0;
  if (num < 0) {
    num *= -1;
  }
  while (num !== 0) {
    reminder += num % 10;
    num = Math.floor(num / 10);
  }
  return reminder;
}
console.log(sumDigits(-32));
