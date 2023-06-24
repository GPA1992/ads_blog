import React, { useState } from 'react';
import './mainArticle.styles.sass';
import { Avatar, Box, Tab, Tabs, ThemeProvider, Typography, createTheme } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import OurStory from '../ourHistory';
import Portfolio from '../portfólio';
import logo from '../../assets/images/logo.png'
import BusinessCommunication from '../businessCommunication';
import TalkToUs from '../talkToUs';
import News from '../news';


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
        <Box sx={{ width: '100%', }} >
            <ThemeProvider theme={theme}>
                <TabContext value={value}>
                    <Box sx={{
                        display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
                        width: '100%', fontSize: '20px', height: '200px'
                    }} >
                        <Avatar
                            src={logo}
                            sx={{
                                width: '200px',
                                height: '200px',
                                borderBottom: '5px #DD9937 solid', paddingBottom: '10px'

                            }}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography sx={{ color: '#dd9937', width: '100%', fontFamily: 'tenerifes', fontSize: '85px' }} >
                                Teneriffe
                            </Typography>
                            <TabList
                                onChange={handleChange}
                                aria-label='Tabs example'
                                TabIndicatorProps={{
                                    style: {
                                        backgroundColor: 'white',
                                    }
                                }}
                                indicatorColor='primary'
                                sx={{
                                    height: '50px',
                                    backgroundColor: '#DD9937',
                                    border: '1px solid #DD9937',
                                    borderRadius: '10px'
                                }}
                                centered
                            >

                                <Tab id='tab' label="Nossa História" value='1' sx={{ fontSize: '26px', fontWeight: '400', color: 'black', fontFamily: 'alvaro' }} />
                                <Tab id='tab' label="Portfólio" value='2' sx={{ fontSize: '26px', fontWeight: '400', color: 'black', fontFamily: 'alvaro' }} />
                                <Tab id='tab' label="A comunicação empresarial" value='3' sx={{ fontSize: '26px', fontWeight: '400', color: 'black', fontFamily: 'alvaro' }} />
                                <Tab id='tab' label="Fale Conosco" value='4' sx={{ fontSize: '26px', fontWeight: '400', color: 'black', fontFamily: 'alvaro' }} />
                                <Tab id='tab' label="Notícia" value='5' sx={{ fontSize: '26px', fontWeight: '400', color: 'black', fontFamily: 'alvaro' }} />
                            </TabList>
                        </Box>
                    </Box>
                    <TabPanel value={value} id="tab-panel" sx={{ display: 'flex', justifyContent: 'center' }}>
                        {value === '1' && <OurStory />}
                        {value === '2' && <Portfolio />}
                        {value === '3' && <BusinessCommunication />}
                        {value === '4' && <TalkToUs />}
                        {value === '5' && <News />}
                    </TabPanel>
                </TabContext >

            </ThemeProvider>
        </Box >
    );
}