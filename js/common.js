window.onload = (e) => {
  // if (cart) {
  //   cart.items.length != 0
  //     ? (document.getElementById("cart-number").innerHTML = cart.items.length)
  //     : document.getElementById("cart-number").remove();
  // }
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
