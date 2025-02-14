(function ($) {
    $.fn.typewriter = function () {
        this.each(function () {
            var $ele = $(this), str = $ele.html(), progress = 0;
            $ele.html('');
            var timer = setInterval(function () {
                var current = str.substr(progress, 1);
                if (current == '<') {
                    progress = str.indexOf('>', progress) + 1;
                } else {
                    progress++;
                }
                $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
                if (progress >= str.length) {
                    clearInterval(timer);
                }
            }, 75);
        });
        return this;
    };
})(jQuery);

function timeElapse(date){
    var current = new Date();
    var seconds = (current - date) / 1000;
    var days = Math.floor(seconds / (3600 * 24));
    seconds = seconds % (3600 * 24);
    var hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
    var minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    var result = "<span class='digit'>" + days + "</span> days " + "<span class='digit'>" + hours + "</span> hours " + "<span class='digit'>" + minutes + "</span> minutes " + "<span class='digit'>" + seconds + "</span> seconds";
    $("#elapseClock").html(result);
}

function startHeartAnimation(){
    var offsetX = $("#loveHeart").width() / 2;
    var offsetY = $("#loveHeart").height() / 2 - 55;
    setInterval(function(){
        garden.render();
    }, 50);
}

$(document).ready(function(){
    var together = new Date();
    together.setFullYear(2022, 6, 21); // July 21, 2022
    together.setHours(0);
    together.setMinutes(0);
    together.setSeconds(0);
    together.setMilliseconds(0);

    $(document).ready(function(){
        if (document.createElement('canvas').getContext) {
            setTimeout(function(){
                startHeartAnimation();
            }, 2000);
        } else {
            $("#errorMsg").show();
        }
    });

    timeElapse(together);
    setInterval(function(){
        timeElapse(together);
    }, 500);
    $("#code").typewriter();
});
