$(".tab-list").each(function(){
    var $this = $(this);
    var $tab = $this.find("li.active");
    var $link = $tab.find("a");
    var $pan1 = $($link.attr("href"));

    $this.on("click",".tab-control",function(e){
        e.prventDefault();
        var $link = $(this);
        var id = this.hash;

        if (id && !$link.is(".active")) {
            $pan1.removeClass("active");
            $tab.removeClass("active");

            $pan1 = $(id).addClass("active");
            $tab = $link.parent().addClass("active")
        }
    });



});