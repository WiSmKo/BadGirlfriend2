var nav = document.querySelector('nav');

window.onscroll = function(){
    if (window.pageYOffset > 0) {
        nav.classList.add('navFill');
    } else {
        nav.classList.remove('navFill');
    }
}