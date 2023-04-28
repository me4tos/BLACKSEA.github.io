let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");


searchBox.addEventListener("click", () => {
    navbar.classList.toggle("showInput");
    if (navbar.classList.contains("showInput")) {
        searchBox.classList.replace("bx-search", "bx-x");
    } else {
        searchBox.classList.replace("bx-x", "bx-search");
    }
});


let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
    navLinks.style.left = "0";
}
menuCloseBtn.onclick = function () {
    navLinks.style.left = "-100%";
}


let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
    navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function () {
    navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function () {
    navLinks.classList.toggle("show3");
}
// SWIPER
function slidesPlugIn(activeSlide = 0) {
    let slides = document.querySelectorAll(".slide");
    slides[activeSlide].classList.add('active')
  
    for (let slide of slides) {
      slide.addEventListener("click", () => {
        clearActiveClasses();
        slide.classList.add("active");
      });
    }
    function clearActiveClasses() {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
  }
  
  slidesPlugIn()
  // FILTER
  let list = document.querySelectorAll(".list li");
  let box = document.querySelectorAll(".box");
  
  list.forEach((el)=>{
      el.addEventListener("click" , (e)=>{
          list.forEach((el1)=>{
              el1.style.color = "#fff";
          })
          e.target.style.color = "gray"
          box.forEach((el2)=>{
              el2.style.display = "none";
          })
          document.querySelectorAll(e.target.dataset.color).forEach((el3)=>{
              el3.style.display = "flex";
          })
      })
  })
    //MODAL-WINDOW
    const wrapperr = document.querySelector('.wrapperr');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');
  
    registerLink.addEventListener('click', ()=> {
        wrapperr.classList.add('active');
    });
  
    loginLink.addEventListener('click', ()=> {
      wrapperr.classList.remove('active');
  });
  
  btnPopup.addEventListener('click', ()=> {
    wrapperr.classList.add('active-popup');
  });
  
  iconClose.addEventListener('click', ()=> {
    wrapperr.classList.remove('active-popup');
  });
  // BTN-UP
  const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      // удалим у кнопки класс btn-up_hide
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      // добавим к кнопке класс btn-up_hide
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      // при прокрутке содержимого страницы
      window.addEventListener('scroll', () => {
        // определяем величину прокрутки
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
        scrollY > 400 ? this.show() : this.hide();
      });
      // при нажатии на кнопку .btn-up
      document.querySelector('.btn-up').onclick = () => {
        // переместим в начало страницы
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();
  // SCROLL
  $('.btnLogin-popup').on('click', function() {
    var el = $(this);
    var dest = el.attr('.wrapperr .active-popup'); // получаем направление
    if (dest !== undefined && dest !== '') { // проверяем существование
      $('html').animate({
          scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
        }, 500 // скорость прокрутки
      );
    }
    return false;
  });