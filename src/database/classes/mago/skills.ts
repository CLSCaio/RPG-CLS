const skills = [
  {
    title: "Fluxo de sabedoria (Passiva)",
    isInnerHtml: true,
    description: `
    Ganha INT igual a 10% da mana maxima.
    <br/>Ganha 1 de espirito adicional por turno pra cada 1000 de mana maxima.
    `,
  },
  {
    title: "Cintilação (Ativo)",
    isInnerHtml: true,
    description: `
    <b>Mana: </b> 50
    <br/><b>Recarga: </b> 1 turno
    <br/>Faz uma orbe de poder magico e lança nos inimigos, causando
    dano igual a 100% de ARMA + INT, ganhe 1 de espirito.
    `,
  },
  {
    title: "Seta arcana (Ativo)",
    isInnerHtml: true,
    description: `
    <b>Mana: </b> 100 <b>Carga: </b> 3
    <br/><b>Recarga: </b> 3 turno
    <br/>Cria uma seta imbuida com poder arcano e arremessa no alvo causando 10% de MANA + INT.
    <br/><b>Passiva: </b> Está skill muda de acordo com a subClasse escolhida.
    <br/><b>Druida: </b> Envolve a seta com poder da natureza, permitindo usar em aliados e 
    fazendo com que ele seja curada na mesma quantia.
    <br/><b>Necromancer: </b> Envolve a seta com magia negra aumentando o dano em 5% do HP atual do alvo
    e recebendo 3 stacks de amaldiçõado.
    <br/><b>Elementalista: </b> Envolve a seta com poder elemental aumentando o dano em 5%
    para cada elemento diferente usado no combate.
    <br/><b>Alquismista: </b> Joga uma poção em cima da seta aumentando o dano dela em 10% e aplicando
    um debuff de 25% em um status aleatorio.
    `,
  },
];

export default skills;
