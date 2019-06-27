$(document).ready(function () {
    $(".link").click(function (e) { 
        e.preventDefault();
        $(".box").css("border", "1px solid red");
        $(".box").css("width", "300px");
    });
});