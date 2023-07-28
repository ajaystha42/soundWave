import products from "../js/data.js";

window.onload = (e) => {
  // create a list of <li> and send to <ul>
  const createCardList = (id, category) => {
    const list = document.getElementById(id);
    products
      .filter((item) => item.category === category) // display selected category

      .forEach((item) => {
        // iterate through the generated array
        // const randomNo = Math.floor(Math.random() * 2);
        const li = document.createElement("li");
        li.innerHTML = ` <main class="main-container">
        <div class="product-image-container">
          <img src=".${item.images[0]}" alt="" />
        </div>
        <div class="product-body">
          <h2 class="product-title">
            <a href="./productDetails.html?id=${item.id}" >${item.name}</a>
          </h2>
          <ul>
            <li>Headphone</li>
          </ul>
          <p>
            ${item.description}
          </p>
        </div>
        <div class="product-price">
          <div class="price-offer">
            <del><h3>${item.oldPrice}</h3></del>
            <h1>$${item.price}</h1>
          </div>
          <div class="sign-up-button">
             <a href = "./productDetails.html?id=${item.id}"> <button class="sign-up" type="submit">Add to</button></a>         
          </div>          
        </div>
      </main>`;

        list.appendChild(li);
      });
  };
  createCardList("headphone-list", "HEADPHONE");
  createCardList("earphone-list", "EARPHONE");
  createCardList("speaker-list", "SPEAKER");
};
