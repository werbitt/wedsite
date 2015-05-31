(function($){
    $(function(){
        $('.button-collapse').sideNav({closeOnClick: true});
        $('.parallax').parallax();
        $('.scrollspy').scrollSpy();
        $('#map-canvas').click(function () {
            $('#map-canvas iframe').css("pointer-events", "auto");
        });
        $('#map-canvas').mouseleave(function () {
            $('#map-canvas iframe').css("pointer-events", "none");
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space
