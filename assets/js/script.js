// Get user location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(newMap, locError);
    } else {
        locError()
    }
}
// If user location cannot be found
function locError(err) {
    console.log("Error finding your location", err);
}

// Declaring Global Variables 
var directions = [];
var radius = 5000; //default radius 5km
let map, infoWindow, origin;


// Create Map, Radius and Google Palces Request 
function newMap(position) {
    const { latitude, longitude } = position.coords;
        origin = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 53.3242381, lng: -6.385786},
        zoom: 11,
        streetViewControl: false,
        disableDefaultUI: true
        });
    // Display user location on map.
        infoWindow = new google.maps.InfoWindow() 
        infoWindow.setPosition({ lat: latitude, lng: longitude});
        infoWindow.setContent("Your Location");
        infoWindow.open(map);
        map.setCenter({ lat: latitude, lng: longitude});
    // Draw radius on map.
    const radiusCircle = new google.maps.Circle({
        strokeColor: "#0f0f0f",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0f0f0f",
        fillOpacity: 0.15,
        map,
        center: { lat: latitude, lng: longitude},
        radius: radius,
    });
    // Google Places request object for parks within a 5km radius.
    var request = {
        location: { lat: latitude, lng: longitude},
        radius: radius,
        openNow: true,
        type: ['park']
    };
}