let person = {
  name: "Pawan",
};

function greet(age, city) {
  console.log(
    `Hello, I am ${this.name}. I am ${age} years old and live in ${city}.`
  );
}

greet.call(person, 25, "India");
// Output: Hello, I am Pawan. I am 25 years old and live in India.



// Note:The call() method is used to invoke a function with a specified this value and arguments provided individually (comma-separated).
// 1. Is code mein call() method ka use kiya gaya hai, jo greet function ko person object ke context mein call karta hai aur arguments(25, "India") ko individually pass karta hai.
// 2. Yaha this person object ko refer karta hai, aur age aur city ko function ke arguments ke roop mein pass kiya gaya hai.