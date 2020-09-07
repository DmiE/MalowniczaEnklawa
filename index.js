import $ from 'jquery';
import '../node_modules/slick-carousel/slick/slick';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';
import AOS from '../node_modules/aos/dist/aos';
import '../node_modules/aos/dist/aos.css';

$(document).ready(function() {
  AOS.init();
  // GALLERY

  $('.jumbotron__slider').slick({
    infinite: true,
    slidesToShow: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  // MENU

  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight - 100) {
      $('#header').addClass('header__scrolled');
    } else if (window.scrollY <= window.innerHeight - 100) {
      $('#header').removeClass('header__scrolled');
    }
  });

  // icon click

  let clickDisabled = false;
  $('#nav-icon4').on('click', () => {
    if (!clickDisabled) {
      $('#nav-icon4').toggleClass('open');
      $('#mobile-navigation').toggleClass('menu_opened');
      $('body').toggleClass('scroll__block');

      clickDisabled = true;
      setTimeout(function() {
        clickDisabled = false;
      }, 500);
    }
  });

  $('.mobile-navigation__item').on('click', () => {
    $('#nav-icon4').removeClass('open');
    $('#mobile-navigation').removeClass('menu_opened');
    $('body').removeClass('scroll__block');
  });

  $(window).resize(() => {
    if ($(window).width() >= 1024) {
      $('#nav-icon4').removeClass('open');
      $('#mobile-navigation').removeClass('menu_opened');
      $('body').removeClass('scroll__block');
    }
  });

  // HEADER COLOR CHANGE

  // SMOOTH SCROLL

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
