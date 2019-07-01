$(document).ready(function () {
    $(".wrap").on("click", ".img", function (e) {
        e.preventDefault();
        $(".img").attr("width", "200px");
        $("h2").attr("class", "b");
    });

    $(".btn").on("click", function () {
        $(this).parent().parent().remove();
    });

    $(".btn-return").on("click", function (e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop:0
        }, 500);
    });
});