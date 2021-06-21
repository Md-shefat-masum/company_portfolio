$(document).ready(function () {
    $(".banner_slider").owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        items: 1,
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    });

    $(".banner_bottom_content_slide").owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots: false,
        items: 3,
        autoplay: false,
       
    });

    let banner_height = $('.banner_bottom_content_slide .owl-stage').height();
    $('.banner_bottom_content_slide .owl-stage .banner_bottom_content_slide_item').height(banner_height);
    console.log(banner_height);

});