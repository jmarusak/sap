const SCRIPTS = require("/home/martinviewanalytics/repos/spa/jsbox/scripts.js");

function filter(array, test) {
  let filtered = [];
  for (let element of array) {
    if (test(element)) {
      filtered.push(element);
    }
  }
  return filtered;
}

function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

function reduce(array, combine, start) {
  let reduced = start;
  for (let element of array) {
    reduced = combine(reduced, element);
  }
  return reduced;
}

function characterCount(script) {
  return reduce(script.ranges, (count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

var scriptLargest = reduce(SCRIPTS, (a, b) => {
  return characterCount(a) < characterCount(b) ? b : a;
}, SCRIPTS[0]);

console.log(scriptLargest);
