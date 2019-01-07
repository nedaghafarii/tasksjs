'use strict';
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let arr1 = arr.slice (0,3);
return arr1.join( "()");
let arr2 = arr.slice(3,3);
let arr3 = arr.slice(6,3);
return arr3.join("-");
let arr4 = [];
let result = arr4.concat(arr1, arr2, arr3);
console.log (result);

// test2
'use strit';
let arr = [1, 2, 'a', 'b'];
function arr1 (arr) {
  return arr.filter(function (value) {
    if (typeof value === 'number') {
      return value;
    }
  });
}

console.log(arr1(arr));
