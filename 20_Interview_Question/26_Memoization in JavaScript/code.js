// let sum = 0;

// function calculate(n) {
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.time();
// console.log(calculate(10)); // First time calculation
// console.timeEnd();


function calculate(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}


function memoize(fun) {
  let cache = {}; // Store results in cache

  return function (...args) {
    let n = args[0]; // Assume we are working with a single argument

    if (n in cache) {
      // If result is cached, return the cached value
      console.log("Cache hit, no recalculation!");
      return cache[n];
    } else {
      // If result is not cached, calculate and store it
      console.log("Calculating for the first time...");
      let result = fun(n);
      cache[n] = result; // Store result in cache
      return result;
    }
  };
}

console.time();
const efficient = memoize(calculate);
console.log(efficient(5)); // First time, will calculate
console.timeEnd();

console.time();
console.log(efficient(5)); // Second time, will use cached result
console.timeEnd();