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

let biicore = parseJsonRecursively('{"bgMusic": "./assets/music/doiban.mp3","alert":{"title":"L\u1eddi c\u1ea3m \u01a1n t\u1eeb D\u00e2u &amp; R\u1ec3","content":"Xin ch\u00e2n th\u00e0nh c\u1ea3m \u01a1n to\u00e0n th\u1ec3 m\u1ecdi ng\u01b0\u1eddi \u0111\u00e3 g\u1eedi l\u1eddi ch\u00fac cho v\u1ee3 ch\u1ed3ng ch\u00fang em!","timeout":5000,"status":2,"cancel_button_text":""},"effect":"{\\\"type\\\":\\\"snow\\\"}"}');