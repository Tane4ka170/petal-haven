document.addEventListener('DOMContentLoaded', function () {
  const mobileMenu = document.querySelector('.mobile-menu');
  const openMenuButton = document.querySelector('.js-open-menu');
  const closeMenuButton = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuButton.getAttribute('aria-expanded') === 'true' || false;
    openMenuButton.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    // Removed unused variable 'scrollLockMethod'

    // Replace 'event' with a more descriptive name
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', (event) => {
        if (!event.matches) return;
        mobileMenu.classList.remove('is-open');
        openMenuButton.setAttribute('aria-expanded', false);
        // Ensure 'bodyScrollLock' is defined or replace it with a relevant library/method
        // bodyScrollLock.enableBodyScroll(document.body);
      });
  };

  openMenuButton.addEventListener('click', toggleMenu);
  closeMenuButton.addEventListener('click', toggleMenu);
});
