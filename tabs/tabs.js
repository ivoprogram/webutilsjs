﻿/*

Title: 
Description: 
Author: Ivo Gjorgjievski
Website: ivoprogram.com
License: GNU General Public License v3.0 https://www.gnu.org/licenses/gpl-3.0.en.html
Dependency: JQuery

*/

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


