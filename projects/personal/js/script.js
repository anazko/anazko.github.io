$(document).ready(function() {

    //isotope.js, filtering items in portfolio
    var isotopeItems = $(".portfolio-list");
    isotopeItems.isotope({ filter: "*" });

    $('#filters').on( 'click', 'a', function(e) {
        e.preventDefault();
        var filterValue = $(this).attr('data-filter');
        isotopeItems.isotope({ filter: filterValue });
      });

    $(window).resize(function() {
        isotopeItems.isotope('layout');
    });


    //menu visible if screen > 1600px
    if ($(window).width() > 1600) {
        $(".menu-wrp").addClass("visible");
        $(".content").addClass("menu-visible");
    }

    //toggle menu
    $(".menu-toggle").on("click", function() {
        $(".menu-wrp").toggleClass("visible");
        $(".content").toggleClass("menu-visible");
    });

    //scroll to anchor
    $(".main-menu").on("click","a", function (event) {
		event.preventDefault();
        var id = $(this).attr('href');
        var top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
    
    //highlight active link on scroll
    jQuery(window).scroll(function() {
        var $sections = $('section');
        $sections.each(function(i, el) {
            var top = $(el).offset().top - 100;
            var bottom = top + $(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');
            if (scroll > top && scroll < bottom) {
                $('.main-menu a.active').removeClass('active');
                $('.main-menu a[href="#' + id + '"]').addClass('active');
            }
        })
    });

    //smooth scrolling
    SmoothScroll({ keyboardSupport: false });
        
});

$(window).bind('load', function() {

    //preloader
    $('#preload').find('i').fadeOut().end().delay(300).fadeOut(300);
    
    //wowjs
    new WOW().init();    
});
