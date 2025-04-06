let URL = "https://dummyjson.com/products";

async function fetchData() {
  try {
      let response = await fetch(URL);
      console.log(response)
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error occurred:", error);
  }
}

fetchData();
