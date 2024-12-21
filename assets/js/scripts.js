// External script loading (for libraries)
function loadExternalScripts() {
    var scripts = [
        "https://preview.iwedding.info/templates/template134/js/libs.js?v=20241222",
        "https://preview.iwedding.info/templates/template134/js/script.js?v=20241222",
        "https://preview.iwedding.info/common/emoji-picker/js/insertTextAtCursor.js?v=20241222",
        "https://preview.iwedding.info/common/emoji-picker/js/init.js?v=20241222",
        "https://preview.iwedding.info/common/calendar.js?v=20241222",
        "https://preview.iwedding.info/common/biicommon.min.js?v=20241222"
    ];

    // Dynamically load each script
    scripts.forEach(function(src) {
        var scriptElement = document.createElement('script');
        scriptElement.src = src;
        scriptElement.type = 'text/javascript';
        document.head.appendChild(scriptElement);
    });
}

// Call the function to load external scripts
loadExternalScripts();

// Optionally, log the photoGalleries array to the console to check if it's populated correctly
console.log(photoGalleries);

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
