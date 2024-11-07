let currentImageIndex;
const images = document.querySelectorAll('.gallery img');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');

function openPopup(index) {
    const imageSrc = images[index].src;
    const imageTitle = images[index].nextElementSibling.textContent;
    const imageDescription = images[index].nextElementSibling.nextElementSibling.textContent;

    const newWindow = window.open('', '_blank', 'width=800,height=600');

    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${imageTitle}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                    margin: 0;
                    display: flex;
                    gap: 20px;
                }
                .image-container {
                    flex: 0 0 40%;
                }
                .image-container img {
                    width: 100%;
                    border-radius: 10px;
                    border: 2px solid #8B4513;
                }
                .content {
                    flex: 1;
                }
                .title {
                    font-size: 24px;
                    font-weight: bold;
                }
                .description {
                    margin: 10px 0;
                }
                .add-to-cart {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #8B4513;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                    cursor: pointer;
                    text-align: center;
                }
                .add-to-cart:hover {
                    background-color: #A0522D;
                }
            </style>
        </head>
        <body>
            <div class="image-container">
                <img src="${imageSrc}" alt="${imageTitle}">
            </div>
            <div class="content">
                <div class="title">${imageTitle}</div>
                <div class="description">${imageDescription}</div>
                <a class="add-to-cart">Add to Cart</a>
            </div>
        </body>
        </html>
    `);
}
