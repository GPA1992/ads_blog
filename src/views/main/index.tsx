import React from 'react';
import styles from './styles.module.scss';
import HeaderComponent from '../../components/header';
import MainArticleComponent from '../../components/mainArticle';
import FooterComponent from '../../components/footer';

function Main() {
    return (
        <div className={styles.container}>
            <HeaderComponent />
            <MainArticleComponent />
            <FooterComponent />
        </div>
    );
}

export default Main;
