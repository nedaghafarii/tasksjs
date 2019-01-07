var assert = require('chai').assert;
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return number', function () {
      assert.equal([1, 2, 'a', 'b'], [1, 2]);
    });
  });
});

function arr1 (arr) {
    return arr.filter(function (value) {
      if (typeof value === 'number') {
        return value;
      }
    });