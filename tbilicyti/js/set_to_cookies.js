let itemsArray = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];
function setToCookie(productInfo) {
  itemsArray.push(productInfo);
  localStorage.setItem(`products`, JSON.stringify(itemsArray));
}

function getItemByID(ID) {
  let result;
  itemsArray.map((item) => {
    if (Number(item.id) === Number(ID)) {
      result = item;
    }
  });
  return result;
}

function changeItemParamByID(ID, parameter, value) {
  itemsArray.map((item) => {
    if (Number(item.id) === Number(ID)) {
      item[parameter] = value;
    }
  });
  localStorage.setItem(`products`, JSON.stringify(itemsArray));
}

function deleteItemByID(ID) {
  itemsArray  = itemsArray.filter(product => Number(product.id) !== ID);
  localStorage.setItem(`products`, JSON.stringify(itemsArray));
}
