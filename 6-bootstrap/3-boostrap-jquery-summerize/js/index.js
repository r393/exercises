$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 4
          }
        }, {
          breakpoint: 520,
          settings: {
            slidesToShow: 3
          }
        }]
      });

      let btn = document.querySelector('#btn1')
      btn.addEventListener("touchend", (e) => {
          console.log(e)
          btn.innerText = "Tapped"
      })
      let body = document.querySelector('body')
      let touchesCountSpan = document.querySelector('#touchesCountSpan')
      body.addEventListener("touchstart",(e) => {
          touchesCountSpan.innerText = e.touches.length
      })
});