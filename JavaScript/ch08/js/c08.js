$("li a").on("click", function (e) {
    e.preventDefault();
    var url = this.href;

    //$("#contents").removeClass("contents");
    //$(this).addClass("contents");

    $("#contents").remove();
    $("#content").load(url + " #contents").hide().fadeIn("slow");  //注意空格
});