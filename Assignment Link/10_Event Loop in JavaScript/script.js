console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 0);

console.log("End");


// Note: Event Loop ye ensure karta hai ki:

//  1. Pehle synchronous code run ho,

//  2. Phir baad mein asynchronous code queue se uthake run ho jab stack khali ho.

