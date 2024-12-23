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
        "assets/js/jsonparse.js",
        "assets/js/music.js",
        "assets/js/calendar.js",
        "assets/js/wishes.js",
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