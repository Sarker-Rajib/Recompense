// side nav toggle
function sideNavToogle(){
    const sideNav = document.querySelector('.sideNav');
    const style = getComputedStyle(sideNav);
    if(style.width == '0px'){
        sideNav.style.width = '300px';
        sideNav.style.overflow = 'auto';
    }else {
        sideNav.style.width = '0px';
        sideNav.style.overflow = 'hidden';
    }
 }
