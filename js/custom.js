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
});