function cambiarClase(){
    let siteNav = document.getElementById('site-nav');
        siteNav.classList.toggle('site-nav-open');

    let menuOpen = document.getElementById('menu-toogle');
        menuOpen.classList.toggle('menu-open');
}


$(document).ready(function(){
    const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
      effect: 'fade',
      speed: 1200,

      // If we need pagination
      pagination: {
      el: '.swiper-pagination',
      clickable: true,
          renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },

      // Navigation arrows
      navigation: {
      nextEl: '.swiper-button-next',
      },
 
    });
});