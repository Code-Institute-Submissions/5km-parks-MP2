// Get user location
function getLocation() {
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };  
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(newMap, locError, options);
    } else {
        locError()
    }
}
// If user location cannot be found
function locError(err) {
    var userMessage = document.querySelector('.location-status')
        console.log("Error finding your location", err);
        userMessage.classList.toggle('location-error');
        userMessage.innerHTML =  `Location could not be found.<br>Please <a href="/">reolad page</a> and try again.`;
}

// Declaring Global Variables 
var directions = [];
var markers = [];
var radius = 5000; //default radius 5km
let map, infoWindow, origin, radiusCircle;


// Create Map, Radius and Google Palces Request
// https://developers.google.com/maps/documentation/javascript/examples/map-geolocation 
function newMap(position) {
    const { latitude, longitude } = position.coords;
        origin = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 53.3242381, lng: -6.385786}, //Dublin GPS
        zoom: 11,
        streetViewControl: false,
        zoomControl: true,
        disableDefaultUI: true,
        gestureHandling: 'greedy'
        });
    var LocationMsg = `<div class='map-popup'>` +
                      `<span>Your Location</span>` +
                      `<span>Lat: <em>${position.coords.latitude.toFixed(4)}</em> | Lng: <em>${position.coords.longitude.toFixed(4)}</em></span>` +
                      `</div>`;
    // Display user location on map.
        infoWindow = new google.maps.InfoWindow() 
        infoWindow.setPosition({ lat: latitude, lng: longitude});
        infoWindow.setContent(LocationMsg);
        infoWindow.open(map);
        map.setCenter({ lat: latitude, lng: longitude});
    // Draw radius on map.
    radiusCircle = new google.maps.Circle({
        strokeColor: "#0f0f0f",
        strokeOpacity: 0.6,
        strokeWeight: 2,
        fillColor: "#0f0f0f",
        fillOpacity: 0.2,
        map,
        center: { lat: latitude, lng: longitude},
        radius: radius,
    });
    // Google Places request object for parks within a 5km radius.
    searchParks()

    localStorage.setItem('position_lat', position.coords.latitude ); // TEMP 
    localStorage.setItem('position_lng', position.coords.longitude ); // TEMP
}

function searchParks() {
    var request = {
        location: origin,
        radius: radius,
        openNow: true,
        type: ['park']
    };
    // Google Places request 
    // https://developers.google.com/maps/documentation/javascript/places
    let service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);
}


// Find required content - plot markers and data and position map to destination.
// https://developers.google.com/maps/documentation/javascript/directions
function createContent(place) {
    const directionsService = new google.maps.DirectionsService();
    var parkMarker = {
                    url: './assets/img/map-marker.png',
                    size: new google.maps.Size(200, 200),
                    scaledSize: new google.maps.Size(32, 32),
                    anchor: new google.maps.Point(16, 16),
                    labelOrigin: new google.maps.Point(16, 16)
                    
                };
    if (place.user_ratings_total > 100) {
        const marker = new google.maps.Marker({
            map: map,
            icon: parkMarker,
            animation: google.maps.Animation.DROP,
            position: place.geometry.location,
        });
        markers.push(marker);
        
        google.maps.event.addListener(marker, "click", () => {
            var destination = place.geometry.location;
            var markerName = `<div class='map-popup'>` +
                             `<span>${place.name}</span>` +
                             `</div>`;
                infoWindow.setPosition(destination);
                infoWindow.setContent(markerName);
                infoWindow.open(map);
                map.setZoom(12);
                reloadRoute()
                calculateAndDisplayRoute(directionsService, destination, place);
        });
    } 
}

//Used to remove exisitng markers from arrray/ map - called when user radius is changed
function reloadMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}

//Used to reload exisiting route on map
function reloadRoute() {
    if (directions && directions.length > 0) {
        for (var i = 0; i < directions.length; i++)
            directions[i].setMap(null);
    }
    directions = [];
}

//Distance and route calculation and render
function calculateAndDisplayRoute(directionsService, destination, place) {
    directionsService.route(
    {
      origin: origin,
      destination: destination,
      travelMode: google.maps.TravelMode.WALKING,
    },
    (response, status) => {
        if (status === "OK") {
            for (var i = 0, len = response.routes.length; i < len; i++) {
                directions.push(new google.maps.DirectionsRenderer({
                map: map,
                directions: response,
                routeIndex: i
                }));
                let distanceKm = response.routes[0].legs[0].distance.value / 1000,
                    timeMn = response.routes[0].legs[0].duration.value / 60;
                var markerResponce = `<div class='map-popup'>` +
                                 `<span>${place.name}</span>` +
                                 `<span>${timeMn.toFixed(1)} minutes walk..</span>` +
                                 `</div>`;  
                var cardHeight = document.getElementById('mapContent').scrollHeight;
                            infoWindow.setContent(markerResponce);
                            document.getElementById('mapContent').style.height = `calc(${cardHeight}px)`;
                            document.getElementById('mapContent').classList.add('active');
                            document.getElementById('mapContent').innerHTML =
                                `<div class="park-container">` +
                                `<div class ="park-item">` + 
                                `<div class ="park-img" style="background: url(${place.photos[0].getUrl()})" alt="${place.name}"></div>` + 
                                `</div>` +
                                `</div>` +
                                `<div class="park-data">`+
                                `<p><span> ${place.name}</span></p>` +
                                `<p><i class="fas fa-map-marker-alt"> </i><span> ${distanceKm.toFixed(1)}</span> km away</p>` +
                                `<p><i class="fas fa-walking"></i> <span> ${timeMn.toFixed(1)}</span> min walk</p>` +
                                `<p><i class="far fa-star"></i> <span> ${place.rating} /5</span> user rating</p>` +
                                `</div>`;
            }
        } else {
            window.alert("Could not plot route due to " + status);
        }
    }
  );
}
//Solution to clear each route render (also applied to markers) : 
//https://stackoverflow.com/questions/32676497/google-map-api-v3-cannot-clear-the-previous-mutiple-routes-history


// Callback function to iterate through Google Place results. 
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createContent(results[i]);
    }
  }
}