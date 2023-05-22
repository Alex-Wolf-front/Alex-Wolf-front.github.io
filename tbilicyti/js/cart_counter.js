function cartCounter(event, type, id) {
  console.log("click");
  // Находим обертку счетчика
  const counterWrapper = event.target.closest(".cart_item_counter");
  // Находим див с числом счетчика
  let counter = counterWrapper.querySelector(".cart_item_current");

  let item = getItemByID(id)
  let itemCount = Number(item.count)

  if (type === "plus") {
    itemCount += 1;
    counter.innerText = itemCount;
    counter.dataset.counter = itemCount;
    changeItemParamByID(id, 'count', itemCount)
  } else if (type === "minus") {
    // Проверяем чтобы счетчик был больше 1
    if (itemCount > 1) {
      itemCount -= 1;
      counter.innerText = itemCount;
      counter.dataset.counter = itemCount;
      changeItemParamByID(id, 'count', itemCount)
    } else if (itemCount === 1) {
      deleteItem(id);
    }
  }
  // Пересчет общей стоимости товаров в корзине
  calcCartPriceAndDelivery();
}

function deleteItem(id) {
  console.log("delete");
  // Удаляем товар из корзины
  document.querySelector(`.cart_item[data-id="${id}"]`).remove();
  deleteItemByID(id)
  // Отображение статуса корзины Пустая / Полная
  toggleCartStatus();
}

//Mobile cart icon
const cartBtnOpen = document.querySelector(".cart_mobile_button")
const cartBtnClose = document.querySelector(".cart_mobile_close")
const cartBlock = document.querySelector(".cart_sidebar")
cartBtnOpen.addEventListener('click', function() {
  cartBlock.classList.add('mobile_open')
})
cartBtnClose.addEventListener('click', function() {
  cartBlock.classList.remove('mobile_open')
})