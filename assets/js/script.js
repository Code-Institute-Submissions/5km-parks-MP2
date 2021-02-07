//Buttons and scroll to section
window.addEventListener('load', function() {
    var buttons = document.querySelectorAll('.white-btn-large');
    var link;

    buttons.forEach(item => {
    item.addEventListener('click', event => {
        document.querySelectorAll('.white-btn-large').forEach(item => {
            item.classList.toggle('active');
        })
        event.target.classList.toggle('active');
        link = "#" + event.target.getAttribute('data-link');
        document.querySelector(link).scrollIntoView({
            behavior: 'smooth'
        });
    })
  })
});


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
    var header = document.querySelector('#header-radius');
    var userRadius, userPosition;

    controls.forEach(item => {
    item.addEventListener('click', event => {
        document.querySelectorAll('.radius-controls').forEach(item => {
            item.classList.remove('active');
        });
        event.target.classList.toggle('active');
        userRadius = parseInt(event.target.getAttribute('data-radius'));
        radius = userRadius;
        radiusCircle.setRadius(radius);
        userPosition = new google.maps.LatLng(localStorage.getItem('position_lat'), localStorage.getItem('position_lng'));
        infoWindow.close();
        // Handle secondary elements effected by user radius button
        if (radius == 5000) {
            header.innerHTML = "5KM";
            map.setZoom(11);
        } else if (radius == 3000) {
            map.setZoom(12);
            header.innerHTML = "3KM";
        } else {
            map.setZoom(13);
            header.innerHTML = "1KM";
        }
        map.setCenter(userPosition)
        reloadRoute();
        reloadMarkers();
        searchParks();
    })
  })
});

//Customise Panel Colour Buttons
window.addEventListener('load', function() {
    var controls = document.querySelectorAll('.colour-controls');
    var colour;

    controls.forEach(item => {
    item.addEventListener('click', event => {
        document.querySelectorAll('.colour-controls').forEach(item => {
            item.classList.remove('active');
        })
        event.target.classList.toggle('active');
        colour = event.target.getAttribute('data-colour');
        radiusCircle.setOptions({fillColor: colour});
        radiusCircle.setOptions({strokeColor: colour});
    })
  })
});




