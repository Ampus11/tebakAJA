const images = [
    'images/shorekeeper.png',
    'images/shorekeeper2.png',
    'images/shorekeeper3.png',
    'images/shorekeeper4.png'
];

let currentIndex = 0;
const homeSection = document.querySelector('.home');

function changeBackground() {
    // Keep the gradient overlay while changing the image
    homeSection.style.backgroundImage = `linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.4)), url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

// Change background every 3 seconds
setInterval(changeBackground, 3000);

// Set initial background
changeBackground();