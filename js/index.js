import products from "./data.js";

window.onload = (e) => {
  // create a list of <li> and send to <ul>
  const createCardList = (className, category) => {
    const list = document.querySelector(className);
    products
      .filter((item) => item.category === category)
      .forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = `<p>${item.name}</p>
    <p>$${item.price}</p>
    <p>${item.availableQuantity}</p>`;

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
      const li = document.createElement("li");
      li.innerHTML = `<p>${item.name}</p>
    <p>$${item.price}</p>
    <p>${item.availableQuantity}</p>`;

      trendingList.appendChild(li);
    });
  };

  generateTrendingList();
  createCardList(".headphone-list", "HEADPHONE");
  createCardList(".earphone-list", "EARPHONE");
  createCardList(".speaker-list", "SPEAKER");
};
