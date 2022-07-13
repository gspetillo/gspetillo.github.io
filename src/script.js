let subtitle = document.getElementById('subtitle');
let backToTopButton = document.getElementById('backToTop');
let copyright = document.getElementById('copyright');
let bigImage = document.getElementById('bigImage');
let smallImages = document.getElementsByClassName('smallImages');
let miniatures = document.getElementsByClassName('miniature');

window.onscroll = function () { scrollFunction() };

let portifolioGallerySrc = [
    './src/assets/images/logo/gabriel-petillo-logo.png',
    './src/assets/images/logo/gabriel-petillo-logo.png',
    './src/assets/images/logo/gabriel-petillo-logo.png',
]

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function fadeAnimation() {
    let carrousel = [
        'Desenvolvimento<br> de Software',
        'Design<br>Digital',
        'Produtos<br>Digitais',
        'Marketing<br>Digital',
        'Cursos<br>Particulares',
        'Revisões<br>Técnicas',
        'Palestras<br>Técnicas',
        'Consultoria de<br />Soluções em TI'
    ]
    let i = 0;

    setTimeout(() => {
    }, 800);

    setInterval(() => {
        setTimeout(() => {
            subtitle.innerHTML = carrousel[i % carrousel.length];
            i++;
        }, 200);
    }, 3000);

}

function setGalleryImages() {
    smallImages.innerHTML = '';
    for (let i = 0; i < portifolioGallerySrc.length; i++) {
        console.log('portifolioGallerySrc');
        smallImages.innerHTML += `
            <div class="miniature">
                <img 
                src="${portifolioGallerySrc[i]}" 
                onclick="galleryMagnifier(${i})">
            </div>
        `;

    }
}

function galleryMagnifier(index) {
    console.log(index);
    bigImage.src = portifolioGallerySrc[index];
    bigImage.style.color = 'black';
}

function footerDate() {
    let date = new Date();
    copyright.innerHTML = '© Gabriel Petillo ' + date.getFullYear();
}

backToTopButton.style.display = "none";
topFunction();
setGalleryImages();
fadeAnimation();
footerDate();