var assert = require('chai').assert;
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return number', function () {
      assert.strictEqual(arr1([1, 2, 'a', 'b']), [1, 2]);
    });
  });
});

function arr1 (arr) {
  return arr.filter(value => (typeof value === 'number'));
}
// task1
var assert = require('chai').assert;
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return digit', function () {
      assert.strictEqual(arr1([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), '(123)456-789');
    });
  });
});
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
