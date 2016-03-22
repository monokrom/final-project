$(document).ready(function () {

    // PORTFOLIO IMAGE SLIDER

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
        pfImageNo += 1;
        if (pfImageNo > imageCount - 1) {
            pfImageNo = 0;
        }
        changeImage();
    });


    $('.previous').click(function () {
        pfImageNo -= 1;
        if (pfImageNo < 0) {
            pfImageNo = imageCount - 1;
        }
        changeImage();
    });




    // PLAYGROUND IMAGE HIGHLIGHT

    $('.flex').on('click', function () {
        $(this).toggleClass('large');
    });


    // SECTION TITLE FADEOUT    
    $('header a').click(function () {
        $('.title').delay(3000).fadeOut(1000);
    });



    // MOBILE NAV 


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
