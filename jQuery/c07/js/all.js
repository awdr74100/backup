$(document).ready(function () {
    $(".button").click(function (e) { 
        e.preventDefault();
        // $(".box1").delay().slideDown();
        // $(".box2").delay(1000).slideDown();
        // $(".box3").delay(2000).slideDown();

        $(".box1").delay().fadeIn();
        $(".box2").delay(1000).slideDown();
        $(".box3").delay(2000).show(0);
    });
});