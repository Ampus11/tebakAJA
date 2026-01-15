const images = [
    'images/shorekeeper.png',
    'images/shorekeeper2.png',
    'images/shorekeeper3.png',
    'images/shorekeeper4.png'
];

const homeSection = document.querySelector('.home');

function setRandomBackground() {
    // Select a random image from the array
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];
    
    // Apply the background with the gradient overlay
    homeSection.style.backgroundImage = `linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.4)), url('${selectedImage}')`;
}

// Set the background when the script loads (on refresh)
setRandomBackground();