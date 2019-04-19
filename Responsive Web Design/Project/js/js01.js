$(document).ready(function () {
    $(".showmenu").on("click", function (e) {
        e.preventDefault();
        $("body").toggleClass("menu-show");
    });
});