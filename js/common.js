import { cart } from "./cart.js";

window.onload = (e) => {
  if (cart) {
    cart.items.length != 0
      ? (document.getElementById("cart-number").innerHTML = cart.items.length)
      : document.getElementById("cart-number").remove();
  }
};
