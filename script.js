window.addEventListener('resize' , () => {
    let width = window.innerWidth;
    if(width < 700){
        document.getElementById('navBar').style.display = 'none';
        document.getElementById('openArrow').style.display = 'block';
    }else{
        document.getElementById('navBar').style.display = 'flex';
        document.getElementById('openArrow').style.display = 'none';
    }
})