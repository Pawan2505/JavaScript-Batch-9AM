function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1: getData()");  
      resolve("DataA");
    }, 1000);
  });
}

function getMoreData(a) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2: getMoreData() with:", a);
      resolve(a + " + DataB");
    }, 1000);
  });
}


// Async function to handle all steps
async function getAllData() {
  // let a = await getData(); // Step 1
  // let b = await getMoreData(a); // Step 2
  // console.log("Final Result:", b); // Final Output
}

// Call the main function
getAllData();
