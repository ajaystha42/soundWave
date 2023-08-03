import products from "./data.js";
import { cartFunction } from "./cart.js";

$(document).ready(function () {
  // getting url parameters (id) from url
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const id = parseInt(urlParams.get("id"));

  // Check if product exists in local storage
  const productsFromStorage = localStorage.getItem("products");
  let arr = [];
  if (productsFromStorage) {
    arr = [...JSON.parse(productsFromStorage)];
  } else arr = [...products];

  // get the product based on id using array.find() method
  const product = arr.find((product) => product.id === id);

  if (product) {
    // display product details on the page using jquery
    $(".product-title").text(product.name);
    $(".product-desc").text(product.description);
    $(".product-price").text("$" + product.price);

    $(".available-qty").text(
      `Only ${product.availableQuantity} items left in stock`
    );

    $(".main-img-div").prepend(
      `<img class="main-img" src=".${product.images[0]}" />`
    );
    $(".secondary-img-div").prepend(
      `<img id="img1" class="sec-img" src=".${product.images[0]}" />
          <img id="img2" class="sec-img" src=".${product.images[0]}" />`
    );

    // Check if the product is available
    // Disable the add-to-cart button if the available qualtity is 0
    if (product.availableQuantity <= 0) {
      $("#add-to-cart-btn").prop("disabled", true).addClass("disabled");
      $(".available-qty").text(`No items left in stock`);
    } else {
      $("#add-to-cart-btn").on("click", function () {
        cartFunction("ADD", product.id);
      });
    }
  }

  // Navbar menu button on tablet and mobile devices
  document.querySelector(".nav-menu-btn").addEventListener("click", () => {
    document.querySelector(".nav").classList.toggle("show");
  });

  // Clear the cart when user clicks on Clear Cart button
  document.querySelector(".clear-cart-btn").addEventListener("click", () => {
    localStorage.removeItem("cart");
    localStorage.setItem("products", JSON.stringify(products));
    location.reload();
  });
});
