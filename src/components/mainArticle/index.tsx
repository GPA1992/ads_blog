import React, { useState } from 'react';
import './mainArticle.styles.sass';
import { Box, Tab, Tabs, ThemeProvider, Typography, createTheme } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import OurStory from '../ourHistory';
import Portfolio from '../portfólio';


const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#11cb5f',
        },
    },
});

export default function MainArticleComponent() {
    const [value, setValue] = useState('1')


    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }

    return (
        <Box sx={{ width: '100%' }} >
            <ThemeProvider theme={theme}>
                <TabContext value={value}>
                    <Box sx={{
                        width: '100%', backgroundColor: '#DD9937', fontSize: '20px', height: '80px'
                    }} >

                        <TabList
                            onChange={handleChange}
                            aria-label='Tabs example'
                            TabIndicatorProps={{
                                style: {
                                    /*  backgroundColor: "grey", */
                                }
                            }}
                            indicatorColor='primary'
                            centered
                        >

                            <Tab id='tab' label="Nossa História" value='1' sx={{ fontSize: '14px', fontWeight: '400', color: 'black' }} />
                            <Tab id='tab' label="Portfólio" value='2' sx={{ fontSize: '14px', fontWeight: '400', color: 'black' }} />
                            <Tab id='tab' label="A comunicação empresarial" value='3' sx={{ fontSize: '14px', fontWeight: '400', color: 'black' }} />
                            <Tab id='tab' label="Fale Conosco" value='4' sx={{ fontSize: '14px', fontWeight: '400', color: 'black' }} />
                            <Tab id='tab' label="Notícia" value='5' sx={{ fontSize: '14px', fontWeight: '400', color: 'black' }} />
                        </TabList>

                    </Box>
                    <TabPanel value={value} id="tab-panel" sx={{ display: 'flex', justifyContent: 'center' }}>
                        {value === '1' && <OurStory />}
                        {value === '2' && <Portfolio />}
                    </TabPanel>
                </TabContext >
            </ThemeProvider>
        </Box >
    );
}