Promise.resolve(5)
  .then((num) => num * 2) 
  .then((num) => num + 3) 
  .then((result) => console.log(result)); 
