import React, { useState } from "react";
import { Link } from "react-router-dom";

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
                    <Link to="/feed"><img src={Feed} alt="Ícone feed" className={styles.icon}/></Link>
                    <Link to="/perfil"><img src={Perfil} alt="Ícone perfil" className={styles.icon}/></Link>
                </div>

                {/* PÁGINAS */}
                <div className={styles.paginas} style={displayPages}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/feed">Feed</Link></li>
                        <li><Link to="/mensagens">Mensagens</Link></li>
                        <li><Link to="/perfil">Perfil</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                    </ul>
                </div>

                {/* NOTIFICAÇÕES */}

                <div style={displayNotificacoes} className={styles.notificacoes}>
                    <div className={styles.notificacoesOne}>
                        <img alt="Perfil" src={Perfil}/>
                        <p>Conteúdo notificação</p>
                        <span>01/12/2024</span>
                    </div>
                    <div className={styles.notificacoesOne}>
                        <img alt="Perfil" src={Perfil}/>
                        <p>Conteúdo notificação</p>
                        <span>01/12/2024</span>
                    </div>
                    <div className={styles.notificacoesOne}>
                        <img alt="Perfil"src={Perfil}/>
                        <p>Conteúdo notificação</p>
                        <span>01/12/2024</span>
                    </div>
                </div>
            </div>

            <div className="divHeaderCenter">
                <Link to="/"><img id={styles.imgHeaderLogo} src={Logo_Justa} alt="Logo principal" className="logo"/></Link>
            </div>
            <div className="divHeaderRight">
                <input id="inputHeaderSearch" placeholder="o que você procura?" type="text"/>
            </div>
        </header>
    )
};