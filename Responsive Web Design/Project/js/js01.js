$(document).ready(function () {
    $(".icon").on("click", function (e) {
        e.preventDefault();
        $("body").toggleClass("menu-show");
    });
});