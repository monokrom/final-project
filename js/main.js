$(document).ready(function () {

    //PORTFOLIO IMAGE SLIDER Second Attempt

    var pfImageNo = 0;
    var images = $('.slideContainer li');
    var imageCount = images.length;

    function changeImage() {
        var image = $('.slideContainer li').eq(pfImageNo);
        images.fadeOut(100, function () {
            $(this).addClass('imagefade');
        });
        image.css('display', 'inline-block');
    }
  
    // PORTFOLIO IMAGE SLIDER Previous & Next Nav
    
    $('.next').click(function () {
        //  clearInterval(autoSlide);
        pfImageNo += 1;
        if (pfImageNo > imageCount - 1) {
            pfImageNo = 0;
        }

        changeImage();

    });

    $('.previous').click(function () {
        // clearInterval(autoSlide);
        pfImageNo -= 1;
        if (pfImageNo < 0) {
            pfImageNo = imageCount - 1;
        }
        changeImage();
    });


    
    
    // PLAYGROUND IMAGE HIGHLIGHT
/*
    var plImages = $('#playground').find('img').map(function(){
    return this.src;
}).get();
    alert(plImages);
    
  /*  $('div.flex img').click(function(){
      $('div img').addClass();
        $('.flex').hide();
         $(this).add;
    });
        
    
*/
     $('.flex').on('click', function (){
        $(this).toggleClass('large');
    });
    /*
     $('.flex').on('click', function (){
        $(this).css('width', '100%'; );
    }); */
    /*
$('.flex').click(function(){
    $(this).toggleClass('large');
});*/

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