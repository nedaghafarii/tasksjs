// session 1
// task2
var assert = require('chai').assert;
describe('topSalaries', function () {
  it('should return pete', function () {
    assert.equal(topSalaries(salaries), 'pete');
  });
});
let salaries = {
  'john': 100,
  'pete': 300,
  'mary': 250
};
function topSalaries () {
  let max = 0;
  let top;
  for (let [key, value] of Object.entries(salaries)) {
    if (value >= max) {
      top = key;
      max = value;
    }
  }
  return top;
}
console.log(topSalaries(salaries));

// session2
// task 2
var assert = require('chai').assert;
describe('get weekday', function () {
  it('should return tus day', function () {
    assert.equal(getWeekDay(date), 'tus');
  });
});
let date = new Date(2012, 0, 3);
function getWeekDay (date) {
  let day = date.getDay();
  let arr = ['sun', 'mon', 'tus', 'wed', 'thur', 'fri', 'sat' ];
  return arr[day];
}
console.log(getWeekDay(date));

// task 3
var assert = require('chai').assert;
describe('get weekday', function () {
  it('should return سه شنبه', function () {
    assert.equal(getWeekDay(date), 'سه شنبه');
  });
});
let date = new Date(2012, 0, 3);
function getWeekDay (date) {
  let day = date.getDay();
  let arr = ['یک شنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنج شنبه', 'جمعه', 'شنبه'];
  return arr[day];
}
console.log(getWeekDay(date));

// task4
var assert = require('chai').assert;
describe('get dateago', function () {
  it('should return dateago 1', function () {
    assert.equal(getDateAgo(date, 1), 1);
  });
  it('should return dateago 2', function () {
    assert.equal(getDateAgo(date, 2), 31);
  });
  it('should return dateago 365', function () {
    assert.equal(getDateAgo(date, 365), 2);
  });
});
let date = new Date(2015, 0, 2);
function getDateAgo (date, yesterday) {
  let day = date.getDate();
  let result = new Date(date);
  result.setDate(day - yesterday);
  return result.getDate();
}
console.log(getDateAgo(date, 2));

// task 5
var assert = require('chai').assert;
describe('get lastday of month', function () {
  it('should return 29', function () {
    assert.equal(getLastDayOfMonth(2012, 1), 29);
  });
});
function getLastDayOfMonth (year, month) {
  if (month === (0 || 2 || 4 || 6 || 7 || 9 || 11)) {
    return 31;
  } else if (month === (3 || 5 || 8 || 10)) {
    return 30;
  }
  if ((year % 4 === 0) && (year % 100 !== 0)) {
    return 29;
  }
  if (year % 100 === 0 && year % 400 === 0) {
    return 29;
  }
  return 28;
}
console.log(getLastDayOfMonth(2012, 1));

// session 3
// task 1
var assert = require('chai').assert;
describe('sumTo', function () {
  it('should return one', function () {
    assert.equal(sumTo(1), 1);
  });
  it('should return 3', function () {
    assert.equal(sumTo(2), 3);
  });
  it('should return 6', function () {
    assert.equal(sumTo(3), 6);
  });
  it('should return 5050', function () {
    assert.equal(sumTo(100), 5050);
  });
});
// for
function sumTo (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumTo(100));
// recursion
var assert = require('chai').assert;
describe('sumTo', function () {
  it('should return one', function () {
    assert.equal(sumTo(1), 1);
  });
  it('should return 3', function () {
    assert.equal(sumTo(2), 3);
  });
  it('should return 6', function () {
    assert.equal(sumTo(3), 6);
  });
  it('should return 5050', function () {
    assert.equal(sumTo(100), 5050);
  });
});
function sumTo (n) {
  return ((n - 1) === 0) ? n : n + (sumTo(n - 1));
}
console.log(sumTo(1));

// task 2
var assert = require('chai').assert;
describe('factorial', function () {
  it('should return 1', function () {
    assert.equal(factorial(1), 1);
  });
  it('should return 2', function () {
    assert.equal(factorial(2), 2);
  });
  it('should return 6', function () {
    assert.equal(factorial(3), 6);
  });
  it('should return 120', function () {
    assert.equal(factorial(5), 120);
  });
});
function factorial (n) {
  return ((n === 1) ? 1 : n * factorial(n - 1));
}
console.log(factorial(5));

// task3
var assert = require('chai').assert;
describe('fibonacci', function () {
  it('should return 2', function () {
    assert.equal(fib(3), 2);
  });
  it('should return 7', function () {
    assert.equal(fib(7), 13);
  });
});
function fib (n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } return (fib(n - 1) + fib(n - 2));
}
console.log(fib(3));

// session 4
// task1
var assert = require('chai').assert;
describe('sum numbers', function () {
  it('should return 3', function () {
    assert.equal(sum(1)(2), 3);
  });
  it('should return 4', function () {
    assert.equal(sum(5)(-1), 4);
  });
});
function sum (n) {
  return function (m) {
    return n + m;
  };
}
console.log(sum(1)(2));

// task2
var assert = require('chai').assert;
describe('inbetween', function () {
  it('should return [3, 4, 5, 6]', function () {
    assert.deepEqual(arr.filter(inbetween(3, 6)), [3, 4, 5, 6]);
  });
});
let arr = [1, 2, 3, 4, 5, 6, 7];

function inbetween (n, m) {
  return valuse => valuse >= n && valuse <= m;
}
console.log(arr.filter(inbetween(3, 6)));
