
//  Create array

// let arr = [10,29,37]

// console.log(arr)

// let arr = [10,29,37,90.7,"Pawan",true,'a']

// print array

// console.log(arr)

let arr = []  // empty array
console.log(arr);

// 1. push() -> insert element at end of array
arr.push(10)

console.log(arr);
arr.push(20)
arr.push(30)
arr.push(40)
arr.push(50)

// arr.push(20,30,40,50)

console.log(arr);

// 2. pop() : it remove only one eleent from last index of array

console.log(`Deleted element from array :  ${arr.pop()}`)

console.log(arr)


// 3. shift() : only one remove -> element

console.log("Element remove from start index of array : ",arr.shift())

console.log(arr)

// 4. unshift()
arr.unshift(100,200,300,400)

console.log(arr)

// 5. splice()

// arr.splice(start, deletecount, insert)

// arr.splice(2,2,11,23,45,77,8,9)


// console.log(arr)
// console.log(arr[2])

// 6. slice()

// console.log(arr.slice(1,5));

// 7. at()

// console.log(arr.at(2))

// 8. indexOf()

// console.log(arr.indexOf(11))

// 9. arr.length

// console.log(arr.length);

// 10. includes()

// console.log(arr.includes(200))

// console.log("Even Number : ")

// arr.filter((item) => {
//     if(item%2 == 0){
//         console.log(item)
//     }
// })

// console.log(arr)

// 11. filter()

// let brr = arr.filter((item) => item%2 == 0)

// console.log(brr)

//12. forEach()

// arr.forEach((item) =>{
//     console.log(item);
// })

// arr.forEach((item) =>console.log(item))

// map, reduce, 