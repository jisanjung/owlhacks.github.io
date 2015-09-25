function initialize() {
    var latlng = new google.maps.LatLng(39.970889, -75.142619);
    var mapCanvas = document.getElementById('js-map');
    var mapOptions = {
      center: latlng,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      draggable: false,
      zoomControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true
    };
    var map = new google.maps.Map(mapCanvas, mapOptions)
    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title: 'Impact Hub Philadelphia'
    });
}
google.maps.event.addDomListener(window, 'load', initialize);


var scroll = function(divId) {
    var destination = document.getElementById(divId).offsetTop + document.getElementById(divId).offsetHeight;
    var distance = 1;
    var id;

    var step = function() {
        if(document.body.scrollTop + distance <= destination) {
            window.scrollBy(0, distance);
            distance *= 1.3;
            id = window.requestAnimationFrame(step);
        } else {
            window.scrollTo(0, destination);
            window.cancelAnimationFrame(id);
        }
    }
    id = window.requestAnimationFrame(step);
}

if (!(navigator.userAgent.match(/iPhone/i)) && !(navigator.userAgent.match(/iPod/i))) {
    $('#js-splash-video')
        .removeClass('splash__video--not-supported')
        .addClass('splash__video--supported');
    $('#js-splash-video2')
        .removeClass('splash__video--not-supported')
        .addClass('splash__video--supported');
}
