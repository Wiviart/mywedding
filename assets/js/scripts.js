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
