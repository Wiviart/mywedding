// Send form data to the proxy server
const scriptURL = "https://wedding-proxy-429081919308.asia-southeast1.run.app/proxy";

function sendToGoogleSheets(name, email, content, sheetName) {
    const data = { name, email, content, sheetName };

    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message));
}

// Show data on the page
document.getElementById('wish-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get values from the form
    const name = document.getElementById('name-comment').value;
    const email = document.getElementById('email-comment').value;
    const content = document.getElementById('content') ? document.getElementById('content').value : '';
    const sheetName = "Wishes"; // Ensure content is defined

    // Display the comment
    displayComment(name, content);

    // Send data to Google Sheets
    sendToGoogleSheets(name, email, content, sheetName);

    // Clear the form
    document.getElementById('wish-form').reset();
});

const getURL = (sheetName) => `https://wedding-proxy-429081919308.asia-southeast1.run.app/proxy?sheetName=${sheetName}`;

function loadComments(sheetName) {
    fetch(getURL(sheetName), {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data)) {
                data.forEach(comment => {
                    displayComment(comment.Name, comment.Content);
                });
            } else {
                console.error("Unexpected data format:", data);
            }
        })
        .catch(error => console.error("Error fetching comments:", error));
}

// Display a single comment
function displayComment(name, content) {
    const commentsSection = document.getElementById('show-comments');
    const newComment = document.createElement('div');
    newComment.className = 'box-comment p-3 mx-2 mb-3';
    newComment.innerHTML = `<p class="comment-title">${name}</p><p class="comment">${content}</p>`;
    commentsSection.appendChild(newComment);
}

// Load comments when the page loads
document.addEventListener("DOMContentLoaded", () => {
    const sheetName = "Wishes"; // Replace with your sheet name
    loadComments(sheetName);
});