var tabNavs = $(".landerTab__nav");
var tabs = $(".landerTab__tab");

tabNavs.each((key,item)=>{
  let currentBtn = $(item);

  currentBtn.on('click',(e)=>{
      
      tabs.each((key, tab)=>{ 
        $(tab).removeClass('active');
        $(tabNavs[key]).removeClass('active');
      });

      currentBtn.addClass('active');
      $(currentBtn.data('tab')).addClass('active');

  });
});


// $(window).on("load resize orientationchange", function () {
//   let delay = 0;
  // $(".slider").each(function () {
  //   let slider = $(this);
    
    $(".slider").slick({
      centerMode: false,
      centerPadding: '60px',
      arrows: true,
      dots: true,
      slidesToShow: 3,
      autoplay: true,
      speed: 800,
      // delay: delay,
      // prevArrow: $(".slider").parent('.slider__btnPrev'),
      // nextArrow: $(".slider").parent('.slider__btnNext'),
      responsive: [
        {
          breakpoint: 1360,
          settings: {

            slidesToShow: 3
          }
        },
        {
          breakpoint: 940,
          settings: {

            slidesToShow: 2
          }
        },
        {
          breakpoint: 580,
          settings: {

            slidesToShow: 1
          }
        }
      ]
    });

  //   delay += 200;
  // });
// });
var wow = new WOW({
  boxClass: "wow",
  animateClass: "animated",
  offset: 0,
  mobile: true,
  live: true,
  scrollContainer: null,
  resetAnimation: true,
});
wow.init();