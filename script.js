/*NAVIGATION*/



let state = 0;
let navBar = document.getElementById('navBar');
let openButton = document.getElementById('openArrow');
let arrow = document.getElementById('arrow');
let header = document.getElementById('header');



window.addEventListener('resize' , () => {
    let width = window.innerWidth;

    if(width < 700){
        if (state % 2 == 1){
            /*NAVBAR*/
            navBar.style.display = 'flex';
            navBar.style.flexDirection = 'column';
            navBar.style.width = '250px';
            navBar.style.marginLeft = '31px';
            navBar.style.marginTop = '0px';
            navBar.style.marginBottom = '0px';
            navBar.style.borderBottomLeftRadius = '10px';
            navBar.style.borderBottomRightRadius = '10px';
            navBar.style.border = '2px solid white';
            navBar.style.borderTop = 'none';
            navBar.style.position = 'absolute';
    
            /*OPEN BUTTON*/
            openButton.style.position = 'absolute';
            openButton.style.top = (navBar.clientHeight+header.clientHeight) + 'px';
            openButton.style.display = 'block';
    
            /*MISCELLANEOUS*/
            arrow.style.transform = 'rotate(180deg)';
        }
        else if (state % 2 == 0){
            /*NAVBAR*/
            navBar.style.display = 'none';
    
            /*OPEN BUTTON*/
            openButton.style.top = header.clientHeight + 'px';
            openButton.style.display = 'block';
    
            /*MISCELLANEOUS*/
            arrow.style.transform = 'rotate(0deg)';
        }
    }else{
        /*NAVBAR*/
        navBar.style.flexDirection = 'row';
        navBar.style.display = 'flex';
        navBar.style.removeProperty('width');
        navBar.style.removeProperty('margin-left');
        navBar.style.removeProperty('margin-top');
        navBar.style.removeProperty('margin-bottom');
        navBar.style.removeProperty('border-bottom-left-radius');
        navBar.style.removeProperty('border-bottom-right-radius');
        navBar.style.removeProperty('border');
        navBar.style.removeProperty('border-top');
        navBar.style.removeProperty('position');
        
        /*OPEN BUTTON*/
        openButton.style.display = 'none';
    }
})

window.addEventListener('load' , () => {
    let width = window.innerWidth;

    if(width < 700){
        /*NAVBAR*/
        navBar.style.display = 'none';

        /*OPEN BUTTON*/
        openButton.style.top = header.clientHeight + 'px';
        openButton.style.display = 'block';

        /*MISCELLANEOUS*/
        arrow.style.transform = 'rotate(0deg)';
    }else{
        /*NAVBAR*/
        navBar.style.flexDirection = 'row';
        navBar.style.display = 'flex';
        navBar.style.removeProperty('width');
        navBar.style.removeProperty('margin-left');
        navBar.style.removeProperty('margin-top');
        navBar.style.removeProperty('margin-bottom');
        navBar.style.removeProperty('border-bottom-left-radius');
        navBar.style.removeProperty('border-bottom-right-radius');
        navBar.style.removeProperty('border');
        navBar.style.removeProperty('border-top');
        navBar.style.removeProperty('position');
        
        /*OPEN BUTTON*/
        openButton.style.display = 'none';
    }
})

