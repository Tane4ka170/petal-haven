document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu'); // Use querySelector
  const mobileMenu = document.querySelector('.mobile-menu'); // Use querySelector

  burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });
});
