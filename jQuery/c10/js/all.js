$(document).ready(function () {
    $(".btn").click(function (e) { 
        e.preventDefault();
        // $(this).parent().toggleClass("active").siblings().removeClass("active");
        $(this).parent().find(".btn").toggleClass("active");
    });
});