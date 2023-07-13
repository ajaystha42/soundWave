import products from "./data.js";

// $(document).ready(function () {

// getting url parameters (id) from url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const id = parseInt(urlParams.get("id"));

// get the product based on id using array.find() method
const product = products.find((product) => product.id === id);

if (product) {
  // display product details on the page
  $(".product-title").text(product.name);
  $(".product-desc").text(product.description);
  $(".product-price").text("$" + product.price);

  $(".main-img-div").prepend(
    `<img class="main-img" src="${product.images[0]}" />`
  );
  $(".secondary-img-div").prepend(
    `<img id="img1" class="sec-img" src="${product.images[1]}" />
  <img id="img2" class="sec-img" src="${product.images[2]}" />`
  );

  $("#img1").click(imgChange1);
  $("#img2").click(imgChange2);

  function imgChange1() {
    // first clear the main image div
    $(".main-img-div").empty();
    // then add the clicked image
    $(".main-img-div").prepend(
      `<img class="main-img" src="${product.images[1]}" />`
    );

    // clear the secondary image div
    $(".secondary-img-div").empty();
    // then add the remaining images
    $(".secondary-img-div").prepend(
      `<img id="img1" class="sec-img" src="${product.images[0]}" />
    <img id="img2" class="sec-img" src="${product.images[2]}" />`
    );
  }

  function imgChange2() {
    $(".main-img-div").empty();
    $(".main-img-div").prepend(
      `<img class="main-img" src="${product.images[2]}" />`
    );

    $(".secondary-img-div").empty();
    $(".secondary-img-div").prepend(
      `<img id="img1" class="sec-img" src="${product.images[0]}" />
      <img id="img2" class="sec-img" src="${product.images[1]}" />`
    );
  }
}

// });
