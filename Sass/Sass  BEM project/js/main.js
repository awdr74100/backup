$(document).ready(function () {
    $(".mobile-icon").on("click", function (e) {
        e.preventDefault();
        $("body").toggleClass("mobile");
    });
});