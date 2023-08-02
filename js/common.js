import products from "./data.js";

window.onload = (e) => {
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
      (document.getElementById("cart-number").innerHTML = cart.quantity);
  } else {
    document.getElementById("cart-number").remove();
  }
};
