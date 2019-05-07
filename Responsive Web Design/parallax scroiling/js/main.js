$(document).ready(function () {
    $(".scrollTop").click(function (e) {
        e.preventDefault();
        var target = $(this).attr("href");
        var targetPos = $(target).offset().top;
        $("html,body").animate({
            scrollTop: targetPos
        }, 1000)
        // console.log(target);

    });

    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        console.log(scrollPos);

        $(".scrollTop").each(function () {
            var target = $(this).attr("href");
            var targetPos = $(target).offset().top;
            var targetHeight = $(target).outerHeight();
            console.log(target, targetPos, targetHeight);

            if (targetPos - 1 <= scrollPos && (targetPos + targetHeight) > scrollPos) {
                //   console.log(target);
                $(".scrollTop").removeClass("active");
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
    });
});