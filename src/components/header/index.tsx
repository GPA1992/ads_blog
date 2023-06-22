import React, { useState } from 'react';
import './header.styles.sass';
import logo from '../../assets/images/logo.png'
import { Box, Typography } from '@mui/material';


export default function HeaderComponent() {
    return (
        <div className='headerComponent'>
            <div className="headerContainer">
                <img src={logo} alt="" />
                {/* <p id="title">Tenerifes</p> */}
            </div>

        </div>
    );
}
