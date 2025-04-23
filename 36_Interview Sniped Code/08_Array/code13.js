let data = [10, 50, 20, 40, 30];
let first = -Infinity,
  second = -Infinity;

for (let num of data) {
  if (num > first) {
    second = first;
    first = num;
  } else if (num > second && num < first) {
    second = num;
  }
}

console.log("Second Largest:", second);
