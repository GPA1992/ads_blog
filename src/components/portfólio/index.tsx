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

    const [value, setValue] = useState<any>()
    const [lanche, setLanche] = useState<Lanche>(allImages[0])

    const handleChange = (event: React.SyntheticEvent, lanche: Lanche) => {
        setValue(lanche.name)
        setLanche(lanche)
    }


    return (
        <Box sx={{
            width: {
                xs: '100%',
                sm: '100%',
                md: '50%',
                lg: '50%',
                xl: '50%'
            }, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#3c3f3d', padding: '30px', borderRadius: '10px',
        }} >
            <Typography variant="h4" gutterBottom sx={{
                color: '#dd9937', margin: '30px', width: '100%', fontFamily: 'alvaro', fontSize: {
                    xs: '28px',
                    sm: '28px',
                    md: '36px',
                    lg: '36px',
                    xl: '36px'
                }
            }} >
                Portfólio
            </Typography>
            <Typography variant="body1" gutterBottom sx={{
                textAlign: 'justify', color: 'white', fontSize: {
                    xs: '14px',
                    sm: '14px',
                    md: '18px',
                    lg: '18px',
                    xl: '18px'
                }
            }} >
                Oferecemos hambúrgueres smash de alta qualidade, procurando sempre os melhores ingredientes e inovando constantemente nosso cardápio para trazer uma comida saborosa e de qualidade. Nosso diferencial está na combinação de sabores únicos e na técnica impecável de preparo, resultando em hambúrgueres suculentos e irresistíveis. Nosso público-alvo abrange pessoas de todas as idades que apreciam hambúrgueres, desde os jovens em busca de opções modernas até os adultos que desejam uma refeição reconfortante. Satisfaça seu paladar com nosso portfólio de hambúrgueres deliciosos.
            </Typography>
            <Typography variant="h4" gutterBottom sx={{
                color: '#dd9937', margin: '30px', width: '100%', fontFamily: 'alvaro', fontSize: {
                    xs: '28px',
                    sm: '28px',
                    md: '36px',
                    lg: '36px',
                    xl: '36px'
                }
            }} >
                Cardapio
            </Typography>
            <ThemeProvider theme={theme}>

                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: {
                            xs: 'column',
                            sm: 'column',
                            md: 'column',
                            lg: 'row',
                            xl: 'row'
                        },
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        borderRadius: '10px',
                        marginBottom: '20px',
                        padding: '10px',
                        paddingTop: '25px',
                        paddingBottom: '25px',
                    }}>
                        <Box>

                            <Avatar
                                src={lanche?.img}
                                sx={{
                                    width: {
                                        xs: '200px',
                                        sm: '200px',
                                        md: '320px',
                                        lg: '320px',
                                        xl: '320px'
                                    },
                                    height: {
                                        xs: '200px',
                                        sm: '200px',
                                        md: '320px',
                                        lg: '320px',
                                        xl: '320px'
                                    },
                                }}
                            />
                        </Box>
                        <Box sx={{
                            display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '50%',
                            marginBottom: '10px',
                            textAlign: {
                                xs: 'center',
                                sm: 'center',
                                md: 'center',
                                lg: 'left',
                                xl: 'left'
                            },
                            marginLeft: {
                                xs: '',
                                sm: '',
                                md: '',
                                lg: '20px',
                                xl: '20px'
                            },
                            padding: '10px',
                            borderRadius: '10px'
                        }}>
                            <Typography variant="h2" sx={{
                                color: '#dd9937', width: '100%', fontFamily: 'alvaro', fontSize: {
                                    xs: '28px',
                                    sm: '28px',
                                    md: '36px',
                                    lg: '36px',
                                    xl: '36px'
                                }
                            }} >
                                {lanche?.name}
                            </Typography>
                            <Typography variant="body1" gutterBottom sx={{
                                textAlign: 'justify', color: 'black', fontSize: '14px',
                                padding: '7px',
                                borderRadius: '8px',
                                backgroundColor: '#DD9937',
                                fontWeight: '400',
                                fontFamily: 'roboto-lig'
                            }} >
                                {lanche?.desc}
                            </Typography>
                        </Box>

                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%', height: '100%' }}>
                        {
                            allImages.map((img: any) => (
                                <Box onClick={() => setLanche(img)}
                                    key={img.name}
                                    sx={{
                                        display: 'flex', flexDirection: 'column', width: {
                                            xs: '30%',
                                            sm: '30%',
                                            md: '10%',
                                            lg: '25%',
                                            xl: '25%'
                                        },
                                    }}
                                >

                                    <Button onClick={() => setValue(img.name)}>
                                        <Avatar
                                            src={img.img}
                                            sx={{
                                                width: {
                                                    xs: '50px',
                                                    sm: '50px',
                                                    md: '50px',
                                                    lg: '80px',
                                                    xl: '80px'
                                                },
                                                height: {
                                                    xs: '50px',
                                                    sm: '50px',
                                                    md: '50px',
                                                    lg: '80px',
                                                    xl: '80px'
                                                },
                                                backgroundSize: 'cover'
                                            }}
                                        />
                                    </Button>



                                    <Typography gutterBottom sx={{
                                        color: 'white', margin: '8 px', fontSize: '16px', textAlign: 'center', fontFamily: 'roboto-lig'
                                    }} >
                                        {img.name}
                                    </Typography>
                                </Box>
                            ))}

                    </Box>



                </Box>

            </ThemeProvider>
        </Box >
    );
}