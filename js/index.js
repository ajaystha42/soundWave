import products from "./data.js";

window.onload = (e) => {
  console.log("HELLOOOOO");

  // create a list of <li> and send to <ul>
  const createCardList = (className, category) => {
    const headphoneList = document.querySelector(className);
    products
      .filter((item) => item.category === category)
      .forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = `<p>${item.name}</p>
    <p>$${item.price}</p>
    <p>${item.availableQuantity}</p>`;

        headphoneList.appendChild(li);
      });
  };

  createCardList(".headphone-list", "HEADPHONE");
  createCardList(".earphone-list", "EARPHONE");
  createCardList(".speaker-list", "SPEAKER");
};
