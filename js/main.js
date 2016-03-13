$(document).ready(function () {
    //NAV
    $('header').hover(function () {
        $(this).toggleClass('expand');
        $('nav ul').toggleClass('open');
        
    });

});