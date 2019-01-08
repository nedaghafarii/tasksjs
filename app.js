'use strict';
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function arr1 (arr) {
  let arr1 = arr.slice(0, 3);
  let string1 = arr1.join('');
  arr = arr.slice(3);
  let arr2 = arr.slice(0, 3);
  let string2 = arr2.join('');
  arr = arr.slice(3);
  let arr3 = arr.slice(0, 3);
  let string3 = arr3.join('');
  return '(' + string1 + ')' + string2 + '-' + string3;
}
console.log(arr1(arr));
// test2
// 'use strit';
// let arr = [1, 2, 'a', 'b'];
// function arr1 (arr) {
//   return arr.filter(value => (typeof value === 'number'));
// }
// console.log(arr1(arr));
