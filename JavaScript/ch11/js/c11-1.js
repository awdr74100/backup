$(document).ready(function () {
    $(".on").on("mouseover",".t1", function (e) {
        e.preventDefault();
        $(this)
            .next(".a1")
            .not(":animated")
            .slideToggle();
    });
});