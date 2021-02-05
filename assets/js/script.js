function getLocation() {
// Get user location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition();
    } else {
        locError()
    }
}