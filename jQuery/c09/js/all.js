$(document).ready(function () {
    $(".header").click(function (e) { 
        e.preventDefault();
        $(".wrap").toggleClass("open");
    });

    $(".button").click(function (e) { 
        e.preventDefault();
        $(".footer").toggleClass("bounceInLeft");
    });
});