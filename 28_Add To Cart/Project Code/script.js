let products = [];
let cart = [];

// fetch Products from JSON

async function fetchProducts() {
  try {
    const response = await fetch("products.json");

    products = await response.json();
    displayProducts();
    console.log(products);
  } catch (error) {
    console.log("Error fetching Products : ", error);
  }
}


function displayProducts() {
    
}
