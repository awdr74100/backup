$(document).ready(function () {
    $("p").hide();
    $(".button").click(function (e) { 
        e.preventDefault();
        $("h1,p").toggle();
        
    });
});