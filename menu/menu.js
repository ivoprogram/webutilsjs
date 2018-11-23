
// global object
var webjs = webjs || {};


// 
(function () {

    // ready
    $(document).ready(function () {
        $(".menu li").on("click", itemClick);

        //  content ready
        $(".content").on("ready", function () {

            //console.log("content ready");
            $(".content .menu li").on("click", itemClick);
        }); // 
    }); // $(document).ready

    // itemClick
    function itemClick(event) {
        // select item
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(this).parent().children().toggleClass("show");
        //$(this).siblings().toggleClass("show");

    }// function


}()); // closure 


