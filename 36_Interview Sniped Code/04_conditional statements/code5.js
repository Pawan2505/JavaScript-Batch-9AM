let amount = 10000;
let rate;

if (amount < 5000) {
  rate = 5;
} else if (amount <= 10000) {
  rate = 7;
} else {
  rate = 10;
}

let interest = (amount * rate) / 100;
console.log("Interest:", interest);
