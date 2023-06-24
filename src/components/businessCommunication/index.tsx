import React, { useState } from 'react';
import styles from './ourStory.styles.sass';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Link, Typography } from '@mui/material';
import infografico from '../../assets/images/infografico.png'


export default function BusinessCommunication() {
    return (
        <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#3c3f3d', padding: '30px', borderRadius: '10px', margin: '20px' }} >
            <Typography variant="h4" gutterBottom sx={{ color: '#dd9937', margin: '30px', width: '100%', fontFamily: 'alvaro' }} >
                A comunicação empresarial
            </Typography>

            <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify', color: 'white' }} >
                O Tenerifes adota como modelo de comunicação empresarial a gestão horizontal com o uso do livro aberto, no qual informações cruciais são compartilhadas com todos os funcionários, visando a melhoria dos resultados e o engajamento da equipe.

                Atualmente, os canais de comunicação da empresa são tanto verbais, através de reuniões, quanto escritos, por meio de aplicativos de conversa em celulares.

                No passado, a empresa enfrentou problemas de comunicação, nos quais a falta de informação causava ruídos e fofocas, resultando em conflitos e relacionamentos negativos na equipe, prejudicando os resultados esperados.

                Para lidar com essa situação, a empresa adotou o modelo de gestão de livro aberto, realizando reuniões semanais para informar o fluxo de produção planejado para a semana, bem como compartilhar informações vitais, como problemas ocorridos e as medidas a serem tomadas, números relacionados ao aumento do custo da matéria-prima, entre outros aspectos relevantes. Além disso, são destacadas as posturas que a equipe deve adotar em determinadas situações.

            </Typography>
            <Card sx={{ maxWidth: 1000 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="340"
                        image={infografico}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography variant="h6" component="div">
                            Gestão de Livro aberto
                        </Typography>

                        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '10px' }}>
                            A prática de compartilhar com funcionários de todos os níveis da organização informações vitais anteriormente reservadas à administração.
                        </Typography>
                        <Link href='https://hbr.org/1997/03/opening-the-books' underline="hover" target="_blank" sx={{ color: 'black' }}>Saiba mais...</Link>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
}