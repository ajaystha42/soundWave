import products from "./data.js"; // Get products from data.js file

// run following code on initial load
window.onload = (e) => {
  // create a list of <li> and send to <ul> in HTML
  // get products from local storage
  var productsFromStorage = localStorage.getItem("products");
  let arr = [];

  // Check if product exists in local stoarge
  // If product does not exist, get products from data.js
  if (productsFromStorage) {
    arr = [...JSON.parse(productsFromStorage)];
  } else arr = [...products];

  // Create a list of html products to display in home page
  const createCardList = (className, category) => {
    const list = document.querySelector(className);
    arr
      .filter((item) => item.category === category) // display selected category
      .slice(0, 4) // display first four items from the array
      .forEach((item) => {
        // iterate through the generated array
        const li = document.createElement("li");
        li.innerHTML = `<a href="./html/productDetails.html?id=${item.id}"}>
          <img src=${item.images[0]} alt=${item.name}>
          <br/> <br/>
          <p id="price">$${
            item.price
          } <span id='old-price'>Was:&nbsp;&nbsp;<s> $${
          item.oldPrice
        }</s></span></p>
        <p id="name">${item.name}</p>
          ${
            item.availableQuantity === 0
              ? "<p id='out-of-stock'>Out of Stock</p"
              : `<p id='available'>Available: ${item.availableQuantity}</p`
          }>
        </a>`;

        list.appendChild(li);
      });
  };

  //tooltip
  $(function () {
    $(document).tooltip();
  });

  // Generate trending products
  const generateTrendingList = () => {
    const trendingList = document.querySelector(".trending-list");

    const trendingProducts = [...arr];
    // Shuffle the array
    const shuffled = trendingProducts.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 4);

    selected.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="./html/productDetails.html?id=${item.id}"}>
        <img src=${item.images[0]} alt=${item.name}>
        <br/> <br/>
        <p id="price">$${
          item.price
        } <span id='old-price'>Was:&nbsp;&nbsp;<s> $${
        item.oldPrice
      }</s></span></p>
      <p id="name">${item.name}</p>
        ${
          item.availableQuantity === 0
            ? "<p id='out-of-stock'>Out of Stock</p"
            : `<p id='available'>Available: ${item.availableQuantity}</p`
        }>
    </a>`;

      trendingList.appendChild(li);
    });
  };

  generateTrendingList(); // Generate trending list by calling the function
  createCardList(".headphone-list", "HEADPHONE"); // Generate headphones
  createCardList(".earphone-list", "EARPHONE"); // Generate earphones
  createCardList(".speaker-list", "SPEAKER"); // Generate speakers

  if (!productsFromStorage) {
    localStorage.setItem("products", JSON.stringify(products));
  }

  // Toggle the navbar menu button for tablets and smaller devices
  document.querySelector(".nav-menu-btn").addEventListener("click", () => {
    document.querySelector(".nav").classList.toggle("show");
  });

  // Clear the cart when user clicks on Clear Cart button
  document.querySelector(".clear-cart-btn").addEventListener("click", () => {
    localStorage.removeItem("cart");
    localStorage.setItem("products", JSON.stringify(products));
    location.reload();
  });
};
