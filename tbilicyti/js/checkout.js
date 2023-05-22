const personSelect = document.querySelectorAll(".form_person_select");
const personInput = document.querySelector(".form_person");
personSelect.forEach((select) =>
  select.addEventListener("click", function () {
    if (select.dataset.type === "minus" && personInput.value > 1) {
      personInput.stepDown();
    } else if (select.dataset.type === "plus") {
      personInput.stepUp();
    }
  })
);

const timeShippingInput = document.querySelectorAll(
  "input[name='time_shipping']"
);
const timeShippingRows = document.querySelectorAll(".form_row_time_shipping");
timeShippingInput.forEach((input) =>
  input.addEventListener("change", function () {
    if (input.id === "too_time") {
      timeShippingRows.forEach((row) => row.classList.remove("none"));
    } else {
      timeShippingRows.forEach((row) => row.classList.add("none"));
    }
  })
);

function calccheckoutPriceAndDelivery() {
  const priceElements = checkoutWrapper.querySelectorAll(
    ".checkout_order_price"
  );
  const totalPriceEl = document.querySelector(".checkout_cart_total_price");
  const deliveryCost = document.querySelector(".delivery_cost");

  // Общая стоимость товаров
  let priceProducts = 0;
  // общая стоимость включая доставку
  let priceTotal;

  // Обходим все блоки с ценами в корзине
  priceElements.forEach(function (item) {
    // Находим количество товара
    const amountEl = item
      .closest(".checkout_cart_order_item")
      .querySelector("[data-counter]");
    // Добавляем стоимость товара в общую стоимость (кол-во * цену)
    priceProducts += parseInt(item.innerText) * parseInt(amountEl.innerText);
  });

  // Указываем стоимость доставки
  if (priceProducts >= 1000) {
    deliveryCost.classList.add("free");
    deliveryCost.innerText = "бесплатно";
    priceTotal = priceProducts;
  } else {
    deliveryCost.classList.remove("free");
    deliveryCost.innerText = "250 \u20BD";
    priceTotal = priceProducts + 250;
  }
  console.log()

  // Отображаем цену на странице
  totalPriceEl.innerText = priceTotal + " \u20BD";
}