function navState(arg){
    state += arg

    if (state % 2 == 1){
        /*NAVBAR*/
        navBar.style.display = 'flex';
        navBar.style.flexDirection = 'column';
        navBar.style.width = '250px';
        navBar.style.marginLeft = '31px';
        navBar.style.marginTop = '0px';
        navBar.style.marginBottom = '0px';
        navBar.style.borderBottomLeftRadius = '10px';
        navBar.style.borderBottomRightRadius = '10px';
        navBar.style.border = '2px solid white';
        navBar.style.borderTop = 'none';
        navBar.style.position = 'absolute';

        /*OPEN BUTTON*/
        openButton.style.position = 'absolute';
        openButton.style.top = (navBar.clientHeight+header.clientHeight) + 'px';

        /*MISCELLANEOUS*/
        arrow.style.transform = 'rotate(180deg)';
    }
    else if (state % 2 == 0){
        /*NAVBAR*/
        navBar.style.display = 'none';

        /*OPEN BUTTON*/
        openButton.style.top = header.clientHeight + 'px';

        /*MISCELLANEOUS*/
        arrow.style.transform = 'rotate(0deg)';
    }

    if (state > 1){
        state = 0;
    }
}



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
        <html lang="hu">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css">
            <script src="script.js" defer></script>
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
                    width: 500px;
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
                    padding: 10px 0;
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
                <img src="${imageSrc}" alt="${imageTitle}" style="width: 500px;">
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



/*     ACCOUNT     */



let account = document.getElementById('account');
let acc = 0;



function Account(arg){
    acc += arg;

    if (acc % 2 == 0){
        account.innerHTML = `
                            <h1>Register</h1>
                            <form>
                                <div>
                                    <h3>Username:</h3>
                                    <input type="text" name="username" id="username" class="indent" placeholder="Username">
                                </div>
                                <div>
                                    <h3>Email:</h3>
                                    <input type="email" name="email" id="email" class="indent" placeholder="Email">
                                </div>
                                <div>
                                    <h3>Password:</h3>
                                    <input type="password" name="password" id="password" class="indent" placeholder="Password">
                                </div>
                                <div>
                                    <h3>Birthdate:</h3>
                                    <input type="date" name="birthdate" id="birthdate" class="indent">
                                </div>
                                <div>
                                    <h3>Do you want to recieve notifications on updates and/or products?</h3>
                                    <input type="radio" name="radio" id="Radio" style="margin-left: 25px;">Yes
                                    <input type="radio" name="radio" id="Radio">No
                                </div>
                                <button type="reset" class="submit">Register</button>
                                <div class="right">
                                    <p>Already have an account? <button onclick="Account(1)">Log In</button></p>
                                </div>
                            </form>
                            `
    }
    else if (acc % 2 == 1){
        account.innerHTML = `
                            <h1>Log in</h1>
                            <form>
                                <div>
                                    <h3>Username or Email:</h3>
                                    <input type="text" name="username" id="username" class="indent" placeholder="Username/Email">
                                </div>
                                <div>
                                    <h3>Password:</h3>
                                    <input type="password" name="password" id="password" class="indent" placeholder="Password">
                                </div>
                                <button type="reset" class="submit">Log in</button>
                                <div class="right">
                                    <p>Don't have an account? <button onclick="Account(1)">Register</button></p>
                                </div>
                            </form>
                            `
    }

    if (acc > 1){
        acc = 0;
    }
}

/* PRODUCT SRC */


function storeProductData(index) {
    const items = [
        {
            src: document.getElementById('image1').src,
            title: document.getElementById('title1').innerHTML,
            description: document.getElementById('description1').innerHTML
        },
        {
            src: document.getElementById('image2').src,
            title: document.getElementById('title2').innerHTML,
            description: document.getElementById('description2').innerHTML
        },
        {
            src: document.getElementById('image3').src,
            title: document.getElementById('title3').innerHTML,
            description: document.getElementById('description3').innerHTML
        },
        {
            src: document.getElementById('image4').src,
            title: document.getElementById('title4').innerHTML,
            description: document.getElementById('description4').innerHTML
        },
        {
            src: document.getElementById('image5').src,
            title: document.getElementById('title5').innerHTML,
            description: document.getElementById('description5').innerHTML
        }
    ];

    const selectedItem = items[index];
    sessionStorage.setItem('productSrc', selectedItem.src);
    sessionStorage.setItem('productTitle', selectedItem.title);
    sessionStorage.setItem('productDescription', selectedItem.description);
}
