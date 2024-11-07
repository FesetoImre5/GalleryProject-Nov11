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
}