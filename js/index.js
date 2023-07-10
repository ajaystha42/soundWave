import products from "./data.js";

window.onload = (e) => {
  // create a list of <li> and send to <ul>
  const createCardList = (className, category) => {
    const list = document.querySelector(className);
    products
      .filter((item) => item.category === category) // display selected category
      .slice(0, 4) // display first four items from the array
      .forEach((item) => {
        // iterate through the generated array
        const randomNo = Math.floor(Math.random() * 2);
        const li = document.createElement("li");
        li.innerHTML = `<a href="./product-details.html?id=${item.id}"}>
          <img src=${item.images[randomNo]} alt=${item.name}>
          <p>${item.name}</p>
          <p>$${item.price}</p>
          <p>${item.availableQuantity}</p>
        </a>`;

        list.appendChild(li);
      });
  };

  // Generate trending products
  const generateTrendingList = () => {
    const trendingList = document.querySelector(".trending-list");

    const trendingProducts = [...products];
    // Shuffle the array
    const shuffled = trendingProducts.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 4);

    selected.forEach((item) => {
      const randomNo = Math.floor(Math.random() * 2);
      const li = document.createElement("li");
      li.innerHTML = `<a href="./product-details.html?id=${item.id}"}>
        <img src=${item.images[randomNo]} alt=${item.name}>
        <p>${item.name}</p>
        <p>$${item.price}</p>
        <p>${item.availableQuantity}</p>
    </a>`;

      trendingList.appendChild(li);
    });
  };

  generateTrendingList();
  createCardList(".headphone-list", "HEADPHONE");
  createCardList(".earphone-list", "EARPHONE");
  createCardList(".speaker-list", "SPEAKER");
};
