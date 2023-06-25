import React from 'react';
import './main.styles.sass';
import HeaderComponent from '../../components/header';
import MainArticleComponent from '../../components/mainArticle';
import FooterComponent from '../../components/footer';
import { Box } from '@mui/material';

function Main() {
    return (
        <Box>
            {/*  <header className="header">
                <HeaderComponent />
            </header> */}

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: '#333634',
                width: '90wh',
            }}>

                <MainArticleComponent />
            </Box>

            <footer className="footer">
                <FooterComponent />
            </footer>
        </Box>
    );
}

export default Main;
