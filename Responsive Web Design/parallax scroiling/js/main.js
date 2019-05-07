$(document).ready(function () {
    var showSkill = false;


    // 動畫移動到錨點位置 start

    $('.scrollTop').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        // console.log(targetPos);
        $('html, body').animate({
            scrollTop: targetPos
        }, 1000);
    });

    // 動畫移動到錨點位置 end




    //y軸移動時的觸發 start

    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        console.log(windowHeight);
        // console.log(scrollPos, windowHeight);

        $('.scrollTop').each(function () {
            var target = $(this).attr('href');
            var targetPos = $(target).offset().top;
            var targetHeight = $(target).outerHeight();
            if (targetPos - 1 <= scrollPos && (targetPos + targetHeight) > scrollPos) {
                $('.scrollTop').removeClass('active')
                $(this).addClass('active');
            } else {
                $(this).removeClass('active')
            }
        });

        //y軸移動時的觸發 end




        //技能條動畫顯示跑動 start

        var skillTop = $('#skills').offset().top;
        // console.log('skillTop', skillTop);
        if (skillTop <= (scrollPos + windowHeight / 2) && !showSkill) {
            showSkill = true;
            $('#skills .progress-bar').each(function () {
                var thisValue = $(this).data('progress');
                // console.log('thisValue', thisValue);
                $(this).css('width', thisValue + '%');
            });
        }

        //技能條動畫顯示跑動 end




        //物件淡入淡出效果 start

        $('.animated').each(function () {
            var thisPos = $(this).offset().top;
            if ((windowHeight + scrollPos) >= thisPos) {
                $(this).addClass('fadeIn');
            }
        });

        //物件淡入淡出效果 end




        //指定物件偏移 end

        $('#profiles').css('background-position-y', (scrollPos / 2) + 'px')
        $('#header-ele').css('transform', 'translateY( ' + (scrollPos / 2) + 'px )')

        //指定物件偏移 end
    });

});