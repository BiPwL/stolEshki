function addProductCard(id, name, price) {
  const productList = document.getElementById("product-list");

  const card = document.createElement("div");
  card.classList.add("product-card");
  const image = document.createElement("img");
  image.src = `../img/${id}.png`;
  const title = document.createElement("h2");
  title.textContent = name;
  const priceTag = document.createElement("p");
  priceTag.textContent = `Цена: ${price} руб.`;
  const addToCart = document.createElement("button");
  addToCart.textContent = "Добавить в корзину";
  addToCart.classList.add("add-to-cart");

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(priceTag);
  card.appendChild(addToCart);
  card.addEventListener("click", function () {
    redirectToProductPage(id);
  });
  productList.appendChild(card);
}

function redirectToProductPage(id) {
  window.location.href = `product.html?id=${id}`;
}

document.addEventListener("DOMContentLoaded", function () {
  for (let product of products) {
    addProductCard(product.ID, product.Name, product.Price);
  }
});
