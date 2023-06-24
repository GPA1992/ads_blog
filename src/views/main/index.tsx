import React from 'react';
import './main.styles.sass';
import HeaderComponent from '../../components/header';
import MainArticleComponent from '../../components/mainArticle';
import FooterComponent from '../../components/footer';

function Main() {
    return (
        <div className="app-container">
            {/*  <header className="header">
                <HeaderComponent />
            </header> */}
            <main className="main">
                <MainArticleComponent />
            </main>
            <footer className="footer">
                <FooterComponent />
            </footer>
        </div>
    );
}

export default Main;
