const menuBtn = document.querySelector('.menu__icon');
const menuList = document.querySelector('.menu__body');

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('menu__body_active');
});
