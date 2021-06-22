$(document).ready(function() {


    //toggle menu
    $(".menu-toggle").on("click", function() {
        $(".menu-wrp").toggleClass("visible");
        $(".content").toggleClass("menu-visible");
    })

    //scroll to anchor
    $(".main-menu").on("click","a", function (event) {
		event.preventDefault();
        var id  = $(this).attr('href');
        $(".main-menu a").removeClass("active");
        $(this).addClass("active");
        $("section").removeClass("visible");
        $(id).addClass("visible");
        $(id).scrollTop(0);
    });
    
    //isotope.js, filtering items in portfolio
    var isotopeItems = $(".portfolio-list");
    isotopeItems.isotope({ filter: "*" });
    isotopeItems.isotope('layout');
    
    $('#filters').on( 'click', 'a', function(e) {
        e.preventDefault();
        var filterValue = $(this).attr('data-filter');
        isotopeItems.isotope({ filter: filterValue });
        $("#filters a").removeClass("is-checked");
        $(this).addClass("is-checked");
    });
    
    $(window).resize(function() {
        isotopeItems.isotope('layout');
    });

    //smooth scrolling
    SmoothScroll({ keyboardSupport: false });

    //wowjs
    // new WOW().init();
        
});


$(window).bind('load', function() {
    //preloader
    $('#preload').find('i').fadeOut().end().delay(300).fadeOut(300);    
});
