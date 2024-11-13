// product.js

// Get HTML elements for display
const productImage = document.getElementById('productImage');
const productTitle = document.getElementById('productTitle');
const productDescription = document.getElementById('productDescription');

// Retrieve product data from sessionStorage
const src = sessionStorage.getItem('productSrc');
const title = sessionStorage.getItem('productTitle');
const description = sessionStorage.getItem('productDescription');

// Set product details if data is available
if (src && title && description) {
    productImage.src = src;
    productTitle.textContent = title;
    productDescription.textContent = description;
} else {
    // Handle case where data is missing (e.g., user accesses product.html directly)
    productTitle.textContent = "Product Not Found";
    productDescription.textContent = "We couldn't find the product details.";
}
