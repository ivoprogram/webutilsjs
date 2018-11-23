
// global object
var webjs = webjs || {};


// 
(function () {

    // ready
    $(document).ready(function () {
        $(".accordion > a").on("click", itemClick);
 
        //  content ready
        $(".content").on("ready", function () {

            //console.log("content ready");
            $(".content .accordion > a").on("click", itemClick);

        }); // 

    }); // $(document).ready




    // itemClick
    function itemClick(event) {

        console.log("itemClick");

        // select item
        $(this).siblings().removeClass("active");
        $(this).addClass("active");

        $(this).siblings("div").slideUp(100);
        $(this).next().slideDown(300);

    }// function

}()); // closure 


