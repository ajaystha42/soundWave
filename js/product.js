import products from "../js/data.js";

window.onload = (e) => {
  var productsFromStorage = localStorage.getItem("products");
  let arr = [];
  if (productsFromStorage) {
    arr = [...JSON.parse(productsFromStorage)];
  } else arr = [...products];

  // create a list of <li> and send to <ul>
  const createCardList = (id, category) => {
    const list = document.getElementById(id);
    arr
      .filter((item) => item.category === category) // display selected category

      .forEach((item) => {
        // iterate through the generated array
        const li = document.createElement("li");
        li.innerHTML = ` <main class="main-container">
        <div class="product-image-container">
          <a href="./productDetails.html?id=${item.id}" >
            <img class='product-img' src=".${item.images[0]}" alt=${
          item.name
        } />
          </a>
        </div>
        <div class="product-body">
          <h2 class="product-title">
            <a href="./productDetails.html?id=${item.id}" >${item.name}</a>
          </h2>
          <ul>
            <li> ${
              item.availableQuantity === 0
                ? "<p class='out-of-stock'><strong>Out of Stock</strong></p"
                : `<p><strong>Available Quantity </strong>: ${item.availableQuantity}</p`
            }></li>
          </ul>
          <p>
            ${item.description}
          </p>
        </div>
        <div class="product-price">
          <div class="price-offer">
            <del><h3>$${item.oldPrice}</h3></del>
            <h1>$${item.price}</h1>
          </div>
          <div class="sign-up-button">
             <a href = "./productDetails.html?id=${item.id}">
              <button class="sign-up" type="submit">Add To Cart</button>
            </a>         
          </div>          
        </div>
      </main>`;

        list.appendChild(li);
      });
  };
  createCardList("headphone-list", "HEADPHONE");
  createCardList("earphone-list", "EARPHONE");
  createCardList("speaker-list", "SPEAKER");

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
