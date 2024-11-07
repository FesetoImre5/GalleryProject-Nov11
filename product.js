// product.js

// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const index = urlParams.get('index');

// Array to hold image data (titles, descriptions, sources)
const imageData = [
    { src: 'Assets/StockImage1.jpg', title: 'Image 1 Title', description: 'Description for Image 1' },
    { src: 'Assets/StockImage2.jpg', title: 'Image 2 Title', description: 'Description for Image 2' },
    { src: 'Assets/StockImage3.jpg', title: 'Image 3 Title', description: 'Description for Image 3' },
    { src: 'Assets/StockImage4.jpg', title: 'Image 4 Title', description: 'Description for Image 4' },
    { src: 'Assets/StockImage5.jpg', title: 'Image 5 Title', description: 'Description for Image 5' }
];

// Get HTML elements for display
const productImage = document.getElementById('productImage');
const productTitle = document.getElementById('productTitle');
const productDescription = document.getElementById('productDescription');

// Set product details based on the selected index
if (index !== null && imageData[index]) {
    const { src, title, description } = imageData[index];
    productImage.src = src;
    productTitle.textContent = title;
    productDescription.textContent = description;
}
