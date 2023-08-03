/*
Group Members:
        Ajay Shrestha
        Gaurab Pokhrel
        Nirajan Karki
        Sakar Thapa
*/
import products from "./data.js";

//clear cart count
window.onload = (e) => {
  document.querySelector(".clear-cart-btn").addEventListener("click", () => {
    localStorage.removeItem("cart");
    localStorage.setItem("products", JSON.stringify(products));
    location.reload();
  });

  //get products list from the local storage.
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
