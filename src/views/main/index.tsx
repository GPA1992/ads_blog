import React from 'react';
import './main.styles.sass';
import HeaderComponent from '../../components/header';
import MainArticleComponent from '../../components/mainArticle';
import FooterComponent from '../../components/footer';

function Main() {
    return (
        <div className='container'>
            <HeaderComponent />
            <MainArticleComponent />
            <FooterComponent />
        </div>
    );
}

export default Main;
