import React from 'react';
import styles from './Perfil.module.css';

import PerfilIcon from '../../assets/icons/perfil.png';

import WhatsApp from '../../assets/icons/social_media/zap pequeno.png';
import Instagram from '../../assets/icons/social_media/ig pequeno.png';
import GitHub from '../../assets/icons/social_media/github pequeno.png';

import Joao from '../../assets/images/feed/joao.jpg';
import Maria from '../../assets/images/feed/maria.jpg';
import Pedro from '../../assets/images/feed/pedro.jpg';

export default function Perfil() {
    
    document.title = 'CMHub - Perfil';

    return (
        <div className={styles.divPerfil}>
            <h1>Perfil</h1>

            <div className={styles.divPerfilMain}>
                <div className={styles.divPerfilMainHeader}>
                    <p>Nome Usuário</p>
                    <span>username</span>
                </div>
                <div className={styles.divPerfilMainContent}>
                    <img src={PerfilIcon} alt="imagem perfil"/>
                    <div className={styles.divPerfilMainContentAmigos}>
                        <div className="divPerfilMainContentAmigosLeft">
                            <p>Amigos</p>
                            <span>0</span>
                        </div>
                        <div className="divPerfilMainContentAmigosRight">
                            <p>Curtidas</p>
                            <span>0</span>  
                        </div>
                    </div>
                    <div className={styles.divPerfilMainContentBio}>
                        <p>Bio</p>
                        <input value="Oi! Esta é minha bio" type="text"/>
                        <p>Links</p>
                        <div className={styles.divPerfilMainContentBioLinks}>
                            <div className={styles.divPerfilMainContentBioLinksOne}>
                                <img src={WhatsApp} alt="icone link perfil"/>
                                <p>Meu WhatsApp</p>
                                <a href="https:wa.me/5561994030749/" target='_blank'>Clique aqui</a>
                            </div>
                            <div className={styles.divPerfilMainContentBioLinksOne}>
                                <img src={GitHub} alt="icone link perfil"/>
                                <p>Meu GitHub</p>
                                <a href="https://github.com/vitukjkk" target='_blank'>Clique aqui</a>
                            </div>
                            <div className={styles.divPerfilMainContentBioLinksOne}>
                                <img src={Instagram} alt="icone link perfil"/>
                                <p>Meu Instagram</p>
                                <a href="https://instagram.com/vitukjkkk/" target='_blank'>Clique aqui</a>
                            </div>
                        </div>
                    </div>
                    <button>Editar perfil</button>
                    <h3>Posts</h3>
                    <div className={styles.divPerfilMainContentPosts}>
                        <div className={styles.divPerfilMainContentPostsOne}>
                            <img src={Joao} alt="imagem perfil"/>
                            <p>Nome do usuário</p>
                            <p>Conteúdo post</p>
                            <span>01/12/2024</span>
                        </div>
                        <div className={styles.divPerfilMainContentPostsOne}>
                            <img src={Maria} alt="imagem perfil"/>
                            <p>Nome do usuário</p>
                            <p>Conteúdo post</p>
                            <span>01/12/2024</span>
                        </div>
                        <div className={styles.divPerfilMainContentPostsOne}>
                            <img src={Pedro} alt="imagem perfil"/>
                            <p>Nome do usuário</p>
                            <p>Conteúdo post</p>
                            <span>01/12/2024</span>
                        </div>
                        <div className={styles.divPerfilMainContentPostsOne}>
                            <img src={Joao} alt="imagem perfil"/>
                            <p>Nome do usuário</p>
                            <p>Conteúdo post</p>
                            <span>01/12/2024</span>
                        </div>
                        <div className={styles.divPerfilMainContentPostsOne}>
                            <img src={Maria} alt="imagem perfil"/>
                            <p>Nome do usuário</p>
                            <p>Conteúdo post</p>
                            <span>01/12/2024</span>
                        </div>
                        <div className={styles.divPerfilMainContentPostsOne}>
                            <img src={Pedro} alt="imagem perfil"/>
                            <p>Nome do usuário</p>
                            <p>Conteúdo post</p>
                            <span>01/12/2024</span>
                        </div>
                        <div className={styles.divPerfilMainContentPostsOne}>
                            <img src={Joao} alt="imagem perfil"/>
                            <p>Nome do usuário</p>
                            <p>Conteúdo post</p>
                            <span>01/12/2024</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}