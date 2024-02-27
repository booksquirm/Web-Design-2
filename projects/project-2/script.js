const images = document.querySelectorAll('.grid img');
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

images.forEach(image => {
    image.addEventListener('click', () => {
        const fullImage = document.createElement('img');
        fullImage.src = image.src;
        overlay.appendChild(fullImage);
        overlay.style.display = 'block';
    });
});

overlay.addEventListener('click', () => {
    overlay.innerHTML = ''; 
    overlay.style.display = 'none';
});
