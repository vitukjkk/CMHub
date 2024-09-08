var controlBanner = 0;
var controlBannerEvents = 0;

// CORAÇÕES
var controlIndexCoracao = 0;
var controlCoracao = false;
var controlMatrizCoracao = [[controlIndexCoracao], [controlCoracao]];

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

function changeBannerEvents() {
    var imgBannerEventsIndex = document.querySelector("#imgIndexEvento");

    if(controlBannerEvents === 0) {
        controlBannerEvents = 1;
        imgBannerEventsIndex.src = "../assets/images/eventos/desafio.png";
    }
    else if(controlBannerEvents === 1) {
        controlBannerEvents = 2;
        imgBannerEventsIndex.src = "../assets/images/eventos/notas_saber.png";
    }
    else {
        controlBannerEvents = 0;
        imgBannerEventsIndex.src = "../assets/images/eventos/vamos_jogar.png";
    }
}

function changeCoracao() {
    var imgPostagemCoracaoSemMark01 = document.querySelector("#imgPostagemCoracaoSemMark01");
    var imgPostagemCoracaoSemMark02 = document.querySelector("#imgPostagemCoracaoSemMark02");
    var imgPostagemCoracaoSemMark03 = document.querySelector("#imgPostagemCoracaoSemMark03");

    switch(controlIndexCoracao) {
        case 1:
            if(controlCoracao === false) {
                imgPostagemCoracaoSemMark01.src = "../assets/images/feed/coracao_pequeno.png";
                controlCoracao = true;
            }
            else {
                imgPostagemCoracaoSemMark01.src = "../assets/images/feed/tomark_coracao_pequeno.png";
                controlCoracao = false;
            }
            break;
        case 2:
            if(controlCoracao === false) {
                imgPostagemCoracaoSemMark02.src = "../assets/images/feed/coracao_pequeno.png";
                controlCoracao = true;
            }
            else {
                imgPostagemCoracaoSemMark02.src = "../assets/images/feed/tomark_coracao_pequeno.png";
                controlCoracao = false;
            }
            break;
        case 3:
            if(controlCoracao === false) {
                imgPostagemCoracaoSemMark03.src = "../assets/images/feed/coracao_pequeno.png";
                controlCoracao = true;
            }
            else {
                imgPostagemCoracaoSemMark03.src = "../assets/images/feed/tomark_coracao_pequeno.png";
                controlCoracao = false;
            }
            break;
    }
}
