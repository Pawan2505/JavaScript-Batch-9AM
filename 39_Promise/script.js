// Promise state -> 3
// resolve -> successfuly complete
// pending -> work in process
// reject -> failed

// .then() -> resolve
// .catch() -> error
// .finally() -> always run

// create Promise

// let myPromise = new Promise((resolve, reject) => {
//   let success = false;

//   if (success) {
//     resolve("Promise pura ho gaya!");
//   } else {
//     reject("Faild!");
//   }
// });

// // promise result handle

// myPromise
//   .then((data) => console.log("Successful : ", data))
//   .catch((error) => console.log("Error : ", error))
//   .finally(() => console.log("Cleanup : Promise Handled!"));

// let URL = "https://dummyjson.com/products";

// fetch(URL)
//   .then((resopnse) => console.log(resopnse))
//   .then((data) => data.json())
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// let URL = "https://dummyjson.com/products";
// let response = new Promise(async (resolve, reject) => {
//   try {
//     let data = await fetch(URL);

//     jsondata = await data.json();

//     resolve(jsondata);
//   } catch (error) {
//     reject("Faild");
//   }
// });

// response.then((data) => console.log(data)).catch((error) => console.log(error));

 let URL = "https://dummyjson.com/products";
async function response() {
  try {
      let data = await fetch(URL);
      console.log(data);
    jsondata = await data.json();
    console.log(jsondata);
  } catch (error) {
    console.log("Field!");
  }
}
