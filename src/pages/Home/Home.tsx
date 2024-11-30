import React from "react";
import styles from "./Home.module.css";

import Banner01 from '../../assets/images/banners/banner_principal.png';
import Banner02 from '../../assets/images/banners/banner_secundario.png';

export default function Home() {
    return (
        <div>
            <div className={styles.divHomeBaners}>
                <img src={Banner01} alt="banner principal"/>
                <button>Anterior</button>
                <button>Próximo</button>
            </div>
        </div>
    )
};