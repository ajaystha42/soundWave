import { cart } from "./cart.js";

window.onload = (e) => {
  document.getElementById("cart-number").innerHTML = cart.items.length;
};
