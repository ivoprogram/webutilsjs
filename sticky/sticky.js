


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
