
      function initMap() {
  var map = new google.maps.Map(document.getElementById('page-map'), {
    zoom: 17,
    panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        draggable: true,
        scrollwheel: true,
    center: {lat: 59.936235, lng: 30.321826}
  });

  var image = {
    path: google.maps.SymbolPath.CIRCLE,
    scale: 13,
    strokeColor:'#fff',
    fillColor: '#d22856',
    fillOpacity: 1
    };
  var beachMarker = new google.maps.Marker({
    position: {lat: 59.936235, lng: 30.321826},
    map: map,
    icon: image
  });
}
