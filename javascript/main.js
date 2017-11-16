/* ----- navigation ----- */
const navButton = document.querySelector('.header__nav-button');
navButton.addEventListener('click', function() {
  const header = document.querySelector('.header');
  const hamburgerBtn = document.querySelector('.header__nav-button--hamburger-icon');
  const closeBtn = document.querySelector('.header__nav-button--close-icon');
  header.classList.toggle('nav-opened');
})



document.addEventListener('DOMContentLoaded', function () {

  /* scrolling navigation */
  window.onscroll = function() {
      console.log(window.pageYOffset);
      var nav = document.querySelector('.header');
      /* made var which gives the position of <main> */
      if ( window.pageYOffset > 20 /*main*/ ) {
          nav.classList.add("scrolled");
      } else {
          nav.classList.remove("scrolled");
      }
  }
})
