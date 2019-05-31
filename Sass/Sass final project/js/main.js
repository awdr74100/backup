$(document).ready(function () {
    $(".mobile-icon").on("click", function (e) {
        e.preventDefault();
        $("body").toggleClass("mobile");
    });
    $(".js-click-1").on("click", function () {
        $(this).toggleClass("card__icon--active");
    });
    $(".js-click-2").on("click", function () {
        $(this).toggleClass("card__icon--active");
    });
    $(".js-click-3").on("click", function () {
        $(this).toggleClass("card__icon--active");
    });
    $(".js-click-4").on("click", function () {
        $(this).toggleClass("card__icon--active");
    });
    $(".js-link-register").on("click", function (e) {
        e.preventDefault();
        window.location.href = "register.html"
    });
});