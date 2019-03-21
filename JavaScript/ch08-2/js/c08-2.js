$("li a").on("click", function (e) {
    e.preventDefault();
    var url = this.href;

    //$("#contents").removeClass("contents");
    //$(this).addClass("contents");

    $("#contents").remove(); //移除標籤
    //$("#content").load(url + " #contents").hide().fadeIn("slow");  //注意空格



    $.ajax({
        type: "POST",
        url: url,
        timeout: 2000,
        //data: "data",
        //dataType: "dataType",

        beroreSend: function () {
            $("#content").append('<div class="loading">Please Wait</div>'); //請求之前
        },
        complete: function () { //請求之後
            $(".loading").remove();
        },
        success: function (data) { //請求指令
            aa = $(data).find("#contents");
            $("#content").html(aa).hide().fadeIn(400); //加入指定標籤裡面
        },
        error: function () { //請求錯誤
            $("#content").append('<div class="error">載入失敗，請稍後在試</div>'); //請求失敗
        }
    });
});