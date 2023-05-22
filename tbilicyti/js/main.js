function scrollTo() {
  document.querySelectorAll(".scroll-to").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      this.dataset.moveTo = this.dataset.moveTo
        ? this.dataset.moveTo
        : this.href.split("/").pop();
      let blockMoveTo = this.dataset.moveTo.match("#")
        ? this.dataset.moveTo
        : `.${this.dataset.moveTo}`;
      e.preventDefault();
      document.querySelector(blockMoveTo).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    });
  });
}

const open_menu_btn = document.querySelector('.mobile_open_menu')
const close_menu_btn = document.querySelector('.mobile_close_menu')
const body = document.querySelector('body')
const mobile_menu = document.querySelector('.header_sticky')
const mobile_menu_content = mobile_menu.querySelector('.header_sticky_content')
function closeMenu() {
  console.log('menu is close')
  mobile_menu.classList.remove('open')
  body.classList.remove('mobile_menu_open')
}
function openMenu() {
  console.log('menu is open')
  mobile_menu.classList.add('open')
  body.classList.add('mobile_menu_open')
}
open_menu_btn.addEventListener('click', function() {
  openMenu();
})
close_menu_btn.addEventListener('click', function() {
  closeMenu();
})
mobile_menu.addEventListener('click', function(ev) {
  if(!ev.target.closest('.header_sticky_content') || ev.target.closest('.sticky_link')) {
    closeMenu();
  }
})

// added class for mobile navigation if device width < 900px
function addClassMobMenu() {
  if (window.innerWidth <= 900 && !mobile_menu.classList.contains('mobile_menu')) {
    mobile_menu.classList.add('mobile_menu')
  } else if (window.innerWidth >= 900 && mobile_menu.classList.contains('mobile_menu')) {
    mobile_menu.classList.remove('mobile_menu')
    body.classList.remove('mobile_menu_open')
  }
}
window.addEventListener('load', () => {
  addClassMobMenu()
});

window.addEventListener('resize', () => {
  addClassMobMenu()
});
