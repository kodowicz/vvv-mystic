/* ----- navigation ----- */
const navButton = document.querySelector('.header__nav-button');
navButton.addEventListener('click', function() {
  const header = document.querySelector('.header');
  const hamburgerBtn = document.querySelector('.header__nav-button--hamburger-icon');
  const closeBtn = document.querySelector('.header__nav-button--close-icon');
  header.classList.toggle('nav-opened');
})
/*
*/
