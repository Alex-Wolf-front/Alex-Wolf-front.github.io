const checkoutWrapper = document.querySelector(".checkout_cart_order");
if (itemsArray.length > 0) {
  console.log(itemsArray, "itemsArray");
  itemsArray.forEach(addToOrder);
}
// добавляем товары из localStorage
function addToOrder(productInfo) {
  const cartItemHTML = `
    <div class="checkout_cart_order_item" data-id="${productInfo.id}">
        <div class="checkout_order_image">
            <img src="images/products/${productInfo.img_src}" alt="${productInfo.title}">
        </div>
        <div class="checkout_cart_order_block">
            <span class="checkout_order_title">${productInfo.title}</span>
            <span class="checkout_order_count" data-counter="${productInfo.count}">${productInfo.count}&#8201;шт</span>
            <span class="checkout_order_price">${productInfo.price}&#8201;&#8381;</span>
        </div>
    </div>
    `;
  // Отобразим товар в корзине
  checkoutWrapper.insertAdjacentHTML("beforeend", cartItemHTML);
  // Подсчитывает общую сумму
  calccheckoutPriceAndDelivery();
}
