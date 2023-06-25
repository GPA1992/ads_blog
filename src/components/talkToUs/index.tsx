import React, { useState } from 'react';
import styles from './ourStory.styles.sass';
import { Box, Icon, SvgIcon, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from '@mui/material/Link';

export default function TalkToUs() {
    return (
        <Box sx={{
            width: {
                xs: '100%',
                sm: '100%',
                md: '90vw',
                lg: '90vw',
                xl: '50vw'
            }, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#3c3f3d', padding: '30px', borderRadius: '10px', margin: '20px'
        }} >
            <Typography variant="h4" gutterBottom sx={{ color: '#dd9937', margin: '30px', width: '100%', fontFamily: 'alvaro' }} >
                Fale Conosco
            </Typography>
            <Box sx={{ backgroundColor: '#333634', width: '100%', padding: '10px', borderRadius: '10px' }}>


                <Box sx={{ display: 'flex', width: '100%', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#333634' }}>
                    <InstagramIcon sx={{ fontSize: 40, color: 'white', margin: '10px' }} />

                    <Typography sx={{ color: '#DD9937', fontSize: '18px', fontWeight: '600' }}>
                        <Link href="https://www.instagram.com/teneriffes/" underline="hover" target="_blank">instagram.com/teneriffes</Link>


                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', width: '100%', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#333634' }}>

                    <WhatsAppIcon color='success' sx={{ fontSize: 40, color: 'white', margin: '10px' }} />
                    <Typography sx={{ color: '#DD9937', fontSize: '18px', fontWeight: '600' }}>
                        (15)  99720-9450
                    </Typography>
                </Box>
            </Box>
        </Box>

    );
}