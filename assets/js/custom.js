// Custom Scripts for Primal Template //

jQuery(function ($) {
    /* --------- Wow Init ------ */

    new WOW().init();

    /*----- Preloader ----- */

    $(window).load(function () {
        setTimeout(function () {
            $('#loading').fadeOut('slow', function () {});
        }, 3000);
    });
});