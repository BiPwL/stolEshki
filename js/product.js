function fillProduct(productData) {
  const product = document.getElementById("product");

  const productMain = document.createElement("div");
  productMain.classList.add("product-main");

  const gallery = document.createElement("div");
  gallery.classList.add("product-gallery");
  const img1 = document.createElement("img");
  img1.src = `../img/${productData.ID}.png`;
  img1.classList.add("img1");
  const subGallery = document.createElement("div");
  subGallery.classList.add("product-gallery-subgallery");
  const img2 = document.createElement("img");
  img2.src = `../img/${productData.ID}.png`;
  img2.classList.add("img2");
  const img3 = document.createElement("img");
  img3.src = `../img/${productData.ID}.png`;
  img3.classList.add("img3");

  subGallery.appendChild(img2);
  subGallery.appendChild(img3);
  gallery.appendChild(img1);
  gallery.appendChild(subGallery);
  img2.addEventListener("click", function () {
    img1.style.transform = "scaleY(1)";
  });
  img3.addEventListener("click", function () {
    img1.style.transform = "scaleY(0.1)";
  });

  const stats = document.createElement("div");
  stats.classList.add("product-stats");
  const Name = document.createElement("h2");
  Name.textContent = productData.Name;
  const Price = document.createElement("p");
  Price.textContent = `Цена: ${productData.Price} руб.`;
  const Surface = document.createElement("p");
  Surface.textContent = `Поверхность: ${productData.Surface}`;
  const Factory = document.createElement("p");
  Factory.textContent = `Фабрика: ${productData.Factory}`;
  const Width = document.createElement("p");
  Width.textContent = `Ширина: ${productData.Width} мм`;
  const Height = document.createElement("p");
  Height.textContent = `Высота: ${productData.Height} мм`;
  const Depth = document.createElement("p");
  Depth.textContent = `Глубина: ${productData.Depth} мм`;
  const Body = document.createElement("p");
  Body.textContent = `Корпус: ${productData.Body}`;
  const Facade = document.createElement("p");
  Facade.textContent = `Фасад: ${productData.Facade}`;
  const Color = document.createElement("p");
  Color.textContent = `Цвет: ${productData.Color}`;
  const Review = document.createElement("button");
  Review.textContent = `Оставить отзыв`;
  Review.classList.add("review");
  Review.addEventListener("click", function () {
    window.location.href = "../html/review.html";
  });

  const rating = document.createElement("div");
  rating.classList.add("product-rating");
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("span");
    star.textContent = "★";
    star.dataset.ratingValue = i;
    star.addEventListener("click", function () {
      const ratingValue = parseInt(this.dataset.ratingValue);
      setRating(ratingValue);
    });
    rating.appendChild(star);
  }

  const addToCart = document.createElement("button");
  addToCart.textContent = "Добавить в корзину";
  addToCart.classList.add("add-to-cart");

  stats.appendChild(Name);
  stats.appendChild(Price);
  stats.appendChild(Surface);
  stats.appendChild(Factory);
  stats.appendChild(Width);
  stats.appendChild(Height);
  stats.appendChild(Depth);
  stats.appendChild(Body);
  stats.appendChild(Facade);
  stats.appendChild(Color);
  stats.appendChild(addToCart);
  stats.appendChild(rating);
  stats.appendChild(Review);

  productMain.appendChild(gallery);
  productMain.appendChild(stats);

  const productRecommendations = document.createElement("div");
  productRecommendations.classList.add("product-recommendations");
  productRecommendations.setAttribute("id", "product-list");

  product.appendChild(productMain);
  product.appendChild(productRecommendations);
}

function setRating(ratingValue) {
  const stars = document.querySelectorAll(".product-rating span");
  stars.forEach((star, index) => {
    if (index < ratingValue) {
      star.style.color = "gold";
    } else {
      star.style.color = "";
    }
  });
}

function getQueryParam(param) {
  let search = window.location.search.substring(1);
  let params = new URLSearchParams(search);
  return params.get(param);
}

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

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(priceTag);
  card.addEventListener("click", function () {
    redirectToProductPage(id);
  });
  productList.appendChild(card);
}

function redirectToProductPage(id) {
  window.location.href = `product.html?id=${id}`;
}

document.addEventListener("DOMContentLoaded", function () {
  let productID = getQueryParam("id");
  if (productID) {
    for (let product of products) {
      if (product.ID == productID) {
        fillProduct(product);
        const randomIndexes = [];
        while (randomIndexes.length < 5) {
          const randomIndex = Math.floor(Math.random() * 20);
          const randomProduct = products[randomIndex];
          if (
            !randomIndexes.includes(randomIndex) &&
            randomProduct.ID !== productID
          ) {
            randomIndexes.push(randomIndex);
          }
        }

        randomIndexes.forEach((index) => {
          const productOne = products[index];
          addProductCard(productOne.ID, productOne.Name, productOne.Price);
        });
        break; // Выход из цикла после нахождения товара
      }
    }
  }
});
