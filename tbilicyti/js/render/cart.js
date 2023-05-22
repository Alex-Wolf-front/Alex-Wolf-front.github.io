if (itemsArray.length > 0) {
  console.log(itemsArray, "itemsArray");
  itemsArray.forEach(addToCart);
}
// добавляем товары из localStorage
function addToCart(productInfo) {
  const cartItemHTML = `
  <div class="cart_item" data-id="${productInfo.id}">
    <div class="cart_item_grid">
      <div class="cart_item_image_container">
        <div class="cart_item_image">
          <img src="images/products/${productInfo.img_src}" alt="${productInfo.title}">
        </div>
      </div>
      <div>
        <span class="cart_item_title">${productInfo.title}</span>
        <span class="cart_item_weight">${productInfo.weight}&#8201;г</span>
      </div>

      <div class="cart_item_delete">
        <button type="button" class="icon-delete" onclick="deleteItem(${productInfo.id})">
          <svg viewBox="0 0 17 17" width="17" height="17">
            <use href="images/icons.svg#close-icon" />
          </svg>
        </button>
      </div>
      
      <div class="cart_item_counter">
        <button type="button" class="cart_item_control" onclick="cartCounter(event, 'minus', ${productInfo.id})">-</button>
        <span class="cart_item_current" data-counter="${productInfo.count}">${productInfo.count}</span>
        <button type="button" class="cart_item_control" onclick="cartCounter(event, 'plus', ${productInfo.id})">+</button>
      </div>

      <span class="cart_item_price">${productInfo.price}&#8201;&#8381;</span>

      </div>
    </div>
  </div>
  `;
  // Отобразим товар в корзине
  cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML);
  // Отображение статуса корзины Пустая / Полная
  toggleCartStatus();
  // Пересчет общей стоимости товаров в корзине
  calcCartPriceAndDelivery();
}

// добавляем товары при нажатии на кнопку
function addBtnClick(event) {
  // Находим карточку с товаром, внутри котрой был совершен клик
  const card = event.target.closest(".product_card");

  // Проверяем если ли уже такой товар в корзине
  const itemInCart = document.querySelector(
    `.cart_item[data-id="${card.dataset.id}"]`
  );

  // Если товар есть в корзине
  if (itemInCart) {
    console.log('in cart')
    const existingItem = getItemByID(card.dataset.id)
    let existingItemCount = Number(existingItem.count)
    existingItemCount += 1;
    const counterElement = itemInCart.querySelector(".cart_item_current");
    counterElement.dataset.counter = existingItemCount;
    counterElement.innerText = existingItemCount;
    changeItemParamByID(card.dataset.id, 'count', existingItemCount)
  } else {
    console.log('no in cart')
    // Если товара нет в корзине
    // Собираем данные с этого товара и записываем их в единый объект productInfo
    const productInfo = {
      id: card.dataset.id,
      img_src: card.dataset.img_src,
      title: card.dataset.title,
      weight: card.dataset.weight,
      price: card.dataset.price,
      count: 1,
    };

    setToCookie(productInfo);
    addToCart(productInfo);
  }
}
