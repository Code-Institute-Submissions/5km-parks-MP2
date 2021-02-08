# 5km PARKS

![GitHub contributors](https://img.shields.io/github/contributors/asdub/5km-parks-MP2)
![GitHub top language](https://img.shields.io/github/languages/top/asdub/5km-parks-MP2)
![GitHub language count](https://img.shields.io/github/languages/count/asdub/5km-parks-MP2)
![GitHub last commit](https://img.shields.io/github/last-commit/asdub/5km-parks-MP2)


**A live version of this project can be found [here](https://asdub.github.io/5km-parks-MP2/)**

<img src="https://github.com/asdub/5km-parks-MP2/blob/master/readme/screenshots/iphone.png" width="150" alt="5km Parks iPhone Screenshot" />

### Project Description
This project was made as part of the Code Institute Full Stack Development Course. 

As we are all well aware, lockdowns are not fun! 
With everyone spending more and more time indoors the importance of getting some fresh air has never been greater. 
I decided to create a web app which displays local open parks with a set radius of a users location. 

Users can keep within travel restrictions *(still 5km from your home as of 07/02/21)*. 
And discover new or forgotten green spaces within their immediate vicinity.

<img src="https://github.com/asdub/5km-parks-MP2/blob/master/readme/screenshots/desktop.png" alt="5km Parks Desktop Screenshot"/>

## Contents 



## User Experience (UX)

### Brief 
I wanted to create an app which provides a simple and streamlined way for users to access 
immediate details on green spaces for walking within their vicinity. 

Users will likely be keen on outdoors or walking. 
Owing to the lockdown, and people wanting to be outdoors more, we could see a wide variety of users. 


#### The aim of this project is to:
- Be simple and easy to use.
- Visually pleasing. 
- Display a 5km radius around the user's current location on a map. 
- Plot parks within that radius. 
- Only display open parks. 
- Provide functionality for users to see the route to their selected park.
- Provide the user with the walking time & distance to their selected park. 
- Provide the user with a rating of their selected park. 
- Allow the user to customise their experience. 
- Provide a clear help section.


#### Business/ Monetisation
- Advertising would be the main monetisation route, the site has ample space for unintrusive advertising. 


#### New User Stories
- I want the app purpose to be obvious or easy to figure out
- I want to have access to the information available in as few steps of possible
- I definitely want to know the walking time and distance. 
- I want to see parks at a closer proximity. 


#### Returning & Regular User Stores
- I want to be able to customise by experiance. 
- I want my theme settings to be stored for my next visit. 



## Design 

### Colours 

A simple palette of colours was chosen. 
The goal is to convey the relationship with green space. 

**Four main colours**

Green - *#146A3C*\
![Green](https://github.com/asdub/5km-parks-MP2/blob/master/readme/colours/%23146A3C.png "Green - #146A3C")

Taupe - *#D9D9D9*\
![Taupe](https://github.com/asdub/5km-parks-MP2/blob/master/readme/colours/%23D9D9D9.png "Taupe - #D9D9D9")

Black - *#0F0F0F*\
![Black](https://github.com/asdub/5km-parks-MP2/blob/master/readme/colours/%230F0F0F.png "Black - #0F0F0F")

White - *#FFFFFF*\
![Whtie](https://github.com/asdub/5km-parks-MP2/blob/master/readme/colours/%23FFFFFF.png "White - #FFFFFF")


**Four secondary colours**

Red - *#F86C6C*\
![Red](https://github.com/asdub/5km-parks-MP2/blob/master/readme/colours/%23F86C6C.png "Red - #F86C6C")

Blue - *#1F6DFF*\
![Blue](https://github.com/asdub/5km-parks-MP2/blob/master/readme/colours/%231F6DFF.png "Blue - #1F6DFF")

Orange - *#FF8A27*\
![Orange](https://github.com/asdub/5km-parks-MP2/blob/master/readme/colours/%23FF8A27.png "Orange - #FF8A27")

Grey - *#99A59E*\
![Grey](https://github.com/asdub/5km-parks-MP2/blob/master/readme/colours/%2399A59E.png "Grey - #99A59E")


### Wireframes 

![Wireframes](https://github.com/asdub/5km-parks-MP2/blob/master/readme/wireframes.png "Wireframes")

Mock Ups were completed for desktop, tablet & mobile devices. 

Wireframes can be viewed in full resolution [here](https://xd.adobe.com/view/44519a7f-885e-48e5-988e-39706e3ca85a-1102/?fullscreen).


*Design changes during production*\
During the build of this app it became apparent that the desktop version better suited positoning of the park information card below, 
as with the table and mobile versions.


### Typography

This project uses [Google Fonts](https://fonts.google.com/).

Only one font is in use:\
**Roboto** in weights of 400, 500 & 700.

<img src="https://github.com/asdub/5km-parks-MP2/blob/master/readme/roboto_font.png" width="150" alt="Google Fonts - Roboto" />

The following colours have been used for type,

#### Main font colours:
*Used for all main content in light & dark modes.*

Black - *#0F0F0F*\
![Black](https://github.com/asdub/5km-parks-MP2/blob/master/readme/colours/%230F0F0F.png "Black - #0F0F0F")

White - *#FFFFFF*\
![Whtie](https://github.com/asdub/5km-parks-MP2/blob/master/readme/colours/%23FFFFFF.png "White - #FFFFFF")


#### Secondary font colours:
*Used for secondary links and warnings.*

Medium Grey - *#707070*\
![Whtie](https://github.com/asdub/5km-parks-MP2/blob/master/readme/colours/%23707070.png "White - #707070")

Red - *#F86C6C*\
![Red](https://github.com/asdub/5km-parks-MP2/blob/master/readme/colours/%23F86C6C.png "Red - #F86C6C")


### Iconography

All icons in this project are from [Font Awesome](https://fontawesome.com/).

And also via this repo [Font-Awesome-SVG-PNG](https://github.com/encharm/Font-Awesome-SVG-PNG). 
Which allowed me to import the SVG's into a vector program to make custom markers. And maintain icon uniformity. 

*I did experiment with using SVG based markers for better quaulity - 
however that in itself persented another set of challenges (for another project!).*

The following icons have been used throughout the app:\
![Icons](https://github.com/asdub/5km-parks-MP2/blob/master/readme/icons.png "Icons")

### Responsive 

5km Parks was designed with a mobile first approach.  

No bootstraps or frameworks for layouts have been used. 
A fully responsive [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) layout was designed, 
using a modular set of sections and divs. 


### Features

5km Parks is a geolocation app compriseing of the following features: 
-  Show user their current location with GPS coordinates on a map. 
-  On load display markers for open park within a 5km radius of user location on the map. 
-  A user clicking/ tapping a marker displays a walking route. 
-  Clicking/ tapping a marker display a park info card containing:
    - An image of the park.
    - It's distance from the user (if walked).
    - The walk time froim the users current location.
    - The Google rating of the park. 

**Additional customisable feature are:**

#### User Set Radius
A user can select betwen the default 5km radius, or choose 3km and 1km. 
Selecting a new distance will re-render the radius on the map canvas. 
And trigger a new search for open parks within the set radius. 

#### Customise Radius Colour
Depending on the terrain or if using dark mode. 
A user has the choice of 6 different* radius colours.
*Or 7 if you include white when in dark mode*

#### Dark Mode
The user can choose between the default light theme. Or a dark theme.
This setting is saved between visits, allowing a user to maintain their preferred setting. 

#### Help Section
Accessible from the top right corner help icon. Or the 'Having trouble?' text in the inital call to action. 
The help menu explains whats required for the app to function and information on how the app works. 

#### Filtered Results
Only open parks are displayed. 
And parks with 100+ user reviews - just to make sure the ratings displayed are representative of the park. 

#### Error Reporting 
If the location cannot be found after a period of 5000ms. 
A prompt will appear on the map canvas informing the user and inviting them to reload the page. 

If a user attempts to use a map control without a map present, they will also receive a notificaton. 
But will still be able to use non map dependant functions such as dark mode.

#### User feedback
Distance in title updates with user radius selection. 
As does the 'black' colour choice, which changes to white when dark mode is enabled. 


## Technologies
*Languages, libraries, APIs, and version control*

### Languages
- **[HTML5](https://html.com/html5/)**
- **[CSS3](https://www.w3schools.com/css/)**
- **[Javascript](https://www.javascript.com/)**


### APIs Used 
- **[Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview)**

    *Features Used:*
    - [Map](https://developers.google.com/maps/documentation/javascript/reference/map#Map.constructor)
    - [Coordinates](https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLng)
    - [InfoWindow](https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow)
    - [Circle](https://developers.google.com/maps/documentation/javascript/reference/polygon#Circle)
    - [Places Service](https://developers.google.com/maps/documentation/javascript/reference/places-service#PlacesService)
    - [Directions Service](https://developers.google.com/maps/documentation/javascript/reference/directions#DirectionsService)
    - [Marker](https://developers.google.com/maps/documentation/javascript/reference/marker#Marker)
    - [Directions Renderer](https://developers.google.com/maps/documentation/javascript/reference/directions#DirectionsRenderer)

### Version Control & Managment
- [Git](https://git-scm.com/)
- [Github](https://github.com/)

## Other software/ tools Used
- [Adobe InDesign](https://en.wikipedia.org/wiki/Adobe_InDesign)
- [Adobe Illustrator](https://en.wikipedia.org/wiki/Adobe_Illustrator)
- [Gitpod](https://gitpod.io)
- [JSfiffle](https://jsfiddle.net/)
- [Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools)
- [Safari Web Development Tools](https://developer.apple.com/safari/tools/)


## Deployment 

This app has been deployed on GitHub Pages.\
You can view a live version of the app [here](https://asdub.github.io/5km-parks-MP2/).

#### GitHub Pages
Deployong on Github pages is very straight forward.
1. [Login](https://github.com/login) to your GitHub account([or join](https://github.com/join)).
2. Navigate to or create the repository, in this case [5km-parks-MP2](https://github.com/asdub/5km-parks-MP2).
3. On the menu below the repository title click on the settings cog. 
4. Then scroll down to GitHub Pages and select 'master' or 'main' branch.
5. Leave the default folder as '/root'.
6. Once ready, the URL will appear in the green banner above source.

#### Fork
1. [Login](https://github.com/login) to your GitHub account([or join](https://github.com/join)).
2. Go to the repo by clicking [here](https://github.com/asdub/5km-parks-MP2).
3. Click fork in the top right corner of the screen. 

#### Clone (Locally)
1. [Login](https://github.com/login) to your GitHub account([or join](https://github.com/join)).
2. Go to the repo by clicking [here](https://github.com/asdub/5km-parks-MP2).
3. On the main page of the repository click on 'Code'. 
4. Click on the 'Clipboard'/ copy icopy the clone URL (Clone with HTTPs). 
4. In your local environment open your terminal, navigate to or create a directory.
5. Paste the URL into your terminal and enter. The repo should be successfully cloned.  

## Testing

#### [WC3 HTML Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fasdub.github.io%2F5km-parks-MP2%2F/) *(Results)*
The WC3 validator found two issues:
1. *Warning* Section missing heading [x]
2. *Error* Script was placed outside body [x]

#### [JS Hint](https://jshint.com/)
JS Hink found two 13 issues:
1. *Warning* Semicolons missing from 12 places [x]
2. *Warning* Redefinition of origin var [x]

#### [WC3 CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fasdub.github.io%2F5km-parks-MP2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en/) *(Results)*
WC3 CSS Validator found 1 error & 38 warnings:
1. *Error* Error with CSS calc value [x]
2. *Warning* 38 warnings relate to -webkit -moz and custom variable declarations [ ]


### Google Lighthouse

#### Initial Test
![Lighthouse Results](https://github.com/asdub/5km-parks-MP2/blob/master/readme/screenshots/initial_lighthouse_desktop.png "Lighthouse Results")

1. Best Practices,
    - Links to cross-origin destinations are unsafe.
        [x] Added `rel="noreferrer" to <a> tags. 
    
    - Requests the geolocation permission on page load
        [ ] Oversight, I wanted the app to load as quickly as possible. In hindsight, it would be better to have a prompt. 

2. SEO,
    - Document does not have a meta description.
        [x] Meta tags added to index.html.

#### Re Test
![Lighthouse Results](https://github.com/asdub/5km-parks-MP2/blob/master/readme/screenshots/second_lighthouse.png "Lighthouse Results")

**Performance**\
No external frameworks such as bootstrap was used. 
I believe this helped greatly with performance.

**Accessibility**\
I tired to ensure good contrast between colours. 
Ligthouse seems to have picked up on some of the more fun colours as not having sufficient contrast ratio. 
In this situation I beleive it is ok, as it's the colour itself that I am trying to convey. 

**Best Practices**\
Adding the noreferrer rel increased the Best Practices score. 
\
The app requests geolocation on page load. 
Which I first decided was a required feature. Having read more into it, I would not do this in the future. 
And would prompt the user in app beforehand. 

**SEO**\
The SEO scroe increase to 100 with the addition correct meta tags. 
[Thank you! Heymeta ](https://www.heymeta.com/ )


### Manual Testing 

## Mobile 

# Responsive Testing
Tested on physical iPhone & Anrdroid phones (iPhone 11 Pro Max / Samsung Galaxy s21)

Also tested within mobile device views in Chrome Dev Tools & Safari Web Tools.
The follow screen sizes were tested using both above tools: 

| Device        | Pixel Size    | Viewport  |
| ------------- |:-------------:| ---------:|
|iPhone XR     | 828 x 1792.   | 414 x 896 |
|iPhone XS     | 1125 x 2436   | 375 x 812 |
|iPhone XS Max | 1242 x 2688   | 414 x 896 |
|iPhone X	    | 1125 x 2436	| 375 x 812 |
|iPhone 8 Plus  | 1080 x 1920	| 414 x 736 |
|iPhone 8	    | 750 x 1334	| 375 x 667 |
|iPhone 7 Plus	| 1080 x 1920	| 414 x 736.|
|iPhone 7	    | 750 x 1334	| 375 x 667 |
|iPhone 6/6S Plus|1080 x 1920   | 414 x 736 |
|iPhone 6/6S	|750 x 1334	    |375 x 667  |
|iPhone 5	    |640 x 1136	    |320 x 568  |		
|iPod Touch	    |640 x 1136	    |320 x 568  |	
|iPad Pro	    |2048 x 2732	|1024 x 1366|
|iPad 3 & 4 Gen	|1536 x 2048	|768 x 1024|
|iPad Air 1 & 2	|1536 x 2048	|768 x 1024|
|iPad Mini 2 & 3|1536 x 2048	|768 x 1024|
|iPad Mini  	|768 x 1024	    |768 x 1024
