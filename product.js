// product.js

// Get HTML elements for display
const productImage = document.getElementById('productImage');
productImage.style.width = "75%";
const productTitle = document.getElementById('productTitle');
const productDescription = document.getElementById('productDescription');
productDescription.style.padding = "10px 3px";

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

let container = document.getElementById('container');
let width = window.innerWidth;

window.addEventListener('load' , () => {
    if (width <= 900){
        container.style.display = "block";
        imgcontainer.style.flex = "none";
    }
    else if (window.innerWidth > 900){
        container.style.display = "flex";
        imgcontainer.style.flex = "0 0 35%";
    }
});

window.addEventListener('resize' , () => {
    if (width <= 900){
        container.style.display = "block";
        imgcontainer.style.flex = "none";
    }
    else if (window.innerWidth > 900){
        container.style.display = "flex";
        imgcontainer.style.flex = "0 0 35%";
    }
});