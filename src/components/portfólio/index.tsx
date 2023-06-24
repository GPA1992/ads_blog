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
                xs: '70vw',
                sm: '70vw',
                md: '70vw',
                lg: '60vw',
                xl: '50vw'
            }, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#3c3f3d', padding: '30px', borderRadius: '10px', margin: '20px'
        }} >
            <Typography variant="h4" gutterBottom sx={{ color: '#dd9937', margin: '30px', width: '100%', fontFamily: 'alvaro' }} >
                Portfólio
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify', color: 'white' }} >
                Oferecemos hambúrgueres smash de alta qualidade, procurando sempre os melhores ingredientes e inovando constantemente nosso cardápio para trazer uma comida saborosa e de qualidade. Nosso diferencial está na combinação de sabores únicos e na técnica impecável de preparo, resultando em hambúrgueres suculentos e irresistíveis. Nosso público-alvo abrange pessoas de todas as idades que apreciam hambúrgueres, desde os jovens em busca de opções modernas até os adultos que desejam uma refeição reconfortante. Satisfaça seu paladar com nosso portfólio de hambúrgueres deliciosos.
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ color: '#dd9937', margin: '30px', width: '100%', fontFamily: 'alvaro' }} >
                Cardapio
            </Typography>
            <ThemeProvider theme={theme}>

                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                    <Grid container spacing={2}>
                        {
                            allImages.map((img: any) => (
                                <Grid onClick={() => setLanche(img)} item xs={1} sm={5} md={2} key={img.name} sx={{ color: '#dd9937', margin: '8 px', fontSize: '12px', textAlign: 'center' }}>

                                    <Button onClick={() => setValue(img.name)}>
                                        <Avatar
                                            src={img.img}
                                            sx={{
                                                width: '80px',
                                                height: '80px',
                                                backgroundSize: 'cover'
                                            }}
                                        />
                                    </Button>



                                    <Typography gutterBottom sx={{ color: 'white', margin: '8 px', fontSize: '26px', textAlign: 'center', textDecoration: 'underline', fontFamily: 'alvaro' }} >
                                        {img.name}
                                    </Typography>
                                </Grid>
                            ))}
                    </Grid>


                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        borderRadius: '10px',
                        marginTop: '40px',
                        backgroundColor: '#333634',
                        padding: '10px',
                        paddingTop: '25px',
                        paddingBottom: '25px',
                    }}>
                        <Box>

                            <Avatar
                                src={lanche?.img}
                                sx={{
                                    width: '320px',
                                    height: '320px',
                                }}
                            />
                        </Box>
                        <Box sx={{
                            display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '50%',
                            marginBottom: '10px', textAlign: 'left', marginLeft: '20px', padding: '10px', borderRadius: '10px'
                        }}>
                            <Typography variant="h2" sx={{ color: '#dd9937', width: '100%', fontFamily: 'alvaro' }} >
                                {lanche?.name}
                            </Typography>
                            <Typography variant="body1" gutterBottom sx={{
                                textAlign: 'justify', color: '#333634', fontSize: '14px', padding: '7px',
                                borderRadius: '8px', backgroundColor: '#DD9937', fontWeight: '400'
                            }} >
                                {lanche?.desc}
                            </Typography>
                        </Box>

                    </Box>


                </Box>

            </ThemeProvider>
        </Box >
    );
}