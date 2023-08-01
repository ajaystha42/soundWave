import products from "./data.js";

window.onload = (e) => {
  // if (cart) {
  //   cart.items.length != 0
  //     ? (document.getElementById("cart-number").innerHTML = cart.items.length)
  //     : document.getElementById("cart-number").remove();
  // }

  // function clearCart() {
  //   localStorage.removeItem("cart");
  //   localStorage.setItem("products", JSON.stringify(products));
  //   location.reload();
  // }

  document.querySelector(".clear-cart-btn").addEventListener("click", () => {
    localStorage.removeItem("cart");
    localStorage.setItem("products", JSON.stringify(products));
    location.reload();
  });

  const productsFromStorage = localStorage.getItem("products");
  if (!productsFromStorage) {
    localStorage.setItem("products", JSON.stringify(products));
  }
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (cart) {
    cart.items.length != 0 &&
      (document.getElementById("cart-number").innerHTML = cart.items.length);
  } else {
    document.getElementById("cart-number").remove();
  }
};
