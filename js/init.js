function initMap() {
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
      center: new google.maps.LatLng(41.104051,-73.82866),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
  }

(function($){
  $(function(){

    $('.button-collapse').sideNav({closeOnClick: true});
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    //initMap();
  }); // end of document ready
})(jQuery); // end of jQuery name space
