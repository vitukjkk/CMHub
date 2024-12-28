import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Feed.module.css';

import { Post } from '../../types/Post';
import * as api from '../../api';

import Perfil from '../../assets/icons/perfil.png';
import PostImage from '../../assets/images/feed/maria.jpg';
import Curtir from '../../assets/images/feed/tomark_coracao_pequeno.png';
import Compartilhar from '../../assets/images/feed/botao_compartilhar.png';

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    document.title = 'CMHub - Feed';

    const fetchPosts = async () => {
      try {
        const response = await axios.get(api.URL + 'posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Erro ao buscar posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className={styles.divFeed}>
      <h1>Feed</h1>
      <div className={styles.divFeedMain}>
        {posts.map((post) => (
          <div className={styles.divFeedPost}>
            <div className={styles.divFeedPostHeader}>
              <img src={Perfil} alt="Perfil"/>
              <h2>{post.title}</h2>
              <p>{'sem usuário'}</p>
            </div>
            <div className={styles.divFeedPostContent}>
              <img alt="conteúdo imagem" src={PostImage}/>
              <p>{post.content}</p>
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
        ))}
      </div>
    </div>
  );
}