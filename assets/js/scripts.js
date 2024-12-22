// External script loading (for libraries)
function loadExternalScripts() {
    var scripts = [
        "preview.iwedding.info/templates/template134/js/libs.js",
        "preview.iwedding.info/templates/template134/js/script.js",
        "preview.iwedding.info/common/emoji-picker/js/insertTextAtCursor.js",
        "https://preview.iwedding.info/common/emoji-picker/js/init.js",
        "preview.iwedding.info/common/calendar.js",
        "preview.iwedding.info/common/biicommon.min.js",
        "https://apis.google.com/js/api.js",
        "assets/js/galleries.js",
        "assets/js/wishes.js"
    ];

    // Dynamically load each script
    scripts.forEach(function (src) {
        var scriptElement = document.createElement('script');
        // If the script is init.js, load it as a module
        if (src.includes('init.js')) {
            scriptElement.type = 'module';  // Set type to 'module' for ES6 modules
        } else {
            scriptElement.type = 'text/javascript';
        }

        scriptElement.src = src;
        document.head.appendChild(scriptElement);
    });
}

// Call the function to load external scripts
loadExternalScripts();

// Function to add event to Google Calendar
function addEventToGoogleCalendar(eventName, eventDescription, eventLocation, eventStartDate, eventEndDate) {
    const googleCalendarUrl = `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(eventName)}&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(eventLocation)}&dates=${eventStartDate.replace(/[-:]/g, '')}Z/${eventEndDate.replace(/[-:]/g, '')}Z`;
    window.open(googleCalendarUrl, '_blank');
}

// Add click event listeners to all calendar buttons
document.querySelectorAll('.calendar-button-custom-click').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        // Extract event details from data attributes
        const eventName = this.getAttribute('data-name');
        const eventDescription = this.getAttribute('data-description');
        const eventLocation = this.getAttribute('data-location');
        const eventStartDate = this.getAttribute('data-start');
        const eventEndDate = this.getAttribute('data-end');

        // Call the function to add the event
        addEventToGoogleCalendar(eventName, eventDescription, eventLocation, eventStartDate, eventEndDate);
    });
});

function playPause() {
    const volumeOff = document.getElementById('playerVolumeOff');
    const volumeOn = document.getElementById('playerVolumeOn');

    // Toggle play/pause functionality
    if (volumeOff.style.display === 'block') {
        volumeOff.style.display = 'none';
        volumeOn.style.display = 'block';
        // Add code to play music here
    } else {
        volumeOff.style.display = 'block';
        volumeOn.style.display = 'none';
        // Add code to pause music here
    }
}

function sanitizeJsonString(jsonString) {
    return jsonString
        .replace(/[\n\r\t]/g, '')
        .replace(/,(\s*[}\]])/g, '$1');
}

function parseJsonRecursively(jsonString) {
    let sanitizedString = sanitizeJsonString(jsonString);
    let parsed = JSON.parse(sanitizedString);
    Object.keys(parsed).forEach(function (key) {
        try {
            let checkValue = JSON.parse(parsed[key]);
            if (checkValue && checkValue.constructor === Object) {
                parsed[key] = checkValue;
            }
        } catch (e) {
            // Handle error if needed
        }
    });
    return parsed;
}

let biicore = parseJsonRecursively('{"template_id":"643d7a8c7a6fd1c73b011986","templatePremium":true,"themeRoot":"https:\/\/preview.iwedding.info\/templates\/template134","webroot":"https:\/\/preview.iwedding.info","coreSite":"https:\/\/biihappy.com","webToken":"61990349db8f76231c132068","isPremium":true,"bgMusic":"https:\/\/cdn.biihappy.com\/ziiweb\/wedding-musics\/IDo-911.mp3","alert":{"title":"L\u1eddi c\u1ea3m \u01a1n t\u1eeb D\u00e2u &amp; R\u1ec3","content":"Xin ch\u00e2n th\u00e0nh c\u1ea3m \u01a1n to\u00e0n th\u1ec3 m\u1ecdi ng\u01b0\u1eddi \u0111\u00e3 g\u1eedi l\u1eddi ch\u00fac cho v\u1ee3 ch\u1ed3ng ch\u00fang em!","timeout":5000,"status":2,"cancel_button_text":""},"effect":"{\\\"type\\\":\\\"snow\\\"}","logo":"https:\/\/iwedding.info\/common\/imgs\/bii.png?v=20210131","url_landing_page":"https:\/\/biihappy.com\/iwedding","isAutoPlay":true,"footer_title":"iWedding | N\u1ec1n t\u1ea3ng t\u1ea0o website \u0111\u00e1m c\u01b0\u1edbi mi\u1ec5n ph\u00ed t\u1eeb Biihappy","footer_title_mobile":"T\u1ea1o website \u0110\u00e1m c\u01b0\u1edbi mi\u1ec5n ph\u00ed"}');