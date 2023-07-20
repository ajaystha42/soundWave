import { cart } from "./cart.js";

window.onload = (e) => {
  cart.items.length != 0
    ? (document.getElementById("cart-number").innerHTML = cart.items.length)
    : document.getElementById("cart-number").remove();
};
