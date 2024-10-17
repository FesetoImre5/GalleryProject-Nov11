let currentImageIndex;
const images = document.querySelectorAll('.gallery img');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');

function openPopup(index) {
    currentImageIndex = index;
    popupImage.src = images[index].src;
    popup.classList.add('open');
    popup.classList.remove('closeX');
    popup.style.display = 'flex';
}

function closePopup() {
    popup.classList.remove('open');
    popup.classList.add('closeX');
    setTimeout(() => {
        popup.style.display = 'none';
    }, 500);
}

function prevImage() {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
    popupImage.src = images[currentImageIndex].src;
}

function nextImage() {
    currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
    popupImage.src = images[currentImageIndex].src;
}