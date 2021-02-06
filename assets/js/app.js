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
var radius = 5000; //default radius 5km
let map, infoWindow, origin;


// Create Map, Radius and Google Palces Request 
function newMap(position) {
    const { latitude, longitude } = position.coords;
        origin = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 53.3242381, lng: -6.385786}, //Dublin GPS
        zoom: 11,
        streetViewControl: false,
        zoomControl: true,
        disableDefaultUI: true
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
    // Google Places request 
    let service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);
}


// Find required content - plot markers and data and position map to destination.
function createContent(place) {
    const directionsService = new google.maps.DirectionsService();
    if (place.user_ratings_total > 100) {
        const marker = new google.maps.Marker({
            map,
            position: place.geometry.location,
        });
        google.maps.event.addListener(marker, "click", () => {
            var destination = place.geometry.location;
            var markerName = `<div class='map-popup'>` +
                             `<span>${place.name}</span>` +
                             `</div>`;
            infoWindow.setPosition(destination);
            infoWindow.setContent(markerName);
            infoWindow.open(map);
            map.setZoom(12);
            if (directions && directions.length > 0) {
                for (var i = 0; i < directions.length; i++)
                    directions[i].setMap(null);
            }
            directions = [];
            calculateAndDisplayRoute(directionsService, destination, place);
        });
    } 
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
                    infoWindow.setContent(markerResponce); 
                    document.getElementById('mapContent').innerHTML =
                                `<div class="park-container">` +
                                `<div class ="park-item">` + 
                                `<img src="${place.photos[0].getUrl()}" alt="${place.name}">` + 
                                `</div>`+
                                `<p>Park Name:<span> ${place.name}</span></p>` +
                                `<p>Distance:<span> ${distanceKm.toFixed(1)} km</span></p>` +
                                `<p>Walk Time:<span> ${timeMn.toFixed(1)} mins</span></p>` +
                                `<p>Rating:<span> ${place.rating} /5</span></p>` +
                                `</div>`;
            }
        } else {
            window.alert("Could not plot route due to " + status);
        }
    }
  );
}
//Solution to clear each route render: 
//https://stackoverflow.com/questions/32676497/google-map-api-v3-cannot-clear-the-previous-mutiple-routes-history


// Callback function to iterate through Google Place results. 
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createContent(results[i]);
      console.dir(results[i]);
    }
  }
}