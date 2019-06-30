$(document).ready(function () {
    $(".question h2").click(function (e) { 
        e.preventDefault();

        // 持續加上樣式
        $(this).toggleClass("active");

        //打開摺疊內容
        $(this).parent().find("p").stop().slideToggle();

        //移除同層樣式
        $(this).parent().siblings().find("h2").removeClass("active");

        //關閉同層摺疊內容
        $(this).parent().siblings().find("p").slideUp();

        
    });

    $(".text").html("<h1 class='a'>哈哈哈</h1>");
    $(".a").text("哇");


    $(".button").click(function (e) { 
        e.preventDefault();
        alert("成功");
        $(".add").html('<input type="button" value="冒泡" class="button">');
    });

    $(".wrap").on("click",".button", function (e) {
        e.preventDefault();
        alert("成功");
        $(".add").html('<input type="button" value="冒泡" class="button">');
    });
    
});