import React, { useState } from 'react';
import './footer.styles.sass';
import { Typography } from '@mui/material';


export default function FooterComponent() {
    return (
        <footer>
            <Typography sx={{ color: 'white', width: '100%', fontFamily: 'tenerifes', textAlign: 'center', fontSize: '26px' }} >
                Teneriffe
            </Typography>
        </footer>
    );
}