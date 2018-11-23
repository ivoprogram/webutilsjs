
// global object
var webjs = webjs || {};
webjs.tabs = webjs.tabs || {};


// 
(function () {

    // ready
    $(document).ready(function () {
        $(".tabs > ul li").on("click", itemClick);
 
        //  content ready
        $(".content").on("ready", function () {

            //console.log("content ready");
            $(".content .tabs > ul li").on("click", itemClick);

        }); // 

    }); // $(document).ready


     // current
    webjs.tabs.current = function (target) {
        var index = $(target + " li.active").index();
        return ++index;

    }// function


    // itemClick
    function itemClick(event) {

        // select item
        $(this).siblings().removeClass("active");
        $(this).addClass("active");

        $(this).parent().siblings("div").removeClass("active");
        $(this).parent().siblings("div").eq($(this).index()).addClass("active");

    }// function


}()); // closure 


