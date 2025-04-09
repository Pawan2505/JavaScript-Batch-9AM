let a = 10,
  b = 25,
  c = 18;

if (a > b) {
  if (a > c) {
    console.log("Max is A:", a);
  } else {
    console.log("Max is C:", c);
  }
} else {
  if (b > c) {
    console.log("Max is B:", b);
  } else {
    console.log("Max is C:", c);
  }
}
