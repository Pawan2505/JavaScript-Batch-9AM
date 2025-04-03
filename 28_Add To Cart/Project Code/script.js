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

function displayProducts(filterText = "", sort = "") {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  let filterProducts = products.filter((p) =>
    p.name.toLowerCase().includes(filterText.toLowerCase())
  );

  if (sort === "low") {
    filterProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filterProducts.sort((a, b) => b.price - a.price);
  }

  filterProducts.forEach((product) => {
    const productCard = document.createElement("div");

    productCard.classList.add("product-card");

    productCard.innerHTML = `
    
    <img src="${product.image}" alt ="${product.name}">
    <h3>${product.name}</h3>
    <p>₹ ${product.price}</p>
    <button onclick ="addToCart(${product.id})">Add to cart</button>

    `;

    productList.appendChild(productCard);
  });
}

function addToCart(id) {
  const product = products.find((p) => p.id === id);

  const existingItem = cart.find((item) => item.id === id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartCount();
}

// Update cart Count

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
}

// view cart

function viewcart() {
  const cartPage = document.getElementById("cartPage");
  cartPage.classList.remove("hidden");
  const cartItems = document.getElementById("cart-items");

  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = `<p>Your cart is Empty!</p>`;
    return;
  }

  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
    
    <h3>${item.name}</h3>
    <p>₹ ${item.price}</p>
    <button onclick="decrementCart(${item.id})">-</button>
    <span>${item.quantity}</span>
    <button onclick="incrementCart(${item.id})">+</button>
    
    `;

    cartItems.appendChild(cartItem);
  });
}

// Quantity increment

function incrementCart(id) {
  cart = cart.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  );
  viewcart();
  updateCartCount();
}

// Quantity Decrement

function decrementCart(id) {
  cart = cart
    .map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    )
    .filter((item) => item.quantity > 0);
  viewcart();
  updateCartCount();
}

// close cart

function closeCart() {
  document.getElementById("cartPage").classList.add("hidden");
}

// Searching and Sorting

document.getElementById("searchBox").addEventListener("input", (e) => {
  displayProducts(e.target.value);
});

// Sort by price

document.getElementById("sortPrice").addEventListener("change", (e) => {
  displayProducts(document.getElementById("searchBox").value, e.target.value);
});

fetchProducts();
