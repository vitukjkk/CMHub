import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";

import Banner01 from '../../assets/images/banners/banner_principal.png';
import Banner02 from '../../assets/images/banners/banner_secundario.png';

import Destaque01 from '../../assets/images/destaques/saber_evolve.png';
import Destaque02 from '../../assets/images/destaques/netflix.png';
import Destaque03 from '../../assets/images/destaques/cypher.jpg';

import Evento01 from '../../assets/images/eventos/desafio.png';
import Evento02 from '../../assets/images/eventos/notas_saber.png';
import Evento03 from '../../assets/images/eventos/vamos_jogar.png';

var banners = [Banner01, Banner02];
const MAX_BANNERS = banners.length;

const eventos = [Evento01, Evento02, Evento03];
const eventosContent = [
    {
        title: "Desafio",
        date: "1/12/2024 às 08:25",
        description: "Participe do desafio e ganhe prêmios incríveis."
    },
    {
        title: "Notas saber",
        date: "3/12/2024 às 14:20",
        description: "Modularize seus conteúdos e veja mais amplamente."
    },
    {
        title: "Vamos jogar",
        date: "7/12/2024 às 21:00",
        description: "Pronto para a jogatina?"
    }
]

const MAX_EVENTOS = eventos.length;

export default function Home() {

    // ================================================================
    // BANNERS
    // ================================================================

    const [bannerIndex, setBannerIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    function nextBanner() {
        setBannerIndex((bannerIndex) => (bannerIndex + 1) % MAX_BANNERS);
    }

    useEffect(() => {
        const intervalBanner = setInterval(nextBanner, 9000);
        return () => clearInterval(intervalBanner);
    }, [bannerIndex]);

    function changeBannerMannualy(index : number) {
        
        //clearInterval(intervalBanner);

        switch (index) {
            case 0:
                setBannerIndex((bannerIndex) => (bannerIndex + 1) % MAX_BANNERS);
                break;
            case 1:
                setBannerIndex((bannerIndex) => (bannerIndex - 1) % MAX_BANNERS);
                break;
        }
    }

    const bannerStyle = isHovered ? {} : {scale: '1'};

    // ================================================================
    // EVENTOS
    // ================================================================

    
    const [eventoIndex, setEventoIndex] = useState(0);

    function changeEvento(index : number) {

        switch (index) {
            case 0:
                setEventoIndex((eventoIndex) => (eventoIndex + 1) % MAX_EVENTOS);
                break;
            case 1:
                setEventoIndex((eventoIndex) => (eventoIndex + 1) % MAX_EVENTOS);
                break;
            case 2:
                setEventoIndex((eventoIndex - 1) % MAX_EVENTOS);
                break;
        }
    }

    return (
        <div>
            <div className={styles.divHomeBaners}>
                <img 
                    onMouseEnter={() => setIsHovered(false)} 
                    onMouseLeave={() => setIsHovered(true)}
                    style={bannerStyle}
                    src={banners[bannerIndex]} 
                    alt="banner principal"/>
                <button onClick={() => changeBannerMannualy(0)}>Anterior</button>
                <button onClick={() => changeBannerMannualy(0)}>Próximo</button>
            </div>

            <div className={styles.divHomeDestaques}>
                <div className={styles.divHomeDestaquesTitle}>
                    <h1>DESTAQUES</h1>
                </div>
                <div className={styles.divHomeDestaquesContent}>
                    <div className={styles.divHomeDestaquesContentItem}>
                        <h2>saber evolve</h2>
                        <img src={Destaque01} alt="destaque 01"/>
                        <p>
                            novas funcionalidades adicionadas ao site,
                            confira na seção notícias do site <a href="https://saberevolve.com.br/notices.html">clicando aqui</a>
                        </p>
                    </div>
                    <div className={styles.divHomeDestaquesContentItem}>
                        <h2>Melhores lançamentos Netflix</h2>
                        <img src={Destaque02} alt="destaque 02"/>
                        <p>
                            A Netflix continua surpreendendo com uma seleção incrível 
							de lançamentos imperdíveis. Neste mês, os destaques incluem 
							novas temporadas de séries queridinhas, filmes emocionantes 
							e documentários envolventes. 
                        </p>
                    </div>
                    <div className={styles.divHomeDestaquesContentItem}>
                        <h2>Cypher</h2>
                        <img id={styles.imgCypher} src={Destaque03} alt="destaque 03"/>
                        <p>
                            Cypher é um agente essencial em Valorant, especializado em 
							coleta de informações e controle do mapa. Vindo do Marrocos, 
							este sentinela é um espião habilidoso que utiliza uma combinação 
							de dispositivos tecnológicos para rastrear e frustrar seus 
							inimigos. Com suas câmeras de vigilância, armadilhas e fios de 
							contenção, Cypher consegue monitorar áreas críticas e fornecer 
							informações valiosas à sua equipe, revelando a posição dos 
							adversários e bloqueando avanços.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.divHomeExplore}>

            </div>

            <div className={styles.divHomeEventos}>
                <h1>EVENTOS</h1>
                <div className={styles.divHomeEventosOne}>
                    <h2>{eventosContent[eventoIndex].title}</h2>
                    <img src={eventos[eventoIndex]} alt="Imagem evento"/>
                    <span>{eventosContent[eventoIndex].date}</span>
                    <p>{eventosContent[eventoIndex].description}</p>
                    <button className={styles.buttonHomeEventoAction}>Participar</button><br/>
                    <button onClick={() => changeEvento(0)}>Anterior</button>
                    <button onClick={() => changeEvento(1)}>Próximo</button>
                </div>
            </div>
        </div>
    )
};