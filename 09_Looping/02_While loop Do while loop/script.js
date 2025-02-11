// 1. Sum of digits of a number
// 👉 Find the sum of digits of an input number.

// let num = 12345;

// let sum = 0;

// while(num > 0){
//     let digits = num%10;

//     sum += digits;

//     num = Math.floor(num/10);
// }

// console.log(sum);

// 2. Reverse of a number
// 👉 Reverse a given number (e.g., 1234 → 4321).

// let num = 1256;

// let rev = 0;

// while(num > 0){
//     let digit = num%10;
//     rev = rev*10 +digit;
//     num = Math.floor(num/10);
// }

// console.log(rev);

// 3. Power of a number
// 👉 Compute X^Y (X raised to the power Y) without using pow() function.

// Method : 1

// let num = 2;
// let x = 3;

// let ans = Math.pow(num,x);

// console.log(ans);

// Method 2 :

// function power(num, exp){

//     let result = 1;

//     for(let i =1; i <= exp; i++){
//         result *= num;
//     }

//     return result;
// }

// let num = 2;
// let exp = 3;

// let ans = power(num,exp);

// console.log(ans);

// 4. Palindrome number
// 👉 Check if a number reads the same forward and backward (e.g., 121, 1221).

// let num = 1121; //  => 1211

// let temp = num;

// let rev = 0;

// while(num > 0){
//     let digit = num%10;

//     rev = rev*10 + digit;

//     num = Math.floor(num/10);

// }

// if(temp == rev){
//     console.log("Palindrome number")
// }else{
//     console.log("Not Palindrome number")
// }

// 5. Armstrong number
// 👉 Check if a number is equal to the sum of the cubes of its digits (e.g., 153 = 1³ + 5³ + 3³).

// step 1 : count digit of number

// step 2 : last digit remove => power -> count

// step 3 :  sum - > every digit power

// let num =  1634;

// let temp = num;

// let numstr = num.toString().length;

// let sum = 0;

// while(num > 0){

//     let digit = num%10;

//     sum += Math.pow(digit,numstr);

//     num = Math.floor(num/10);

// }

// if(temp == sum){
//     console.log("Armstrong number")
// }else{
//     console.log("Not Armstrong number")
// }

// 6. Finding Fibonacci Series up to N terms
// 👉 Print the first N terms of the Fibonacci sequence.

// 0,1,1,2,3,5,8,13..

// let n1 = 0;
// let n2 = 1;

// console.log(n1);
// console.log(n2);

// let series = 10;

// for(let i = 2; i < series; i++){
//     let n3 = n1+n2;
//     console.log(n3);
//     n1 = n2;
//     n2 = n3;
// }

// 7. Strong number
// 👉 A number where the sum of the factorial of its digits equals the number itself (e.g., 145 = 1! + 4! + 5!).

// function fact(num){
//     if(num == 0 || num == 1){
//         return 1;
//     }

//     return num * fact(num-1);
// }

// let num = 405855;

// let sum = 0;

// let temp = num;

// while(num > 0){
//     let digit = num%10;
//     sum += fact(digit);
//     num = Math.floor(num/10);
// }

// console.log(sum)

// if(temp == sum){
//     console.log("Strong number")
// }else{
//     console.log("Not Strong number")
// }

//  8. Perfect number
// 👉 A number whose sum of divisors (excluding itself) equals the number (e.g., 6 = 1 + 2 + 3).

// function sumfactor(num){
//     let sum = 0;

//     for(let i = 1; i < num; i++){
//         if(num%i == 0){
//             sum += i;
//         }
//     }

//     return sum;
// }

// let num = 495;

// let dv = sumfactor(num);

// if(num%dv == 0){
//     console.log("Perfect number");
// }else{
//     console.log("Not Perfect number");
// }

//  9. Automorphic number
// 👉 A number whose square ends with the same digits as the number itself (e.g., 5² = 25, 25² = 625).

// let num = 4;

// let numstr = num.toString();

// let numsqr = num*num;

// let numsqrstr = numsqr.toString();

// if(numsqrstr.endsWith(numstr)){
//     console.log("Automorphic number");
// }else{
//     console.log("Not Automorphic number");
// }




// 10. Harshad number
// 👉 A number that is divisible by the sum of its digits (e.g., 18: 1+8 = 9 and 18 % 9 == 0).

// function sumdigit(num){
//     let sum = 0;

//     while(num>0){
//         let digit = num%10;
//         sum += digit;
//         num = Math.floor(num/10);
//     }

//     return sum;
// }

// let num = 1721;

// let dv = sumdigit(num);

// if(num%dv == 0){
//     console.log("Harshad number");
// }else{
//     console.log("Not Harshad number");
// }



//  11. Abundant number
// 👉 A number whose sum of proper divisors is greater than the number itself. The first abundant number is 12, with a sum of proper divisors of 16 (\(1+2+3+4+6\)).


// function sumfact(num){
//     let sum = 0;

//     for(let i = 1; i < num; i++){
//         if(num%i == 0){
//             sum += i;
//         }
//     }

//     return sum;
// }

// let num = 5;

// let sumValue = sumfact(num);

// if(sumValue>num){
//     console.log(" Abundant number");
// }else{
//     console.log("Not Abundant number");
// }

// 12. Friendly pair
// 👉 Two numbers are a friendly pair if their sum of divisors divided by the number itself is equal (e.g., 6 & 28).


function friendlyPair(num1, num2){

let sum1 = 0;

for(let i = 1; i <= num1; i++){
    if(num1%i == 0){
        sum1 += i;
    }
}

let sum2 = 0;

for(let i = 1; i <= num2; i++){
    if(num2%i == 0){
        sum2 += i;
    }
}

return sum1/num1 == sum2/num2;

}

let num1 = 4321;
let num2 = 4680;

if(friendlyPair(num1, num2)){
    console.log("Friendly pair")
}else{
    console.log("Not Friendly pair")
}



/********************************************************************** */

// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// let i = 5;
// while (i >=1) {
//     console.log(i);
//     i--;
// }

// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 5);

// let i = 5;
// do {
//     console.log(i);
//     i--;
// } while (i >= 1);

// let i = -5;
// do {
//     console.log(i);
//     i--;
// } while (i >= 1);

// let arr = [];

// arr.push(10);
// arr.push(20);
// arr.push(30);
// arr.push(40);

// console.log(arr);
// console.log(arr.length);

// arr.pop();

// console.log(arr)
