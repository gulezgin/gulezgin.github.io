// Splash Screen kontrolü
document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.querySelector('.splash-screen');
    
    // 3 saniye sonra splash screen'i gizle
    setTimeout(() => {
        splashScreen.classList.add('hidden');
        
        // Animasyon tamamlandıktan sonra elementi kaldır
        setTimeout(() => {
            splashScreen.remove();
        }, 500); // 500ms = transition süresi
    }, 3000); // 3000ms = 3 saniye
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
