let errorPromise = new Promise((resolve, reject) => {
  reject("Something went wrong!");
});

errorPromise
  .then((data) => console.log(data))
  .catch((err) => console.log("Caught:", err));
