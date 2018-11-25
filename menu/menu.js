/*

Title: 
Description: 
Author: Ivo Gjorgjievski
Website: ivoprogram.com
License: GNU General Public License v3.0 https://www.gnu.org/licenses/gpl-3.0.en.html
Dependency: JQuery

*/

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


