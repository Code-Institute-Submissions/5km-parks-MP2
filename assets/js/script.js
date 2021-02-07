// Event Listener for Dark Mode
window.addEventListener('load', (event) => {
    const html = document.getElementById('main');
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    var controls = document.body.querySelector('.theme-controls')
        if (currentTheme) {
            html.dataset.theme = currentTheme;
            if (currentTheme == 'dark') {
                 controls.classList.toggle('active');
                 document.body.querySelector('.theme-controls[data-theme="on"]').classList.toggle('active');
                 document.body.querySelector('.colour-controls[data-colour="#0F0F0F"]').innerHTML = "White";
            } else {
                document.body.querySelector('.colour-controls[data-colour="#0F0F0F"]').innerHTML = "Black";
            }
        }
        console.log('Current Theme is:', currentTheme);
});


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

//Customise Panel Radius Button. 
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
        userPosition = new google.maps.LatLng(sessionStorage.getItem('position_lat'), sessionStorage.getItem('position_lng'));
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
                if (map) {
                    document.querySelectorAll('.colour-controls').forEach(item => {
                        item.classList.remove('active');
                    })
                    event.target.classList.toggle('active');
                    colour = event.target.getAttribute('data-colour');
                    radiusCircle.setOptions({fillColor: colour});
                    radiusCircle.setOptions({strokeColor: colour});
                } else {
                    document.getElementById('customiseError').classList.add('active');
                    document.getElementById('cusError').innerHTML = "Please wait until map loads.";
                }
            })  
        })
});

// Dark Mode Customise Buttons
// https://livecodestream.dev/post/a-better-approach-to-dark-mode-on-your-website/
window.addEventListener('load', function() {
    var controls = document.querySelectorAll('.theme-controls');
    var html = document.getElementById('main');

    var toggleTheme = (theme) => {
        html.dataset.theme = theme;
    };

    controls.forEach(item => {
        item.addEventListener('click', event => {
            document.querySelectorAll('.theme-controls').forEach(item => {
                item.classList.remove('active');
            });
            if (event.target.getAttribute('data-theme') == "on") {
                toggleTheme('dark');
                localStorage.setItem("theme", "dark" ); 
                document.body.querySelector('.colour-controls[data-colour="#0F0F0F"]').innerHTML = "White";
            } else {
                toggleTheme('light');
                localStorage.setItem("theme", "light" );
                document.body.querySelector('.colour-controls[data-colour="#0F0F0F"]').innerHTML = "Black";
            }  
        event.target.classList.toggle('active');
        });
    });
});