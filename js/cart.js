import products from "./data.js";

export let cart = {
  items: [],
  quantity: 0,
  price: 0,
};

// source: https://codepen.io/chrisachinga/pen/MWwrZLJ
//
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Load cart
function loadCart() {
  cart = JSON.parse(localStorage.getItem("cart"));
}
if (localStorage.getItem("cart") != null) {
  loadCart();
}

export const cartFunction = (action, payload) => {
  console.log("ID IS ", payload);
  if (action === "ADD") {
    const item = products.find((product) => product.id === payload);
    cart.items = [...cart.items, item];

    cart.quantity = cart.items.length;

    let new_price = 0;
    cart.items.forEach((item) => {
      new_price += item.price;
    });
    cart.price = new_price.toFixed(2);

    console.log(cart);
    saveCart(cart);
    location.reload();
  }

  if (action === "REMOVE") {
    cart.items.filter((item) => item.id !== payload);
  }
  return cart;
};
