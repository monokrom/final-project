$(document).ready(function () {


    //IMAGE SLIDER
    $("div.previous").click(function () {
        $("#portfolio img").animate({
            "left": "-=100%"
        });
    });

    $("div.next").click(function () {
        $("#portfolio img").animate({
            "left": '+=100%'
        });

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