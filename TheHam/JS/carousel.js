$(document).ready(function() {
    $("#indicators li:first-child").addClass("active");

    function slide(target) {
        $("#indicators li").removeClass("active").eq(target).addClass("active");
        $("#slider ul li").animate({
            'right': +1160 * target + 'px'
        }, 250);
    }

    $("#indicators li").click(function () {
        var target = $(this).index();
        slide(target);

        //стоп
        clearInterval(timer);
        //старт
        timer = setInterval(function () {
            $('#next').trigger('click');
        }, 2500);

    });

    $("#next").click(function () {
        var target = $("#indicators li.active").index();
        if (target === $("#indicators li").length - 1) {
            target = -1;
        }
        target = target + 1
        slide(target);

        //стоп
        clearInterval(timer);
        //старт
        timer = setInterval(function () {
            $('#next').trigger('click');
        }, 2500);

    });

    $("#prev").click(function () {
        var target = $("#indicators li.active").index();
        if (target === 0) {
            target = $("#indicators li").length;
        }
        target = target - 1;
        slide(target);
    });


    var timer = null;
    timer = setInterval(function () {
        $('#next').trigger('click');
    }, 2500);

});