var map;
function initMap() 
{
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 18.2013, lng: -67.1452},
        zoom: 10
    });
    
    google.maps.event.addDomListener(document.getElementById('naperville'), 'click', function () {
    map.setCenter(new google.maps.LatLng(41.7508,-88.1535));
    });
    google.maps.event.addDomListener(document.getElementById('mayaguez'), 'click', function () {
    map.setCenter(new google.maps.LatLng(18.2013,-67.1452));
    });
    google.maps.event.addDomListener(document.getElementById('chicago'), 'click', function () {
    map.setCenter(new google.maps.LatLng(41.8781,-87.6298));
    });
    
    
}





