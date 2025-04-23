let arr = [1, 2, 3, 4, 5];
let rotateBy = 2;

for (let i = 0; i < rotateBy; i++) {
  let last = arr.pop();
  arr.unshift(last);
}

console.log("Rotated Array:", arr);
