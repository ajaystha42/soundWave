import products from "./data.js";

window.onload = (e) => {
  // create a list of <li> and send to <ul>
  var productsFromStorage = localStorage.getItem("products");
  let arr = [];
  if (productsFromStorage) {
    arr = [...JSON.parse(productsFromStorage)];
  } else arr = [...products];
  const createCardList = (className, category) => {
    const list = document.querySelector(className);
    arr
      .filter((item) => item.category === category) // display selected category
      .slice(0, 4) // display first four items from the array
      .forEach((item) => {
        // iterate through the generated array
        // const randomNo = Math.floor(Math.random() * 2);
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
              ? "<p id='available'>Out of Stock</p"
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
      // const randomNo = Math.floor(Math.random() * 2);
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
            ? "<p id='available'>Out of Stock</p"
            : `<p id='available'>Available: ${item.availableQuantity}</p`
        }>
    </a>`;

      trendingList.appendChild(li);
    });
  };

  generateTrendingList();
  createCardList(".headphone-list", "HEADPHONE");
  createCardList(".earphone-list", "EARPHONE");
  createCardList(".speaker-list", "SPEAKER");

  // const productsFromStorage = localStorage.getItem("products");
  if (!productsFromStorage) {
    localStorage.setItem("products", JSON.stringify(products));
  }

  document.querySelector(".nav-menu-btn").addEventListener("click", () => {
    document.querySelector(".nav").classList.toggle("show");
  });
};
