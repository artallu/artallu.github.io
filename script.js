// Function to format and display the last modified date
function showLastModifiedDate() {
    const lastUpdatedElement = document.getElementById('last-updated');
    if (lastUpdatedElement) {
        const lastModified = new Date(document.lastModified);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        lastUpdatedElement.textContent = lastModified.toLocaleDateString('en-IE', options);
    }
}

// Run the function when the page loads
window.onload = function() {
    showLastModifiedDate();
};
