// Nested if-else Statement (Min, Max) (Comparisons for Min/Max)

// 1. Greatest of two numbers
let num1 = 100;
let num2 = 10;

// Compare num1 and num2 to find the greater number
if (num1 > num2) {
    console.log("Greater Num1");
} else if (num1 == num2) {
    console.log("Both are equal");
} else {
    console.log("Greater Num2");
}

// Method 2: Nested if-else approach
if (num1 >= num2) {
    if (num1 > num2) {
        console.log("Greater Num1");
    } else {
        console.log("Both are equal");
    }
} else {
    console.log("Greater Num2");
}

// 2. Greatest of three numbers
let num1 = 100;
let num2 = 10;
let num3 = 50;

// Compare num1, num2, and num3 to find the greatest number
if (num1 >= num2 && num1 >= num3) {
    console.log("Greatest Num1");
} else if (num2 >= num1 && num2 >= num3) {
    console.log("Greatest Num2");
} else {
    console.log("Greatest Num3");
}