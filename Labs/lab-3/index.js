const videoOverlay = document.getElementById('video-overlay');
const closeButton = document.getElementById('close-button');

videoOverlay.style.display = 'flex';

function closeOverlay() {
    videoOverlay.style.display = 'none'; 
}

window.addEventListener('DOMContentLoaded', (event) => {
    closeButton.addEventListener('click', closeOverlay); 
});