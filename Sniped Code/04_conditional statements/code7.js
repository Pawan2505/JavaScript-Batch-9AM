let units = 120;
let bill;

if (units <= 100) {
  bill = units * 5;
} else if (units <= 200) {
  bill = 100 * 5 + (units - 100) * 8;
} else {
  bill = 100 * 5 + 100 * 8 + (units - 200) * 10;
}

console.log("Total Bill:", bill);
