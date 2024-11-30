import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";

import Banner01 from '../../assets/images/banners/banner_principal.png';
import Banner02 from '../../assets/images/banners/banner_secundario.png';

var banners = [Banner01, Banner02];
const MAX_BANNERS = banners.length;

export default function Home() {

    // BANNERS

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
        </div>
    )
};