const mainContainer = document.querySelector("#main-container");

// Запускаем getProducts
getProducts();

// Асинхронная функция получения данных из файла products.json
async function getProducts() {
  // Получаем данные из products.json
  const response = await fetch("./js/products.json");
  // Парсим данные из JSON формата в JS
  const sectionsArray = await response.json();
  // Запускаем ф-ю рендера (отображения навигационного меню)
  renderMenu(sectionsArray);
  // Запускаем ф-ю рендера (отображения секций с товарами)
  renderSection(sectionsArray);
}

const header_navigation = document.querySelector("#header_navigation");

function renderMenu(sectionsArray) {
  sectionsArray.forEach(function (data) {
    const menu_item_HTML = `
    <div class="header_sticky_navigation_item">
		  <button type="button" class="header_sticky_navigation_link sticky_link scroll-to" data-move-to="#section_${data.id}" title="Перейти к разделу меню">${data.category}</button>
	  </div>
    `;
    header_navigation.insertAdjacentHTML("beforeend", menu_item_HTML);
  });
  scrollTo();
}

function renderSection(sectionsArray) {
  sectionsArray.forEach(function (data) {
    const sectiontHTML = `
    <section class="category_section" id="section_${data.id}">
		<h2 class="category_section_name">${data.category}</h2>
		  <div class="category_section_wrapper">
			  <div class="category_section_products">
        ${data.items.map(
          (item) =>
            `
            <div class="product_card" 
              data-id="${item.id}" 
              data-title="${item.title}" 
              data-description="${item.description}" 
              data-price="${item.price}"
              data-weight="${item.weight}"
              data-img_src="${item.img_src}"
            >
              <div class="product_card_image_container">
                <div class="product_card_image">
                  <img src="images/products/${item.img_src}" alt="${item.title} фото">
                </div>
              </div>
              
              <div class="product_card_body">
                <p class="product_card_name">${item.title}</p>
                <p class="product_card_description">${item.description}</p>
              </div>
  
              <div class="product_card_footer">
                <div class="product_card_footer_info">
                  <span class="product_card_price">${item.price} &#8381;</span>
                  <span class="product_cart_dash">/</span>
                  <span class="product_card_size">${item.weight} г</span>
                </div>
                <div class="product_card_total">
                  <button type="button" class="product_card_button add_to_cart" onclick="addBtnClick(event)">
                    В корзину
                  </button>
                  <span class="product_card_price_mobile">${item.price} &#8381;</span>
                </div>
              </div>
            </div>`
            
        ).join('')}
			  </div>
		  </div>
	  </section>
    `;
    mainContainer.insertAdjacentHTML("beforeend", sectiontHTML);
  });
}
