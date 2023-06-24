import React, { useState } from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Link, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import news from '../../assets/images/noticia.png'



export default function News() {
    return (
        <Box sx={{ maxWidth: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#3c3f3d', padding: '30px', borderRadius: '10px' }} >
            <Typography variant="h4" gutterBottom sx={{ color: '#dd9937', margin: '30px', width: '100%', fontFamily: 'alvaro' }} >
                Ganhando Premios!
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify', color: 'white' }}  >
                O vencedor da categoria de hamburguerias em Itapeva deste ano é o restaurante @teneriffes! Eles conquistaram o primeiro lugar no concurso, recebendo o título de "Mais votado" e uma merecida premiação. Parabéns ao @teneriffes por essa conquista incrível! A cidade de Itapeva está comemorando o resultado e desejamos muito sucesso ao restaurante na continuidade de seus negócios. A notícia foi divulgada pelo @jornalitanews em sua conta no Instagram.
            </Typography>
            <Card sx={{ maxWidth: 1000 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="540"
                        image={news}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#dd9937', borderRadius: '10px' }}>

                            <InstagramIcon sx={{ fontSize: 40, color: 'white', margin: '10px' }} />
                            <Link href="https://www.instagram.com/p/Cp24ZY6rdxN/" underline="hover" target="_blank" sx={{ color: 'white', fontSize: '18px', fontWeight: '600' }}>Tenerifes está entre os melhores do ano!!! Confira o post!!!</Link>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>


        </Box>
    );
}