'use strict';
// session 1

// task1
let user = { name: 'john', year: 30 };
let { name, year: age, isAdmin = false } = user;
alert(name);
alert(age);
alert(isAdmin);

// task2
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

// session 2

// task 1
let date = new Date(2012, 1, 20, 3, 12);
console.log(date);

// task 2
let date = new Date(2012, 0, 3);
function getWeekDay (date) {
  let day = date.getDay();
  let arr = ['sun', 'mon', 'tus', 'wed', 'thur', 'fri', 'sat' ];
  return arr[day];
}
console.log(getWeekDay(date));

// task 3
let date = new Date(2012, 0, 3);
function getWeekDay (date) {
  let day = date.getDay();
  let arr = ['یک شنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنج شنبه', 'جمعه', 'شنبه'];
  return arr[day];
}
alert(getWeekDay(date));

// task 4
let date = new Date(2015, 0, 2);
function getDateAgo (date, yesterday) {
  let day = date.getDate();
  let result = new Date(date);
  result.setDate(day - yesterday);
  return result.getDate();
}
alert(getDateAgo(date, 2));

// task 5
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
alert(getLastDayOfMonth(2012, 1));

// task 6
function getSecondsToday () {
  let date = new Date();
  return (date.getHours() * 60 * 60) + (date.getMinutes() * 60) + date.getSeconds();
}
alert(getSecondsToday() + ' s');

// task 7
function getSecondsToTomorrow () {
  let date = new Date();
  return 86400 - (date.getHours() * 60 * 60) + (date.getMinutes() * 60) + (date.getSeconds());
}
alert(getSecondsToTomorrow() + ' s');

// task 9
let user = {
  name: 'john smith',
  age: 35
};
let json = JSON.stringify(user);
let obj = JSON.parse(json);
console.log(obj);

// session 3

// task 1

function benchmark (fn) {
  let n = 1000;
  let start = Date.now();
  for (let i = 0; i < 1000; i++) {
    fn(n);
  }
  return Date.now() - start;
}
console.log('recursion:' + benchmark(sumTo) + ' ms');
console.log('for:' + benchmark(sumToFor) + ' ms');

// recursion
function sumTo (n) {
  return ((n - 1) === 0) ? n : n + (sumTo(n - 1));
}

// for
function sumToFor (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
// for fastest!
// can not we use recursion to count sumTo(100000)

// task2
function factorial (n) {
  return ((n === 1) ? 1 : n * factorial(n - 1));
}
console.log(factorial(5));

// task3
function fib (n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } return (fib(n - 1) + fib(n - 2));
}
console.log(fib(7));

// session 4
// task 1
function sum (n) {
  return function (m) {
    return n + m;
  };
}
console.log(sum(1)(2));

// task 2
let arr = [1, 2, 3, 4, 5, 6, 7];
function inbetween (n, m) {
  return valuse => valuse >= n && valuse <= m;
}
console.log(arr.filter(inbetween(3, 6)));
