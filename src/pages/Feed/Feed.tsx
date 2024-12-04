import React from 'react';
import styles from './Feed.module.css';

import Perfil from '../../assets/icons/perfil.png';
import Post from '../../assets/images/feed/post_abstrato.png';
import Compartilhar from '../../assets/images/feed/botao_compartilhar.png';
// import Curtido from '../../assets/images/feed/coração.png';
import Curtir from '../../assets/images/feed/tomark_coracao.png';
import Joao from '../../assets/images/feed/joao.jpg';
import Maria from '../../assets/images/feed/maria.jpg';
import Pedro from '../../assets/images/feed/pedro.jpg';

export default function Feed() {

    document.title = 'CMHub - Feed';

    return (
        <div className={styles.divFeed}>
            <h1>Feed</h1>
            
            <div className={styles.divFeedMain}>
                <div className={styles.divFeedPost}>
                    <div className={styles.divFeedPostHeader}>
                        <img src={Perfil} alt="Perfil"/>
                        <h2>Título post</h2>
                        <p>Nome do usuário</p>
                    </div>
                    <div className={styles.divFeedPostContent}>
                        <img alt="conteúdo imagem" src={Post}/>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto sunt libero nulla, temporibus deserunt sapiente molestiae inventore itaque laudantium ipsa tenetur omnis perspiciatis ex doloribus officiis! Deleniti, ut debitis.
                        </p>
                    </div>
                    <div className={styles.divFeedPostFooter}>
                        <div className={styles.divFeedPostFooterTop}>
                            <img src={Curtir} alt="botao curtir"/>
                            <img src={Compartilhar} alt="botao compartilhar"/>
                        </div>
                        <div className={styles.divFeedPostFooterBottom}>
                            <input id="inputComentarPost" name="inputComentarPost" type="text" placeholder="deixe um comentário"/><br/>
                            <button>Ver comentários</button>
                        </div>
                    </div>
                </div>

                <div className={styles.divFeedPost}>
                    <div className={styles.divFeedPostHeader}>
                        <img src={Perfil} alt="Perfil"/>
                        <h2>Título post</h2>
                        <p>Nome do usuário</p>
                    </div>
                    <div className={styles.divFeedPostContent}>
                        <img alt="conteúdo imagem" src={Joao}/>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto sunt libero nulla, temporibus deserunt sapiente molestiae inventore itaque laudantium ipsa tenetur omnis perspiciatis ex doloribus officiis! Deleniti, ut debitis.
                        </p>
                    </div>
                    <div className={styles.divFeedPostFooter}>
                        <div className={styles.divFeedPostFooterTop}>
                            <img src={Curtir} alt="botao curtir"/>
                            <img src={Compartilhar} alt="botao compartilhar"/>
                        </div>
                        <div className={styles.divFeedPostFooterBottom}>
                            <input id="inputComentarPost" name="inputComentarPost" type="text" placeholder="deixe um comentário"/><br/>
                            <button>Ver comentários</button>
                        </div>
                    </div>
                </div>

                <div className={styles.divFeedPost}>
                    <div className={styles.divFeedPostHeader}>
                        <img src={Perfil} alt="Perfil"/>
                        <h2>Título post</h2>
                        <p>Nome do usuário</p>
                    </div>
                    <div className={styles.divFeedPostContent}>
                        <img alt="conteúdo imagem" src={Maria}/>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto sunt libero nulla, temporibus deserunt sapiente molestiae inventore itaque laudantium ipsa tenetur omnis perspiciatis ex doloribus officiis! Deleniti, ut debitis.
                        </p>
                    </div>
                    <div className={styles.divFeedPostFooter}>
                        <div className={styles.divFeedPostFooterTop}>
                            <img src={Curtir} alt="botao curtir"/>
                            <img src={Compartilhar} alt="botao compartilhar"/>
                        </div>
                        <div className={styles.divFeedPostFooterBottom}>
                            <input id="inputComentarPost" name="inputComentarPost" type="text" placeholder="deixe um comentário"/><br/>
                            <button>Ver comentários</button>
                        </div>
                    </div>
                </div>


                <div className={styles.divFeedPost}>
                    <div className={styles.divFeedPostHeader}>
                        <img src={Perfil} alt="Perfil"/>
                        <h2>Título post</h2>
                        <p>Nome do usuário</p>
                    </div>
                    <div className={styles.divFeedPostContent}>
                        <img alt="conteúdo imagem" src={Pedro}/>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto sunt libero nulla, temporibus deserunt sapiente molestiae inventore itaque laudantium ipsa tenetur omnis perspiciatis ex doloribus officiis! Deleniti, ut debitis.
                        </p>
                    </div>
                    <div className={styles.divFeedPostFooter}>
                        <div className={styles.divFeedPostFooterTop}>
                            <img src={Curtir} alt="botao curtir"/>
                            <img src={Compartilhar} alt="botao compartilhar"/>
                        </div>
                        <div className={styles.divFeedPostFooterBottom}>
                            <input id="inputComentarPost" name="inputComentarPost" type="text" placeholder="deixe um comentário"/><br/>
                            <button>Ver comentários</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}