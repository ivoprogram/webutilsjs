
// global object
var webjs = webjs || {};


// 
(function () {

    // ready
    $(document).ready(function () {

        init(".slideshow");

        //  content ready
        $(".content").on("ready", function () {
            init(".content .slideshow");

        }); // 

    }); // $(document).ready


    // init
    function init(target) {
        //setInterval(interval, 1000);
        //$(".slideshow").each("click", play);

        $(target + " .icon").on("click", icon);

        $(target + " .play").on("click", play);
        $(target + " .stop").on("click", stop);

        $(target + " .first").on("click", first);
        $(target + " .last").on("click", last);
        $(target + " .prev").on("click", prev);
        $(target + " .next").on("click", next);

        $(target).each(function (index, slideshow) {
            //console.log(index);
            var int = $(slideshow).children(".interval").text();
            int = parseInt(int);
            //console.log(int);

            if (!int) { int = 3000; }

            setInterval(function () {
                interval(slideshow);
            }, int);

        });

    }

    // icon
    function icon(event) {
        $(this).siblings().toggle();
    }


    // play
    function play(event) {
        $(this).parents(".slideshow").addClass("play");
    }

    // stop
    function stop(event) {
        $(this).parents(".slideshow").removeClass("play");
    }

    // first
    function first(event) {
        //console.log("next");
        var slideshow = $(this).parents(".slideshow");
        $(slideshow).removeClass("play");
        setIndex(slideshow, 0);
    }

    // last
    function last(event) {
        //console.log("next");
        var slideshow = $(this).parents(".slideshow");
        var len = $(slideshow).children(".slide").length;
        $(slideshow).removeClass("play");
        setIndex(slideshow, len - 1);
    }


    // prev
    function prev(event) {
        //console.log("next");
        var slideshow = $(this).parents(".slideshow");
        var index = $(slideshow).children(".slide.active").index();
        $(slideshow).removeClass("play");
        setIndex(slideshow, index - 1);
    }



    // next
    function next(event) {
        //console.log("next");
        var slideshow = $(this).parents(".slideshow");
        var index = $(slideshow).children(".slide.active").index();
        $(slideshow).removeClass("play");
        setIndex(slideshow, index + 1);
    }


    // interval, next
    function interval(slideshow) {
        if ($(slideshow).hasClass("play")) {
            var index = $(slideshow).children(".slide.active").index();
            setIndex(slideshow, index + 1);
        }

    }// 


    // setIndex
    function setIndex(slideshow, index) {

        var len = $(slideshow).children(".slide").length;
        if (!(index < len)) { index = 0; }
        if (index < 0) { index = 0; }

        $(slideshow).find(".current").text(index + 1);
        $(slideshow).find(".total").text(len);

        //console.log(len);
        //console.log(index);

        //$(slideshow).children(".slide").removeClass("active");
        //$(slideshow).children(".slide").eq(index).addClass("active");
 
        $(slideshow).children(".slide.active").fadeOut(300, function () {
            // Animation complete
            $(slideshow).children(".slide.active").hide();
            $(slideshow).children(".slide").removeClass("active");

            $(slideshow).children(".slide").eq(index).addClass("active");
            $(slideshow).children(".slide.active").fadeIn(300);
        });
 


    }// 

}()); // closure 


