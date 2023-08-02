import products from "./data.js";

// initialize a class object
export let cart = {
  items: [],
  quantity: 0,
  price: 0,
};

// function to save cart in localstorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Load cart from local storage
function loadCart() {
  cart = JSON.parse(localStorage.getItem("cart"));
}
if (localStorage.getItem("cart") != null) {
  loadCart();
}

export const cartFunction = (action, payload) => {
  if (action === "ADD") {
    // get products
    const productsFromStorage = localStorage.getItem("products");
    let arr = [];
    if (productsFromStorage) {
      arr = [...JSON.parse(productsFromStorage)];
    } else arr = [...products];
    const item = arr.find((product) => product.id === payload); // get item that has id
    const itemIndex = arr.findIndex((product) => product.id === payload); // get index of the item
    cart.items = [...cart.items, item]; // add the item on the cart items object

    cart.quantity = cart.items.length; // Get the number of the cart items

    let new_price = 0;
    cart.items.forEach((item) => {
      new_price += item.price;
    });
    cart.price = new_price.toFixed(2);

    // Updating all products
    arr[itemIndex].availableQuantity -= 1;
    localStorage.setItem("products", JSON.stringify(arr));

    saveCart(cart);
    location.reload();
  }
};
