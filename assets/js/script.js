//Help section overlay. 
window.addEventListener('load', function() {
  document.querySelectorAll('.help').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelector('.help-overlay').classList.toggle('help-active');
        document.getElementsByTagName('body')[0].classList.toggle('no-scroll');
    })
  })
});

//Customise Panel Radius Buttons
window.addEventListener('load', function() {
    var controls = document.querySelectorAll('.radius-controls');
    var userRadius, userPosition;

    controls.forEach(item => {
    item.addEventListener('click', event => {
        document.querySelectorAll('.radius-controls').forEach(item => {
            item.classList.remove('active');
        })
        event.target.classList.toggle('active');
        userRadius = parseInt(event.target.getAttribute('data-radius'));
        radius = userRadius;
        radiusCircle.setRadius(radius);
        //userPosition = new google.maps.LatLng(localStorage.getItem('position_lat'), localStorage.getItem('position_lat'));
        reloadMarkers();
        searchParks();
    })
  })
});




