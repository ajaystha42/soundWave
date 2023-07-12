import products from "./data.js";

// $(document).ready(function () {
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const id = parseInt(urlParams.get("id"));

// get the product based on id using array.find() method
const product = products.find((product) => product.id === id);

console.log(product.name);

$(".product-title").text(product.name);
$(".product-desc").text(product.description);
$(".product-price").text("$" + product.price);

$(".main-img-div").prepend(
  `<img class="main-img" src="${product.images[0]}" />`
);
$(".secondary-img-div").prepend(
  `<img class="sec-img" src="${product.images[1]}" />
  <img class="sec-img" src="${product.images[2]}" />`
);

// });
