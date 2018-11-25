/*

Title: 
Description: 
Author: Ivo Gjorgjievski
Website: ivoprogram.com
License: GNU General Public License v3.0 https://www.gnu.org/licenses/gpl-3.0.en.html

*/

// Closure 
(function () {


    window.onscroll = function stickyTop() {

        if (window.pageYOffset < 50) {
            $(".sticky-top").removeClass("sticky-top2");
        } else {
            $(".sticky-top").addClass("sticky-top2");

        }

    };



}()); // Closure 
