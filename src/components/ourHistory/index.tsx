import React, { useState } from 'react';
import styles from './ourStory.styles.sass';
import { Box, Typography } from '@mui/material';


export default function OurStory() {
    return (
        <Box sx={{
            width: {
                xs: '100%',
                sm: '100%',
                md: '50%',
                lg: '50%',
                xl: '50%'
            }, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#3c3f3d', padding: '30px', borderRadius: '10px'
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
                Nossa História
            </Typography>
            <Typography gutterBottom sx={{
                textAlign: 'justify', color: 'white', fontSize: {
                    xs: '14px',
                    sm: '14px',
                    md: '18px',
                    lg: '18px',
                    xl: '18px'
                }
            }} >
                A Tenerifes é muito mais do que apenas um estabelecimento de hambúrgueres. Ela nasceu de uma ideia que já existia antes mesmo de se tornar realidade. A vontade de oferecer um hambúrguer de qualidade estava presente, mesmo antes da criação do nosso CNPJ.

                No início de 2020, demos os primeiros passos e começamos a operar do zero, contando apenas com a determinação, o apoio dos amigos e muita boa vontade. Cometer erros fazia parte do caminho e, de fato, foi fundamental para o nosso crescimento.

                Em março daquele mesmo ano, quando a pandemia levou as pessoas a ficarem em casa, o Tenerifes já havia se adaptado e era capaz de entregar um produto de alta qualidade e consistência. Foi nesse momento que nossos clientes começaram a desfrutar de refeições melhores. Surpreendentemente, com a chegada da pandemia, nossos pedidos começaram a aumentar consideravelmente.

                No mês de junho, lançamos dois hambúrgueres que rapidamente conquistaram o público: o El Bravo Burn e o El Bravo Melt. Essas criações se tornaram verdadeiros sucessos e cativaram os paladares dos nossos clientes.

                A partir desse momento, a Tenerifes iniciou uma trajetória de constante crescimento. Acreditamos que é o resultado de nosso compromisso em oferecer hambúrgueres de alta qualidade, aliado ao sabor incomparável e ao atendimento excepcional que proporcionamos. Estamos comprometidos em evoluir constantemente e em continuar agradando e surpreendendo aqueles que nos escolhem. A nossa história está apenas começando, e temos muitas delícias saborosas para compartilhar com vocês.
            </Typography>
        </Box>
    );
}