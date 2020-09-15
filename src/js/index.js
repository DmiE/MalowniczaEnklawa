import $ from 'jquery';
import '../../node_modules/slick-carousel/slick/slick';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import AOS from '../../node_modules/aos/dist/aos';
import '../../node_modules/aos/dist/aos.css';
import ImageGalleryCreator from './gallery';
import './form';

$(document).ready(function() {
  // AOS.init();
  $('.jumbotron__slider').slick({
    infinite: true,
    slidesToShow: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  });
  // MENU
  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight - 100) {
      $('#header').addClass('header__scrolled');
    } else if (window.scrollY <= window.innerHeight - 100) {
      $('#header').removeClass('header__scrolled');
    }
  });
  // ICON CLICK
  let clickDisabled = false;
  $('#nav-icon4').on('click', () => {
    if (!clickDisabled) {
      $('#nav-icon4').toggleClass('open');
      $('#mobile-navigation').toggleClass('menu_opened');
      $('html').toggleClass('scroll__block');
      clickDisabled = true;
      setTimeout(function() {
        clickDisabled = false;
      }, 500);
    }
  });
  $('.mobile-navigation__item').on('click', () => {
    $('#nav-icon4').removeClass('open');
    $('#mobile-navigation').removeClass('menu_opened');
    $('html').removeClass('scroll__block');
  });
  $(window).resize(() => {
    if ($(window).width() >= 1024) {
      $('#nav-icon4').removeClass('open');
      $('#mobile-navigation').removeClass('menu_opened');
      $('html').removeClass('scroll__block');
    }
  });
  // // HEADER COLOR CHANGE
  // // SMOOTH SCROLL
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // //REFACTOR ^^^^
  // const imageMap = {
  //   mapItems: document.querySelectorAll('.image_map__item'),
  //   tableRows: document.querySelectorAll('.main-table__row'),
  //   setListeners: function() {
  //     imageMap.mapItems.forEach(element => {
  //       element.addEventListener('mousemove', e => {
  //         console.log('jezdze :D');
  //       });
  //       element.addEventListener('mouseenter', e => {
  //         this.tableRows.forEach(element => {
  //           if (element.dataset.houseNumber === e.target.dataset.houseNumber) {
  //           }
  //         });
  //       });
  //     });
  //   },
  //   setCloudInfo: function() {},
  //   readDataFromTable: function() {}
  // };
  // imageMap.setListeners();

  // ---- PHOTO GALLERY ----

  const photoGallery = new ImageGalleryCreator('photo_gallery');
  photoGallery.init();

  // ---- GOOGLE MAPS ----

  // Create the script tag, set the appropriate attributes
  var script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBaeHe1qkIOMjKr3sARyuBu9IXfItMvlI0&callback=initMap';
  script.defer = true;

  // Attach your callback function to the `window` object
  window.initMap = function() {
    const map = new google.maps.Map(document.getElementById('googleMap'), {
      center: { lat: 50.071117, lng: 19.851077 },
      zoom: 13,
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: true
    });
    const marker = new google.maps.Marker({ position: { lat: 50.071117, lng: 19.851077 }, map: map });
  };

  // Append the 'script' element to 'head'
  document.head.appendChild(script);
});
