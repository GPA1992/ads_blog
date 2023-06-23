import React, { useState } from 'react';
import styles from './portfolio.styles.sass';
import { Avatar, Box, Button, Grid, Tab, Tabs, ThemeProvider, Typography, createTheme } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import allImages from './imgImporter/importer'
import { Lanche } from './imgImporter/importer'

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

function a11yProps(index: any) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`
    };
}

export default function Portfolio() {

    const [value, setValue] = useState('1')
    const [lanche, setLanche] = useState<Lanche>(allImages[0])

    const handleChange = (event: React.SyntheticEvent, lanche: Lanche) => {
        setValue(lanche.name)
        setLanche(lanche)
    }


    return (
        <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
            <Typography variant="h4" gutterBottom sx={{ color: '#d79a49', margin: '30px', fontWeight: '600' }} >
                Lanches
            </Typography>
            <ThemeProvider theme={theme}>
                <TabContext value={value}>
                    <Box>
                        <TabList
                            onChange={handleChange}
                            aria-label='Tabs example'
                            TabIndicatorProps={{
                                style: {
                                    backgroundColor: "grey",
                                }
                            }}
                            indicatorColor='primary'
                            centered
                        >
                            <Grid container spacing={2}>
                                {
                                    allImages.map((img: any) => (
                                        <Grid onClick={() => setLanche(img)} item xs={1} sm={5} md={2} key={img.name} sx={{ color: '#d79a49', margin: '8 px', fontSize: '12px', textAlign: 'center' }}>
                                            <Tab
                                                label={img.name}
                                                {...a11yProps(0)}
                                                value={img.name}
                                                component={() => (
                                                    <Button onClick={() => setValue(img.name)}>
                                                        <Avatar
                                                            src={img.img}
                                                            sx={{
                                                                width: '60px',
                                                                height: '60px',
                                                                backgroundSize: 'cover'
                                                            }}
                                                        />
                                                    </Button>
                                                )}
                                                sx={{
                                                    fontSize: '16px',
                                                    fontWeight: 'bold',
                                                    color: 'black',
                                                    minWidth: '200px',
                                                }}
                                            />
                                            <Typography gutterBottom sx={{ color: 'white', margin: '8 px', fontSize: '14px', textAlign: 'center' }} >
                                                {img.name}
                                            </Typography>
                                        </Grid>
                                    ))}
                            </Grid>
                        </TabList>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '450px',
                        width: '800px',
                        borderRadius: '15px',
                        margin: '20px'

                    }}>

                        <Avatar
                            src={lanche?.img}
                            sx={{
                                width: '280px',
                                height: '280px',
                                border: '3px #d79a49 solid',
                            }}
                        />
                        <Box sx={{
                            height: '80px', marginBottom: '10px', textAlign: 'center'
                        }}>
                            <Typography variant="h5" gutterBottom sx={{ color: 'white', fontWeight: '600', margin: '15 px' }} >
                                {lanche?.name}
                            </Typography>
                            <Typography variant="body1" gutterBottom sx={{
                                textAlign: 'justify', color: 'black', fontSize: '14px',
                                fontWeight: '500', backgroundColor: '#DD9937', padding: '7px',
                                borderRadius: '8px',
                            }} >
                                {lanche?.desc}
                            </Typography>
                        </Box>
                    </Box>

                </TabContext >
            </ThemeProvider>
        </Box >
    );
}