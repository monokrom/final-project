$(document).ready(function () {

//IMAGE SLIDER First Attempt
   
    var currentImage = 0;
 var images = $('.slideContainer li');
var imageCount = images.length;

function changeImage() {
  var image = $('.slideContainer li').eq(currentImage);
  images.fadeOut(100, function(){
      $(this).addClass('imagefade');
  });
  image.css('display','inline-block');
}
/*
var autoSlide = setInterval(function() {
  currentImage += 1;
  if (currentImage > imageCount - 1) {
    currentImage = 0;
  }
  changeImage();
}, 3000);
*/
$('.next').click(function() {
//  clearInterval(autoSlide);
  currentImage += 1;
  if (currentImage > imageCount - 1) {
    currentImage = 0;
  }

  changeImage();
    
});

$('.previous').click(function() {
 // clearInterval(autoSlide);
  currentImage -= 1;
  if (currentImage < 0) {
    currentImage = imageCount - 1;
  }
  changeImage();
});
    
    
    

    // SECTION TITLE FADEOUT    
    $('header a').click(function () {
        $('.title').delay(3000).fadeOut(1000);
    });



    //MOBILE NAV 


    if ($(window).width() < 481) {

        $('header').click(function () {
            $(this).toggleClass('expand');
            $('nav ul').toggleClass('open');
        });
    } else {
    
        // DESKTOP NAV
        
        $('header').hover(function () {
            $(this).toggleClass('expand');
            $('nav ul').toggleClass('open');
        });
    }

});


//gallery

//check out carousels



 //IMAGE SLIDER First Attempt
 /*   $("div.previous").click(function () {
        $("#portfolio img").animate({
            "left": "+=100%"
        });
    });

    $("div.next").click(function () {
        $("#portfolio img").animate({
            "left": '-=100%'
        });
    });
    
    */