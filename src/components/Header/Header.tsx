import React, { useState } from "react";

import styles from "./Header.module.css";

// ICONS

import Pages from '../../assets/icons/pages.png';
import Notificacao from '../../assets/icons/notificacao.png';
import Feed from '../../assets/icons/feed.png';
import Perfil from '../../assets/icons/perfil.png';
import Logo_Justa from '../../assets/images/logo_justa.png';

export default function Header() {
    const [pagesVisible, setPagesVisible] = useState(false);
    const [notificacoesVisible, setNotificacoesVisible] = useState(false);

    const displayPages = pagesVisible ? {display: "block"} : {display: "none"};
    const displayNotificacoes = notificacoesVisible ? {display: "block"} : {display: "none"};

    function handlePages() { setPagesVisible(!pagesVisible); }
    function handleNotificacoes() { setNotificacoesVisible(!notificacoesVisible); }

    return (
        <header>
            <div className={styles.divHeaderLeft}>
                <div className={styles.divIcons}>
                    <img onClick={() => handlePages()} src={Pages} alt="Ícone páginas" className={styles.icon}/>
                    <img onClick={() => handleNotificacoes()} src={Notificacao} alt="Ícone notificação" className={styles.icon}/>
                    <img src={Feed} alt="Ícone feed" className={styles.icon}/>
                    <img src={Perfil} alt="Ícone perfil" className={styles.icon}/>
                </div>

                {/* PÁGINAS */}
                <div className={styles.paginas} style={displayPages}>
                    <ul>
                        <li>Home</li>
                        <li>Feed</li>
                        <li>Mensagens</li>
                        <li>Perfil</li>
                        <li>Sobre</li>
                    </ul>
                </div>

                {/* NOTIFICAÇÕES */}

                <div style={displayNotificacoes} className={styles.notificacoes}>
                    <div className={styles.notificacoesOne}>
                        <img src={Perfil}/>
                        <p>Conteúdo notificação</p>
                        <span>01/12/2024</span>
                    </div>
                    <div className={styles.notificacoesOne}>
                        <img src={Perfil}/>
                        <p>Conteúdo notificação</p>
                        <span>01/12/2024</span>
                    </div>
                    <div className={styles.notificacoesOne}>
                        <img src={Perfil}/>
                        <p>Conteúdo notificação</p>
                        <span>01/12/2024</span>
                    </div>
                </div>
            </div>

            <div className="divHeaderCenter">
                <img id={styles.imgHeaderLogo} src={Logo_Justa} alt="Logo principal" className="logo"/>
            </div>
            <div className="divHeaderRight">
                <input id="inputHeaderSearch" placeholder="o que você procura?" type="text"/>
            </div>
        </header>
    )
};