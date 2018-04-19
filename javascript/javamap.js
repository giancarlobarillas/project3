var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 18.2013, lng: -67.1452},
        zoom: 10
    });
    google.maps.event.addDomListener(document.getElementById('1'), 'click', function () {

    map.setCenter(new google.maps.LatLng(10.23,123.45));
});
          }





