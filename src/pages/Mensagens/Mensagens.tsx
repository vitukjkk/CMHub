import React from 'react';
import styles from './Mensagens.module.css';

import Perfil from '../../assets/icons/perfil.png';

export default function Mensagens() {

    document.title = 'CMHub - Home';

    return (
        <div className={styles.divMensagens}>
            <div className={styles.divMensagensPrivadas}>
                <h2 className={styles.h2TitleMensagem}>Privadas</h2>
                <div className={styles.divMensagensPrivadasOne}>
                    <img className={styles.imgPerfil} src={Perfil} alt="imagem de perfil"/>
                    <p>Nome do usuário</p>
                    <p>Última mensagem</p>
                    <span>{new Date().getDate()}</span>    
                </div>
                <div className={styles.divMensagensPrivadasOne}>
                    <img className={styles.imgPerfil} src={Perfil} alt="imagem de perfil"/>
                    <p>Nome do usuário</p>
                    <p>Última mensagem</p>
                    <span>{new Date().getDate()}</span>    
                </div>
                <div className={styles.divMensagensPrivadasOne}>
                    <img className={styles.imgPerfil} src={Perfil} alt="imagem de perfil"/>
                    <p>Nome do usuário</p>
                    <p>Última mensagem</p>
                    <span>{new Date().getDate()}</span>    
                </div>
                <div className={styles.divMensagensPrivadasOne}>
                    <img className={styles.imgPerfil} src={Perfil} alt="imagem de perfil"/>
                    <p>Nome do usuário</p>
                    <p>Última mensagem</p>
                    <span>{new Date().getDate()}</span>    
                </div>
                <div className={styles.divMensagensPrivadasOne}>
                    <img className={styles.imgPerfil} src={Perfil} alt="imagem de perfil"/>
                    <p>Nome do usuário</p>
                    <p>Última mensagem</p>
                    <span>{new Date().getDate()}</span>    
                </div>
            </div>

            <div className={styles.divMensagensGroups}>
                <h2 className={styles.h2TitleMensagem}>Grupos</h2>
                <div className={styles.divMensagensGroupsOne}>
                    <img className={styles.imgPerfil} src={Perfil} alt="imagem de perfil"/>
                    <p>Nome do grupo</p>
                    <p>Última mensagem</p>
                    <span>{new Date().getDate()}</span>    
                </div>
                <div className={styles.divMensagensGroupsOne}>
                    <img className={styles.imgPerfil} src={Perfil} alt="imagem de perfil"/>
                    <p>Nome do grupo</p>
                    <p>Última mensagem</p>
                    <span>{new Date().getDate()}</span>    
                </div>
                <div className={styles.divMensagensGroupsOne}>
                    <img className={styles.imgPerfil} src={Perfil} alt="imagem de perfil"/>
                    <p>Nome do grupo</p>
                    <p>Última mensagem</p>
                    <span>{new Date().getDate()}</span>    
                </div>
                <div className={styles.divMensagensGroupsOne}>
                    <img className={styles.imgPerfil} src={Perfil} alt="imagem de perfil"/>
                    <p>Nome do grupo</p>
                    <p>Última mensagem</p>
                    <span>{new Date().getDate()}</span>    
                </div>
                <div className={styles.divMensagensGroupsOne}>
                    <img className={styles.imgPerfil} src={Perfil} alt="imagem de perfil"/>
                    <p>Nome do grupo</p>
                    <p>Última mensagem</p>
                    <span>{new Date().getDate()}</span>    
                </div>
            </div>
        </div>
    );
}