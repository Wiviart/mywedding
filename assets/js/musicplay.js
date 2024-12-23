
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