// index.js

async function getVisitors() {
    try {
        const response = await fetch('https://av0exkt874.execute-api.ap-southeast-2.amazonaws.com/default/VisitorCounter', {
            method: 'GET'
        });

        const data = await response.json();

        // Update the HTML element with the visitor count
        const visitorsElement = document.getElementById('visitors');
        if (visitorsElement) {
            visitorsElement.innerHTML = data.count;
        }
        
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

// Automatically call the function when the page loads
document.addEventListener('DOMContentLoaded', getVisitors);
