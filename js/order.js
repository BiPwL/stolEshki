document
  .getElementById("orderForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateForm()) {
      document.getElementById("popup").classList.remove("hidden");
      setTimeout(function () {
        document.getElementById("popup").classList.add("hidden");
      }, 3000);
    }
  });

function validateForm() {
  var address = document.getElementById("delivery-address").value;
  var contactInfo = document.getElementById("contact-info").value;
  var paymentMethod = document.querySelector(
    'input[name="payment-method"]:checked'
  );

  if (!address.trim() || !contactInfo.trim() || !paymentMethod) {
    alert("Пожалуйста, заполните все поля формы.");
    return false;
  }

  return true;
}
