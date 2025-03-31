function showLoading() {
    console.log("showLoading called"); // Debugging log
    // Hide the start page and show the loading page
    document.getElementById('startPage').classList.add('hidden');
    document.getElementById('loadingPage').classList.remove('hidden');

    // After a delay, hide the loading page and show the main page
    setTimeout(() => {
        console.log("Switching to mainPage"); // Debugging log
        document.getElementById('loadingPage').classList.add('hidden');
        document.getElementById('mainPage').classList.remove('hidden');
        revealOnScroll();
    }, 6000); // Adjusted loading time for testing
}

function endPage(message) {
    console.log(`endPage called with message: ${message}`); // Debugging log
    // Replace the entire body content with a message
    document.body.innerHTML = `<h1 class="fade-in">${message}</h1>`;
}

function revealOnScroll() {
    console.log("revealOnScroll called"); // Debugging log
    // Add the 'show' class to all elements with the 'fade-in' class
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        console.log(`Revealing element: ${el.tagName}`); // Debugging log
        el.classList.add('show');
    });
}

function createHeartRain() {
    const body = document.body;

    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Randomize the position and animation duration
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';

        // Append the heart to the body
        body.appendChild(heart);

        // Remove the heart after the animation ends
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300); // Generate a heart every 300ms
}

function generateHeartOnButtonPress(event) {
    const button = event.target;
    const heart = document.createElement('div');
    heart.classList.add('heart-press');

    // Position the heart near the button
    const rect = button.getBoundingClientRect();
    heart.style.left = `${rect.left + rect.width / 2}px`;
    heart.style.top = `${rect.top}px`;

    // Append the heart to the body
    document.body.appendChild(heart);

    // Remove the heart after the animation ends
    setTimeout(() => {
        heart.remove();
    }, 1000); // Match the animation duration
}

function showImage(imageId, button) {
    const image = document.getElementById(imageId);
    if (image) {
        image.classList.remove('hidden'); // Show the image
        button.textContent = 'HIDDEN'; // Update the button label
        button.onclick = () => hideImage(imageId, button); // Change button functionality to hide the image
    }
}

function hideImage(imageId, button) {
    const image = document.getElementById(imageId);
    if (image) {
        image.classList.add('hidden'); // Hide the image
        button.textContent = 'SOMETHING'; // Update the button label
        button.onclick = () => showImage(imageId, button); // Change button functionality to show the image
    }
}

// Attach the event listener to all buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', generateHeartOnButtonPress);
    });

    createHeartRain(); // Ensure heart rain starts
});
