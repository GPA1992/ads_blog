import React from 'react';
import './main.styles.sass';
import HeaderComponent from '../../components/header';
import MainArticleComponent from '../../components/mainArticle';
import FooterComponent from '../../components/footer';
import { Box } from '@mui/material';

function Main() {
    return (
        <Box sx={{
            height: '100%',
            backgroundColor: 'red'
        }}>
            {/*  <header className="header">
                <HeaderComponent />
            </header> */}

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: '#333634',
                width: '90wh',
                height: '100%',
                minHeight: '1000px'
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
