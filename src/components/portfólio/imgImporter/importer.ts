import fresh from '../../../assets/lanches_tenerifes/fresh.png'
import adicto from '../../../assets/lanches_tenerifes/adicto.png'
import atlanta from '../../../assets/lanches_tenerifes/atlanta.png'
import big_smash from '../../../assets/lanches_tenerifes/big_smash.png'
import brooklyn from '../../../assets/lanches_tenerifes/brooklyn.png'
import elbravo from '../../../assets/lanches_tenerifes/elbravo.png'
import flush from '../../../assets/lanches_tenerifes/flush.png'
import osvaldinho from '../../../assets/lanches_tenerifes/osvaldinho.png'
import red_dream from '../../../assets/lanches_tenerifes/red_dream.png'
import sidao from '../../../assets/lanches_tenerifes/sidao.png'

export interface Lanche {
    name: string;
    img: string;
    desc: string
}

const allDesc = {
    fresh: 'Pão Macio, 04 Smash de 50 gramas, Queijo Cheddar Fatiado, Tomate, Alface Americana, Cebola, Picles e Maionese Hemmer',
    adicto: 'Pão Macio, 04 Smash de 50 gramas, Queijo Cheddar Fatiado, Mostarda, Ketchup , Cebola e Picles.',
    atlanta: 'Pão Brioche Breadmaker 04 Smash de 50 gramas Queijo Catupiry Bacon Cogumelos salteados na manteiga Cebolinhas & Maionese Osvaldinho',
    bigSmash: 'Sim, são 04 Smash de 50 gramas, alface, queijo e molho especial, cebola e picles num pão com gergelim :) imagem meramente ilustrativa.',
    brooklyn: 'Pão Pretzel, 04 smash de 50 gramas, Queijo Prato, Mortadela Bologna, Picles e Mostarda!',
    flush: 'Pão Macio, 04 Smash de 50 gramas, Queijo Muçarela , Bacon e Maionese Hemmer.',
    elBravo: 'Pão Especial, 04 Smash de 50 gramas, Cheddar Teneriffe, Bacon Extra, Maionese Verde da Casa, Pimenta Jalapeno (a versão Melt é sem pimenta) Ele está disponivel nos tamanhos P, M e G . (a cor do gergilim no pão pode ter variação)',
    osvaldinho: 'Pão Brioche com Gergilim, 04 Ultrasmashed, Queijo Muçarela, Copa Lombo, Alface, Cebola Roxa, e Maionese Grill Ele está disponivel nos tamanhos P, M e G . (a cor do gergilim no pão pode ter variação) Nosso querido Osvaldinho tem um toque defumado incrível!',
    redDream: 'Pão macio, 04 Smash de 50 gramas, queijo cheddar, pepperoni, tomate, cebola e maionese.',
    sidao: 'Pão brioche com Gergelim, 04 Smash de 50 gramas, Catupiry, Calabresa, Bacon e nosso delicioso Molho Bangkok. Ele está disponivel nos tamanhos P, M e G . (a cor do gergilim no pão pode ter variação) O nosso Calabacon é uma homenagem ao nosso querido Sidney Roberto Ferreira por tantos anos alimentando nossa cidade, #vidalongasidão'







}

const allImages: Lanche[] = [{ name: 'Fresh Prince', img: fresh, desc: allDesc.fresh }, { name: 'Adicto', img: adicto, desc: allDesc.adicto }, { name: 'Atlanta', img: atlanta, desc: allDesc.atlanta },
{ name: 'Big Smash', img: big_smash, desc: allDesc.bigSmash },
{ name: 'Brooklyn', img: brooklyn, desc: allDesc.brooklyn }, { name: 'Flush', img: flush, desc: allDesc.flush }, { name: 'El Bravo Melt', img: elbravo, desc: allDesc.elBravo },
{ name: 'Osvaldinho', img: osvaldinho, desc: allDesc.osvaldinho }, { name: 'Red Dream', img: red_dream, desc: allDesc.redDream }, { name: 'Sidão', img: sidao, desc: allDesc.sidao }]

export default allImages;