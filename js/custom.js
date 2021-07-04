$(document).ready(function () {
    $(".banner_slider").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    });

    $(".banner_bottom_content_slide").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        items: 3,
        autoplay: false,

    });

    let banner_height = $('.banner_bottom_content_slide .owl-stage').height();
    $('.banner_bottom_content_slide .owl-stage .banner_bottom_content_slide_item').height(banner_height);

    $(".course_slide").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        items: 3,
        autoplay: true,

    });

    let course_height = $('.course_slide .owl-stage').height();
    $('.course_slide .owl-stage .course_main').height(course_height);

    $(".gallery_slide").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        items: 3,
        autoplay: true,

    });

    
    $(".team_slide").owlCarousel({
        loop: true,
        nav: true,
        margin: 30,
        dots: true,
        items: 2,
        autoplay: true,

    });
    $(".testimonial_slide").owlCarousel({
        loop: true,
        nav: true,
        margin: 30,
        dots: true,
        items: 1,
        autoplay: true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],

    });
    $(".event_slide").owlCarousel({
        loop: true,
        nav: true,
        margin: 30,
        dots: true,
        items: 2,
        autoplay: true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],

    });

    $(".partner_slide").owlCarousel({
        loop: true,
        nav: true,
        margin: 30,
        dots: true,
        items: 5,
        autoplay: true,

    });


});