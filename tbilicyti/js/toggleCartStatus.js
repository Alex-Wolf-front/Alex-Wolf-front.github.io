const cartClean = document.querySelector(".cart_clean");
const cartWrapper = document.querySelector(".cart_wrapper");

function toggleCartStatus() {
  const cartEmptyBadge = document.querySelector(".cart_empty");
  const cartFooter = document.querySelector(".cart_footer");
  const mobileCount = document.querySelector(".cart_mobile_count");

  if (cartWrapper.querySelectorAll(".cart_item").length > 0) {
    console.log("FULL");
    cartEmptyBadge.classList.add("none");
    cartFooter.classList.remove("none");
    cartClean.classList.remove("none");
    mobileCount.style.opacity = '1'
  } else {
    console.log("EMPTY");
    cartEmptyBadge.classList.remove("none");
    cartFooter.classList.add("none");
    cartClean.classList.add("none");
    mobileCount.style.opacity = '0'
  }
}

cartClean.addEventListener("click", function () {
  console.log("remove all");
  const cartItems = document.querySelectorAll(".cart_wrapper .cart_item");
  cartItems.forEach((item) => {
    item.remove();
  });
  localStorage.removeItem(`products`);
  toggleCartStatus();
});
