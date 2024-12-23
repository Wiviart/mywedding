// Send form data to the proxy server
const scriptURL = "https://wedding-proxy-429081919308.asia-southeast1.run.app/proxy";

function sendToGoogleSheets(name, email, content) {
    const data = { name, email, content };

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
    const content = document.getElementById('content') ? document.getElementById('content').value : ''; // Ensure content is defined

    // Display the comment
    displayComment(name, content);

    // Send data to Google Sheets
    sendToGoogleSheets(name, email, content);

    // Clear the form
    document.getElementById('wish-form').reset();
});

function displayComment(name, content) {
    const commentsSection = document.getElementById('show-comments');
    const newComment = document.createElement('div');
    newComment.className = 'box-comment p-3 mx-2 mb-3';
    newComment.innerHTML = `<h4>${name}</h4><p class="m-0">${content}</p>`;
    commentsSection.appendChild(newComment);
}