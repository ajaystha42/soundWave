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
  const headphoneList = document.querySelector(".headphone-list");
  data.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<p>${item.name}</p>
    <p>$${item.price}</p>
    <p>${item.availableQuantity}</p>`;

    headphoneList.appendChild(li);
  });
};
