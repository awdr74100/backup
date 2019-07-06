$(document).ready(function () {

    // menu dropdownlist setting
    $(".jq-dropdownlist").click(function (e) {
        e.preventDefault();
        $(".jq-dropdownlist__open").slideToggle();
        $(".jq-dropdownlist").toggleClass("dropdownlist--active");
    });

    // top button
    $(".jq-topButton a").click(function (e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: 0
        }, 500);
    });

    // top button effect
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".jq-topButton").fadeIn(200);
        } else {
            $(".jq-topButton").stop().fadeOut(200);
        }

    });

    // Lightbox setting
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    })


    // Swiper setting
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 3000,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },

        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    })
});