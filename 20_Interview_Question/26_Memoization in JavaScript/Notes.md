### **Memoization in JavaScript**

#### **English Definition**:
Memoization is an optimization technique that helps to speed up programs by saving the results of expensive function calls. The saved results are stored in a **cache**, and if the function is called again with the same arguments, the result is returned from the cache, eliminating the need for the function to be recalculated.

---

#### **Hindi Definition**:
Agar aapke paas koi code likha hai jo pehli baar chalne par result de raha hai, to jab same code dobara call kiya jaye, to wo code phir se chalna padta hai, aur aapko wohi result fir se calculate karna padta hai. Lekin agar aap chahte hain ki jab aap same code ko dobara call karein to, jo pehli baar time laga tha, wo result kisi cache variable mein store ho jaye aur dobara same code chalne par wo result directly cache se mil jaye, bina code ko dobara execute kiye, to isse hum **memoization** kehte hain.

---

### **Step 1: Simple Function Without Memoization**

```javascript
let sum = 0;

function calculate(n) {
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.time();
console.log(calculate(10)); // First time calculation
console.timeEnd();
```

**Explanation**:
- The `calculate()` function sums numbers from 0 to `n`.
- The first time the function is called, it takes time to compute the result.
- **`console.time()` and `console.timeEnd()`** are used to measure the time taken by the function.

---

### **Step 2: Memoized Version**

```javascript
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
```

---

### **Note:**
1. **Cache**: Memoization uses a cache (usually an object) to store previously computed results for specific inputs.
2. **Efficiency**: Once the result is calculated for a particular input, it is saved in the cache. On subsequent calls with the same input, the function simply retrieves the result from the cache, saving time by avoiding recalculations.
3. **Time Optimization**: For functions with expensive calculations or recursive calls (e.g., Fibonacci), memoization significantly reduces time complexity.

---

### **Explanation of Code Flow:**
1. **First Call**:
   - The first time `efficient(5)` is called, it goes through the normal execution, calculates the result, and stores it in the `cache`.
2. **Second Call**:
   - When `efficient(5)` is called again, it **hits the cache** and directly returns the cached result, skipping the calculation and saving time.

---

### **Benefits of Memoization**:
- **Faster Execution**: Memoization prevents repeated calculations for the same input, speeding up the execution for future calls.
- **Efficient for Expensive Functions**: Memoization is especially useful for functions with high time complexity, like recursive functions.

---
