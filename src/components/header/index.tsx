import React, { useState } from 'react';
import './header.styles.sass';
import { Tab, Tabs, Typography } from '@mui/material';


export default function HeaderComponent() {
    return (
        <div className='header'>
            <Typography>Tenerifes</Typography>
            <Tabs aria-label="basic tabs example">
                <Tab label="Nossa História" />
                <Tab label="Portfólio" />
                <Tab label="A comunicação empresarial" />
                <Tab label="Fale Conosco" />
                <Tab label="Notícia" />
            </Tabs>
        </div>
    );
}
