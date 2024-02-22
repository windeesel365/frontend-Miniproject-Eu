
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('active');

        var contactButton = document.querySelector('.contact-now');
        if (contactButton.style.display === 'none' || contactButton.style.display === '') {
            contactButton.style.display = 'block';
        } else {
            contactButton.style.display = 'none';
        }
        
    });
});


function playVideo() {
    //to play video
}