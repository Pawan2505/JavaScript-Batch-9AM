async function fetchData() {
  try {
      let response = await fetch("https://dummyjson.com/products");
      console.log(response)
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error occurred:", error);
  }
}

fetchData();
