$(function(){

  ///preloader

$(window).on('load', function(){

    $('.preloader').delay(1500).fadeOut(500);

});


  //Counter//

      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    
  //Brand//

    $('.brand-logo-main').slick({
      slidesToShow:5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:false,
      speed:500,
      arrows:true,
      prevArrow:'.left',
      nextArrow:'.right',
    });

    $('.choose-item-right').slick({
      slidesToShow:2,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed: 2000,
      arrows:false,
      speed:500,
      vertical:true,
      centerPadding:0,
      dots:true,
  
    });

    //wow

    new WOW().init();


//back to top

$('.back-to-top').click(function(){
  $('html, body').animate({scrollTop:0},1000);

});

$(window).scroll(function(){

  var sohel = $(this).scrollTop();

  if(sohel > 300){
    $('.back-to-top').fadeIn(500);
  }

  else{
    $('.back-to-top').fadeOut(500);
  }


});

  //banner//
  $('.banner-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:true,
    prevArrow:'.left',
    nextArrow:'.right',
    
});

//blog

$('.blog-main').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  dots:true,
});


});
