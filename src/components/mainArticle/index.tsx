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
        <Box sx={{
            width: {
                xs: '100%',
                sm: '100%',
                md: '100%',
                lg: '100%',
                xl: '100%'
            }, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
        }} >
            <ThemeProvider theme={theme}>
                <TabContext value={value}>
                    <Box sx={{
                        display: 'flex', flexDirection: {
                            xs: 'column',
                            sm: 'column',
                            md: 'row',
                            lg: 'row',
                            xl: 'row'
                        }, justifyContent: 'center', alignItems: {
                            xs: 'center',
                            sm: 'center',
                            md: 'flex-end',
                            lg: 'flex-end',
                            xl: 'flex-end'
                        },
                        width: {
                            xs: '90%',
                            sm: '90%',
                            md: '200px',
                            lg: '200px',
                            xl: '200px'
                        },
                        fontSize: '20px',
                        height: {
                            xs: '',
                            sm: '',
                            md: '200px',
                            lg: '200px',
                            xl: '200px'
                        }
                    }} >
                        <Avatar
                            src={logo}
                            sx={{
                                width: {
                                    xs: '150px',
                                    sm: '150px',
                                    md: '200px',
                                    lg: '200px',
                                    xl: '200px'
                                },
                                height: {
                                    xs: '150px',
                                    sm: '150px',
                                    md: '200px',
                                    lg: '200px',
                                    xl: '200px'
                                },
                                borderBottom: '5px #DD9937 solid', paddingBottom: '10px'

                            }}
                        />
                        <Box sx={{
                            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                            width: {
                                xs: '100%',
                                sm: '100%',
                                md: 'fit-content',
                                lg: 'fit-content',
                                xl: 'fit-content'
                            },
                        }}>
                            <Typography sx={{
                                color: '#dd9937', width: '100%', fontFamily: 'tenerifes', fontSize: '85px', textAlign: {
                                    xs: 'center',
                                    sm: 'center',
                                    md: 'left',
                                    lg: 'left',
                                    xl: 'left'

                                }
                            }} >
                                Teneriffe
                            </Typography>
                            <Tabs
                                onChange={handleChange}
                                aria-label='Tabs example'
                                variant="scrollable"
                                indicatorColor='primary'
                                sx={{
                                    height: '50px',
                                    backgroundColor: '#DD9937',
                                    borderRadius: '10px',
                                    width: {
                                        xs: '100%',
                                        sm: '100%',
                                        md: '100%',
                                        lg: '100%',
                                        xl: '100%'
                                    },
                                }}
                            >

                                <Tab id='tab' label="Nossa História" value='1' sx={{
                                    fontSize: {
                                        xs: '18px',
                                        sm: '18px',
                                        md: '26px',
                                        lg: '26px',
                                        xl: '26px'
                                    }, fontWeight: '400', color: 'white', fontFamily: 'alvaro'
                                }} />
                                <Tab id='tab' label="Portfólio" value='2' sx={{
                                    fontSize: {
                                        xs: '18px',
                                        sm: '18px',
                                        md: '26px',
                                        lg: '26px',
                                        xl: '26px'
                                    }, fontWeight: '400', color: 'white', fontFamily: 'alvaro'
                                }} />
                                <Tab id='tab' label="A comunicação empresarial" value='3' sx={{
                                    fontSize: {
                                        xs: '18px',
                                        sm: '18px',
                                        md: '26px',
                                        lg: '26px',
                                        xl: '26px'
                                    }, fontWeight: '400', color: 'white', fontFamily: 'alvaro'
                                }} />
                                <Tab id='tab' label="Fale Conosco" value='4' sx={{
                                    fontSize: {
                                        xs: '18px',
                                        sm: '18px',
                                        md: '26px',
                                        lg: '26px',
                                        xl: '26px'
                                    }, fontWeight: '400', color: 'white', fontFamily: 'alvaro'
                                }} />
                                <Tab id='tab' label="Notícia" value='5' sx={{
                                    fontSize: {
                                        xs: '18px',
                                        sm: '18px',
                                        md: '26px',
                                        lg: '26px',
                                        xl: '26px'
                                    }, fontWeight: '400', color: 'white', fontFamily: 'alvaro'
                                }} />
                            </Tabs>
                        </Box>
                    </Box>
                    <TabPanel value={value} id="tab-panel" sx={{ display: 'flex', justifyContent: 'center', width: '90%' }}>
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