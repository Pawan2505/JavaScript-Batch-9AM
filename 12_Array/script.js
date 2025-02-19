// ******************** ARRAY METHODS IN JAVASCRIPT ********************

// 1. Creating an array
let arr = [];  // Empty array
console.log(arr);

// 2. push() -> Adds elements to the end of the array
arr.push(10);
console.log(arr);

arr.push(20, 30, 40, 50); // Multiple elements can be added at once
console.log(arr);

// 3. pop() -> Removes the last element from the array
console.log(`Deleted element from array: ${arr.pop()}`);
console.log(arr);

// 4. shift() -> Removes the first element from the array
console.log("Element removed from start index: ", arr.shift());
console.log(arr);

// 5. unshift() -> Adds elements at the beginning of the array
arr.unshift(100, 200, 300, 400);
console.log(arr);

// 6. splice(start, deleteCount, insertItems...) 
// -> Modifies an array by removing, replacing, or adding elements
// Example: Removing 2 elements from index 2 and adding new elements
arr.splice(2, 2, 11, 23, 45, 77, 8, 9);
console.log(arr);

// 7. slice(start, end) 
// -> Returns a shallow copy of a portion of an array without modifying the original
console.log(arr.slice(1, 5)); // Extracts elements from index 1 to 4

// 8. at(index) -> Returns the element at the specified index
console.log(arr.at(2)); // Element at index 2

// 9. indexOf(element) -> Returns the first index of the specified element, -1 if not found
console.log(arr.indexOf(11)); 

// 10. arr.length -> Returns the total number of elements in the array
console.log(arr.length);

// 11. includes(element) -> Checks if an element exists in the array (returns true/false)
console.log(arr.includes(200));

// 12. filter(callback) -> Returns a new array with elements that satisfy the condition
// Example: Filtering even numbers
let evenNumbers = arr.filter((item) => item % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// 13. forEach(callback) -> Iterates over an array and executes a function for each element
arr.forEach((item) => console.log(item));

// 14. map(callback) -> Creates a new array by applying a function to each element
let squaredNumbers = arr.map((item) => item * item);
console.log("Squared Numbers:", squaredNumbers);

// 15. reduce(callback, initialValue) 
// -> Reduces the array to a single value (e.g., sum of all elements)

// let sum = arr.reduce((sum, item) => sum + item, 0);
// console.log("Sum of array elements:", sum);

// let arr1 = [10,20,30,40,50,60]

// let add = arr1.reduce((result,element) => result+element,0)

// console.log(add);


