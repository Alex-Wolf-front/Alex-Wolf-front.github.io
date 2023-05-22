function calcCartPriceAndDelivery() {
	const cartWrapper = document.querySelector('.cart_wrapper');
	const priceElements = cartWrapper.querySelectorAll('.cart_item_price');
	const totalPriceEl = document.querySelector('.total_price');
	const deliveryCost = document.querySelector('.cart_delivery_cost');
	const cartDelivery = document.querySelector('.cart_footer_delivery');
	const mobileCount = document.querySelector(".cart_mobile_count");

	// Общая стоимость товаров
	let priceTotal = 0;

	// Обходим все блоки с ценами в корзине
	priceElements.forEach(function (item) {
		// Находим количество товара
		const amountEl = item.closest('.cart_item').querySelector('[data-counter]');
		// Добавляем стоимость товара в общую стоимость (кол-во * цену)
		priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
	});

	// Отображаем цену на странице
	totalPriceEl.innerText = priceTotal + ' \u20BD';

	//Отображаем количество товаром для мобильной иконки
	mobileCount.textContent = priceElements.length;

	// Скрываем / Показываем блок со стоимостью доставки
	if (priceTotal > 0) {
		cartDelivery.classList.remove('none');
	} else {
		cartDelivery.classList.add('none');
	}

	// Указываем стоимость доставки
	if (priceTotal >= 2000) {
		deliveryCost.classList.add('free');
		deliveryCost.innerText = 'бесплатно';
	} else {
		deliveryCost.classList.remove('free');
		deliveryCost.innerText = '250 \u20BD';
	}
}

