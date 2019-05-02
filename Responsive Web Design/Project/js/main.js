$(document).ready(function () {
    $(".showmenu").on("click", function (e) {
        e.preventDefault();
        $("body").toggleClass("menu-show");
    });
    $(".icon1").on("click", function (e) {
        $(".icon1").toggleClass("showicon1");
    });
    $(".icon2").on("click", function (e) {
        $(".icon2").toggleClass("showicon1");
    });
    $(".icon3").on("click", function (e) {
        $(".icon3").toggleClass("showicon1");
    });
    $(".icon4").on("click", function (e) {
        $(".icon4").toggleClass("showicon1");
    });
    $("#btn-send").on("click", function () {
        window.location.href = "login.html"
    });
    $("#sign-up").on("click", function () {
        window.location.href = "register.html"
    });
});










