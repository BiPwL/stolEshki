document.addEventListener("DOMContentLoaded", function () {
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
      const quantityLabel = document.createElement("label");
      quantityLabel.textContent = "Количество:";
      const quantityInput = document.createElement("input");
      quantityInput.type = "number";
      quantityInput.value = 1;
      quantityInput.min = 1;
      quantityInput.classList.add("quantity-input");
  
      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(priceTag);
      card.appendChild(quantityLabel);
      card.appendChild(quantityInput);
      image.addEventListener("click", function () {
        redirectToProductPage(id);
      });
      productList.appendChild(card);
    }
  
    function redirectToProductPage(id) {
      window.location.href = `product.html?id=${id}`;
    }
  
    function updateFinalPrice(totalPrice) {
      const discountElement = document.getElementById("discount");
      const finalPriceElement = document.getElementById("final-price");
      const promoCodeInput = document.getElementById("promo-code");
  
      const promoCode = promoCodeInput.value.trim().toLowerCase();
      if (promoCode === "bipwl") {
        // Применяем скидку 10%
        const discountedPrice = totalPrice * 0.9;
  
        // Отображаем скидку
        discountElement.textContent = "Скидка: 10%";
  
        // Отображаем сумму к оплате с учетом скидки
        finalPriceElement.textContent = `Сумма к оплате: ${discountedPrice.toFixed(
          2
        )} руб.`;
      } else {
        // Скрытие скидки и суммы к оплате, если промокод неверен
        discountElement.textContent = "";
        finalPriceElement.textContent = "";
      }
    }
  
    const totalPriceElement = document.getElementById("total-price");
  
    function updateTotalPrice() {
      let totalPrice = 0;
      const quantityInputs = document.querySelectorAll(".quantity-input");
      const priceTags = document.querySelectorAll(".product-card p");
      for (let i = 0; i < quantityInputs.length; i++) {
        const quantity = parseInt(quantityInputs[i].value);
        const price = parseFloat(priceTags[i].textContent.split(": ")[1]);
        totalPrice += quantity * price;
      }
      totalPriceElement.textContent = `Итоговая сумма: ${totalPrice.toFixed(2)} руб.`;
      
      // Обновление суммы к оплате
      updateFinalPrice(totalPrice);
    }
  
    const orderButton = document.getElementById("order-button");
    orderButton.addEventListener("click", function () {
      window.location.href = "../html/order.html";
    });
  
    const activatePromoButton = document.getElementById("activate-promo");
  
    activatePromoButton.addEventListener("click", function () {
      updateTotalPrice(); // Пересчет суммы к оплате при активации промокода
    });
  
    const randomIndexes = [];
    while (randomIndexes.length < 4) {
      const randomIndex = Math.floor(Math.random() * 20);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
  
    randomIndexes.forEach((index) => {
      const productOne = products[index];
      addProductCard(productOne.ID, productOne.Name, productOne.Price);
    });
  
    updateTotalPrice();
  
    document.querySelectorAll(".quantity-input").forEach((input) => {
      input.addEventListener("input", updateTotalPrice);
    });
  });
  