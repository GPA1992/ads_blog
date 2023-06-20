import React from 'react';
import Counter from '../../components/counter';
import CounterWhitRedux from '../../components/counterWhitRedux';
import GetPokemonWhitRedux from '../../components/getPokemonWhitRedux';
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
