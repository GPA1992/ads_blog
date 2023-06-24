import React, { useState } from 'react';
import './header.styles.sass';
import logo from '../../assets/images/logo.png'
import lanche from '../../assets/images/lanche.png'
import { Box, Typography } from '@mui/material';


export default function HeaderComponent() {
    return (
        <div className='headerComponent'>
            <div className="headerContainer">
                {/* <img className='lanche' src={lanche} alt="" /> */}
                <img src={logo} alt="" />
            </div>

        </div>
    );
}
