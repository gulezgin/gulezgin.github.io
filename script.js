document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.querySelector('.main-content');
    const audio = document.getElementById('background-music');

    setTimeout(() => {
        splashScreen.classList.add('fade-out');
        
        mainContent.classList.add('visible');
        
        audio.muted = false;
        audio.play();
        
        setTimeout(() => {
            splashScreen.style.display = 'none';
        }, 1000); 
    }, 3000); 
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('selection');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
        })
    }
})
}
