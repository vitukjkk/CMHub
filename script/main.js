var controlBanner = 0;

window.onload = function() {
    controlBanner = 0;
}

function showPages() {
    const lista_paginas = document.querySelector('#divPages');
    if(lista_paginas.style.display === "none") {
        lista_paginas.style.display = 'block';
    }
    else {
        lista_paginas.style.display = 'none';
    }    
}

function changeBannerFeed() {
    var imgBannerFeedIndex = document.querySelector("#imgBannerFeedIndex");
    
    if(controlBanner === 0) {
        imgBannerFeedIndex.src = "../assets/images/banners/banner_secundario.png";
        controlBanner = 1;
    }
    else {
        imgBannerFeedIndex.src = "../assets/images/banners/banner_principal.png";
        controlBanner = 0;
    }
}