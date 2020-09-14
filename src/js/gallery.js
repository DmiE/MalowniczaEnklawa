export default class ImageGalleryCreator {
  constructor(galleryName) {
    this.gallery = document.getElementById(galleryName + '__container');
    this.popupImg = document.getElementById(galleryName + '__popup_img');
    this.allImages = document.querySelectorAll('.' + galleryName + '__photo');
    this.galleryPopup = document.getElementById(galleryName + '__popup');
    this.exitPopupButton = document.getElementById(galleryName + '__popup_exit');
    this.activePhotoNumber = null;
    this.prevPhotoButton = document.getElementById(galleryName + '__popup_prev_button');
    this.nextPhotoButton = document.getElementById(galleryName + '__popup_next_button');
    this.galleryName = galleryName;
  }

  setupEventListeners = function() {
    this.gallery.addEventListener('click', e => {
      if (e.target.classList.value.indexOf(this.galleryName + '__photo') !== -1) {
        this.changePhotoSourceAndShowPopup(e.target);
        this.setActiveNumber(e.target);
      }
    });

    this.exitPopupButton.addEventListener('click', e => {
      this.closePopup();
    });

    this.prevPhotoButton.addEventListener('click', e => {
      this.setToPrevPhoto();
    });

    this.nextPhotoButton.addEventListener('click', e => {
      this.setToNextPhoto();
    });
  };

  changePhotoSourceAndShowPopup = function(element) {
    this.popupImg.src = element.src;
    this.galleryPopup.classList.add('visible');
    this.galleryPopup.classList.add('show');
    document.querySelector('html').classList.add('scroll__block');
  };

  setActiveNumber = function(element) {
    this.allImages.forEach((elem, index) => {
      if (element.src === elem.src) {
        this.activePhotoNumber = index;
      }
    });
  };

  setToPrevPhoto = function() {
    if (this.activePhotoNumber - 1 >= 0) {
      this.popupImg.src = this.allImages[this.activePhotoNumber - 1].src;
      this.activePhotoNumber--;
    } else {
      this.popupImg.src = this.allImages[this.allImages.length - 1].src;
      this.activePhotoNumber = this.allImages.length - 1;
    }
  };

  setToNextPhoto = function() {
    if (this.activePhotoNumber + 1 < this.allImages.length) {
      this.popupImg.src = this.allImages[this.activePhotoNumber + 1].src;
      this.activePhotoNumber++;
    } else {
      this.popupImg.src = this.allImages[0].src;
      this.activePhotoNumber = 0;
    }
  };

  closePopup = function() {
    this.galleryPopup.classList.remove('show');
    this.galleryPopup.classList.remove('visible');
    document.querySelector('html').classList.remove('scroll__block');
  };

  init = function() {
    this.setupEventListeners();
  };
}
