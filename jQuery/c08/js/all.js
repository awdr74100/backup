$(document).ready(function () {
    // 字體放大
    $(".font-l").click(function (e) { 
        e.preventDefault();
        $(".text1").css("font-size", "20px");
    });

    // 字體放中
    $(".font-m").click(function (e) { 
        e.preventDefault();
        $(".text1").css("font-size", "16px");
    });

    // 字體放小
    $(".font-s").click(function (e) { 
        e.preventDefault();
        $(".text1").css("font-size", "13px");
    });

    $(".ad-close").click(function (e) { 
        e.preventDefault();
        $(".ad").hide();
    });

    $(".button").click(function (e) { 
        e.preventDefault();
        $(".content2").stop().slideToggle(5000);
    });


});