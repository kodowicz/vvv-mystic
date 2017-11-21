document.addEventListener('DOMContentLoaded', function () {

  /* ----- navigation ----- */
  const navButton = document.querySelector('.header__nav-button');
  navButton.addEventListener('click', function() {
    const header = document.querySelector('.header');
    const navList = header.querySelector('.header__nav-list-items');

    header.classList.toggle('nav-opened');
    navList.style.display = navList.style.display === 'none' ?
      'block' : 'none';
  })

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
