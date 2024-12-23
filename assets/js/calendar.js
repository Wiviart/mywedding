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