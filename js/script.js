document.addEventListener(`DOMContentLoaded`, function () { 
  var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
  });


  let ww = $(window).width();

  if (ww >= 1000) {
    AOS.init();
  } else {
    
  }

  // 리사이징 추가
  
  
});
