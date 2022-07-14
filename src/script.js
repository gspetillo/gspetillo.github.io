let subtitle = document.getElementById('subtitle');
let backToTopButton = document.getElementById('backToTop');
let copyright = document.getElementById('copyright');
let bigImage = document.getElementById('bigImage');
let smallImages = document.getElementById('smallImages');
let miniatures = document.getElementsByClassName('miniature');
let details =  document.getElementsByTagName('details');

window.onscroll = function () { scrollFunction() };

let portifolioGallerySrc = [
    '../src/assets/images/portfolio/ancora-acessorios-logo.jpg',
    '../src/assets/images/portfolio/aulas-da-vera-logo.jpg',
    '../src/assets/images/portfolio/carolina-haddad-logo.jpg',
    '../src/assets/images/portfolio/cto-talks-logo.jpg',
    '../src/assets/images/portfolio/ilha-san-car-dinamarca-fc-logo.jpg',
    '../src/assets/images/portfolio/jjean-dev-logo.jpg',
    '../src/assets/images/portfolio/m5-consorcios-logo.jpg',
    '../src/assets/images/portfolio/pyscho-killers-logo.jpg',
    '../src/assets/images/portfolio/rebels-steelwalker-logo.jpg',
    '../src/assets/images/portfolio/well-played-logo.jpg',
    'https://github.com/gspetillo/bingo-online/raw/main/App/assets/home-print.png',
    'https://github.com/gspetillo/cv-game-controller/raw/main/images/test.gif',
    'https://github.com/gspetillo/pythagorean-calculator/raw/main/resources/images/app-print.png',
    'https://github.com/gspetillo/whatsnumber/raw/main/whatsapp-number-site.png',
    'https://scontent.fcgh14-1.fna.fbcdn.net/v/t1.18169-9/12074670_154168724932766_6797173690810776725_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeEBSnXWlXTycAPFXvMzFB2Q1HyPuaEZBGXUfI-5oRkEZeicoUzSdZ9SOfBIpet1J63GmdiEm9HvtnnZc6Mm5uja&_nc_ohc=vvmcyTVhAxsAX9OrMfd&tn=vHE4TA53BQwl2Im2&_nc_ht=scontent.fcgh14-1.fna&oh=00_AT9andDc6Lz-F1SgLL8tc5TeAjvnIQlJzdct9j4d2JIvxQ&oe=62F2CBF4',
    'https://scontent.fcgh14-1.fna.fbcdn.net/v/t1.18169-9/14522923_536710059853647_3984428623330238977_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGM-IPKRDRFHLDm38LtfFebCzgvIUtDilALOC8hS0OKUCaMQGvIxXY_Wt0hnWrPDxu3U5BL4vGaV5Dzr1SRfy3u&_nc_ohc=GW_lNHHQrPcAX9clLNa&_nc_ht=scontent.fcgh14-1.fna&oh=00_AT8ymIvilI5fyPSRhG6w0bqI7Zrlev4guZzPZkkZN5dSkw&oe=62F326EA',
    'https://scontent.fcgh14-1.fna.fbcdn.net/v/t1.6435-9/171864463_3888576434589677_7827470056770340271_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFHNuqt52lEu_k-Ex1N0qUyxt5p0pCvwwzG3mnSkK_DDNqx5c6QCzGaR2RYN0FksjyLlzWxumiczBw9jbuhevz_&_nc_ohc=QFmBIHb4d4EAX8X8st6&_nc_ht=scontent.fcgh14-1.fna&oh=00_AT8vtnnUaQ4n2HvXlxnJnqT2L0y1F8_gXFEX74GpRzS-pw&oe=62F4A52D',
    'https://scontent.fcgh14-1.fna.fbcdn.net/v/t1.6435-9/44169209_1909836865796987_1602787760853221376_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFzDvftSs1r5aIl1aYFf1yehIF5Kj8pRICEgXkqPylEgGQCctsFsiisk73KRPth6uW0RgbtS2wwxGXn5VfNB2PH&_nc_ohc=q10nAiZsfsQAX8WYddV&tn=vHE4TA53BQwl2Im2&_nc_ht=scontent.fcgh14-1.fna&oh=00_AT_9TwKYjKI1c_jJ1K7GlPABPIE3SU5glC0RXxkx0GF2AA&oe=62F3DE86',
    'https://scontent.fcgh14-1.fna.fbcdn.net/v/t31.18172-8/21083750_339086403211070_7461940894865991098_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHOtr4WqR91Z6_AQY1a1cdlv-NNGk6dehe_400aTp16F1JsP9ZBNS-6-LwQBa0jnPGoyH2rc0kegzg5CHpAXyDg&_nc_ohc=nhMigndXCsoAX-9dSYR&tn=vHE4TA53BQwl2Im2&_nc_ht=scontent.fcgh14-1.fna&oh=00_AT95HVHuCUSCwkaHLTP2A9CvclcYXULdDOyKyKDlYFi2Jg&oe=62F3545F',
    'https://scontent.fcgh14-1.fna.fbcdn.net/v/t31.18172-8/21125327_339112959875081_3312080148529676198_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEPiLEnA1lt51wSSXW2D7ZrKViQ16gguocpWJDXqCC6h1tVKUDa0WI-jZ9iiL6F0CLeDvjXyRh70per5cIvtFq6&_nc_ohc=do7Y64tJwloAX89hPlE&_nc_oc=AQk9yJLAp_f1WzUShV1IHrxbN5JbzQtVBo9D2dLYF-8T67ggeUJz6uoqOQdGayCAaVs&tn=vHE4TA53BQwl2Im2&_nc_ht=scontent.fcgh14-1.fna&oh=00_AT9m3DuFwHyRGD8uZ895YZwhGUIWLt9PoTzYlR4N83cxbw&oe=62F2C395',

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
    portifolioGallerySrc.sort();
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
    bigImage.src = portifolioGallerySrc[index];
}

function showDetails(index) {
    for (let i = 0; i < details.length; i++) {
        details[i].classList.remove('animate__bounceIn','animate__pulse');
        if(i!==index){
            details[i].open = false;
        }
    }
    details[index].classList.add('animate__animated','animate__pulse','animate__infinite');
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