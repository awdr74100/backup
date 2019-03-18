/*$(document).ready(function () {
    
});*/

$(function(){
    $("#one").text(); //取得文字內容
    $("#three").html(); //取得指定標籤內的標籤
});

$(function(){
    $("#e1").remove(); //移除指定標籤
    $("#e2").replaceWith("<p class='new'>我是新增的</p>");  //取代指定標籤
});

$(function(){
    $("#one").before("<p class='new'>我是新增的</p>"); //插入上同階層
    $("#one").after("<p class='new'>我是新增的</p>"); //插入下同階層
    $("#one").prepend("<p class='new'>我是新增的</p>"); //插入內首項
    $("#one").append("<p class='new'>我是新增的</p>"); //插入內尾項
});


$(function(){
    $("#one").removeClass("hot"); //移除class屬性
    $("#one").addClass("c1");   //增加class屬性
    $("ul").attr("id", "zero"); //增加id屬性
    $("ul").removeAttr("id");   //移除id屬性
});

$(function(){
    $(".new").css("background-color", "red"); //根據style新增css
    $(".new").css("margin-top", "20px"); //根據style新增css
    $(".new").css({                     //新增多個css特性
        "margin-top": "+=15px",         //可增加或減少
        "border":"1px solid blue"
    });
});

$(function(){
    $("li").each(function () {  //類似for迴圈
        var ide = this.id;
        $(this).append("<span class='order'>"+ide+"</span>");
        
        
    });
});

$("#btn1").on("click", function () {  //事件觸發回應
    $(this).addClass("bt");    
});

$(function(){
    $("#effect").hide().fadeIn(); //特效展示
});

$(function(){
    $(".hot").on("click", function () {  //自訂效果
        $(this).animate({
            opacity:0.0,
            paddingLeft:"+=80"
        },500,function(){
            $(this).remove();
        
        })
    });
});


$(function(){
    $("#img").on("click", function () { //自訂效果
        $(this).animate({
            opacity:0.0,
            paddingLeft:"+=80"
        },300,function(){
            $(this).remove();
               
        })
        
    });
});



$(function(){
    var e1 = $("#e1");

});












