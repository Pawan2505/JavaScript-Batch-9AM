let myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Data mil gaya!");
  } else {
    reject("Error aagayi!");
  }
});

myPromise.then((result) => {
    console.log("Success:", result); // resolve case
  })
  .catch((error) => {
    console.log("Error:", error); // reject case
  })
  .finally(() => {
    console.log("Cleanup: Promise handled."); // hamesha chalega
  });
