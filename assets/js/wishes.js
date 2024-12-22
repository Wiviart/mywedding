const SHEET_ID = "1ZR3w80S_YP1REoJwwPw5ozTbjSTBPLDjBa2YpnmvP5c"
const SHEET_TITLE = "Sheet1"
const SHEET_RANGE = "A:C"
const CLIENT_ID = "118283836346029842933.apps.googleusercontent.com"

// Load the Google API client library
function initClient() {
    gapi.load('client:auth2', function () {
        gapi.auth2.init({
            client_id: CLIENT_ID,
        }).then(function () {
            console.log('GAPI client initialized.');
        });
    });
}

// Function to append data to Google Sheets
function sendToGoogleSheets(name, email, content) {
    const values = [[name, email, content]]; // Prepare data in a 2D array format

    const body = { values: values };

    gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: SHEET_ID,
        range: SHEET_TITLE + "!" + SHEET_RANGE,
        valueInputOption: 'USER_ENTERED',
        resource: body
    }).then((response) => {
        const result = response.result;
        console.log(`${result.updates.updatedCells} cells appended.`);
        document.getElementById('success').style.display = 'block'; // Show success message
    }, (error) => {
        console.error('Error appending data: ', error);
        document.getElementById('error').style.display = 'block'; // Show error message
    });
}

// Initialize the client when the page loads
window.onload = function () {
    initClient();
};

// Event listener for form submission
document.getElementById('wish-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get values from the form
    const name = document.getElementById('name-comment').value;
    const email = document.getElementById('email-comment').value;
    const content = document.getElementById('content') ? document.getElementById('content').value : ''; // Ensure content is defined

    // Display the comment
    displayComment(name, content);

    // Send data to Google Sheets
    sendToGoogleSheets(name, email, content);
});

function displayComment(name, content) {
    const commentsSection = document.getElementById('show-comments');
    const newComment = document.createElement('div');
    newComment.className = 'box-comment p-3 mx-2 mb-3';
    newComment.innerHTML = `<h4>${name}</h4><p class="m-0">${content}</p>`;
    commentsSection.appendChild(newComment);
}