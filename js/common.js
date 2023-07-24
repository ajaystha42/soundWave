window.onload = (e) => {
  // if (cart) {
  //   cart.items.length != 0
  //     ? (document.getElementById("cart-number").innerHTML = cart.items.length)
  //     : document.getElementById("cart-number").remove();
  // }
  cart = JSON.parse(localStorage.getItem("cart"));
  if (cart) {
    cart.items.length != 0 &&
      (document.getElementById("cart-number").innerHTML = cart.items.length);
  } else {
    document.getElementById("cart-number").remove();
  }
};
