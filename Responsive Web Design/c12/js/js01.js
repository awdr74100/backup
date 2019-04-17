$(document).ready(function () {
    $(".mobile-link").click(function (e) {
        $("body").addClass("open");
    });
    $(".mobile-close").click(function (e) {
        $("body").removeClass("open");

    });
});