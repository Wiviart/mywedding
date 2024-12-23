// External script loading (for libraries)
function loadExternalScripts() {
    var scripts = [
        "preview.iwedding.info/common/calendar.js",
        "preview.iwedding.info/common/biicommon.min.js",
        "preview.iwedding.info/common/emoji-picker/js/init.js",
        "preview.iwedding.info/common/emoji-picker/js/insertTextAtCursor.js",
        "preview.iwedding.info/templates/template134/js/libs.js",
        "preview.iwedding.info/templates/template134/js/script.js",
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