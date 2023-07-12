import products from "./data.js";

// $(document).ready(function () {
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const id = parseInt(urlParams.get("id"));

// get the product based on id using array.find() method
const product = products.find((product) => product.id === id);

console.log(product.name);

// });
