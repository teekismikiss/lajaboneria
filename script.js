document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
const links = document.querySelectorAll('.menu a');
const toggle = document.getElementById('menu-toggle');

links.forEach(link => {
    link.addEventListener('click', () => {
        toggle.checked = false;
    });
});
const images = document.querySelectorAll('.galerie img');

images.forEach(img => {
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.classList.add('lightbox');

        const bigImg = document.createElement('img');
        bigImg.src = img.src;

        overlay.appendChild(bigImg);
        document.body.appendChild(overlay);

        overlay.addEventListener('click', () => {
            overlay.remove();
        });
    });
});