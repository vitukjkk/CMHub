import React from "react";
import styles from "./Header.module.css";

// ICONS

import Notificacao from '../../assets/icons/notificacao.png';
import Feed from '../../assets/icons/feed.png';
import Perfil from '../../assets/icons/perfil.png';
import Logo_Justa from '../../assets/images/logo_justa.png';

export default function Header() {
    return (
        <header>
            <div className="divHeaderLeft">
                <img src={Notificacao} alt="Ícone notificação" className={styles.icon}/>
                <img src={Feed} alt="Ícone feed" className={styles.icon}/>
                <img src={Perfil} alt="Ícone perfil" className={styles.icon}/>
            </div>
            <div className="divHeaderCenter">
                <img id={styles.imgHeaderLogo} src={Logo_Justa} alt="Logo principal" className="logo"/>
            </div>
            <div className="divHeaderRight">
                <input id="inputHeaderSearch" type="text"/>
            </div>
        </header>
    )
};