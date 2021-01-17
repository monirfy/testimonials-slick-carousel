(function ($) {
    $('#year').text(new Date().getFullYear());

    $(document).ready(function () {
        // Testimonials V1
        $('.testimonials-v1').slick({
            infinite: true,
            autoplay: false,
            arrows: true,
            pauseOnHover: false,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="user-prev"><i class="fas fa-long-arrow-alt-left"></i></div>',
            nextArrow: '<div class="user-next"><i class="fas fa-long-arrow-alt-right"></i></div>',
        });
        // Testimonials V2
        $('.testimonials-v2').slick({
            infinite: true,
            autoplay: false,
            arrows: true,
            pauseOnHover: false,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="user-prev"><i class="fas fa-long-arrow-alt-left"></i></div>',
            nextArrow: '<div class="user-next"><i class="fas fa-long-arrow-alt-right"></i></div>',
        });
    });
})(jQuery);
