import data from "./data.js";

window.onload = (e) => {
  console.log("HELLOOOOO");

  // document.querySelector(".list").innerHTML = data.map(
  //   (item) =>
  //     `<li>
  //     <p>${item.name}</p>
  //     <p>$${item.price}</p>
  //     <p>${item.availableQuantity}</p>
  //   </li>`
  // );

  // create a list of <li> and send to <ul>
  const list = document.querySelector(".list");
  data.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<p>${item.name}</p>
    <p>$${item.price}</p>
    <p>${item.availableQuantity}</p>`;

    list.appendChild(li);
  });
};
