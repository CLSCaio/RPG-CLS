const skills = [
  {
    title: "Conversão (Passiva)",
    isInnerHtml: true,
    description: `Ganha SP.ATK igual a 20% da mana maxima.`,
  },
  {
    title: "Mago supremo (Passiva)",
    isInnerHtml: true,
    description: `Ganha 1 carga adicinoal por turno pra cada 1000 de mana maxima.`,
  },
  {
    title: "Meteoro / Pele de pedra (Ativo)",
    isInnerHtml: true,
    description: `
    <b>Carga:</b> 2
    <b>Mana:</b> 40
    <br/><b>Recarga:</b> 4 turnos / 2 turnos
    <br/><b>Pele de pedra:</b> Se protege com o poder da terra para reduzir todo o dano
    recebido em 25% por 2 turnos, porem também diminui a velocidade na mesma quantia.
    <br/><b>Meteoro:</b> Derruba um meteoro do ceu na cabeça dos inimigos, causando um
    dano em area de 100% do SP.ATK + 100% de arma + dano elemental.
    `,
  },
  {
    title: "Bolo de fogo (Ativo)",
    isInnerHtml: true,
    description: `
    <b>Mana:</b> 20
    <b>Carga:</b> 1
    <br/><b>Recarga:</b> 2 turnos
    <br/> Joga uma bola de fogo gigante no oponente, causando 100% do SP.ATK + 100% de arma
    + dano elmental e aplicando queimação.
    `,
  },
  {
    title: "Tsunami / Maresia (Ativo)",
    isInnerHtml: true,
    description: `
    <b>Mana:</b> 20
    <br/><b>Recarga:</b> 3 turnos / 2 turnos
    <br/><b>Maresia:</b> Se cura em 20% da mana maxima e remove todos os status negativos.
    <br/><b>Tsunami:</b> Joga um tsunami nos oponentes causando 50% de SP.ATK + 100% de arma
    + dano elemental.
    <br/><b>OBS:</b> Tem chance de causar congelamento por 2 turnos.
    `,
  },
  {
    title: "Tornado (Ativo)",
    isInnerHtml: true,
    description: `
    <b>Mana:</b> 100
    <b>Carga:</b> 3
    <br/><b>Recarga:</b> 4 turnos
    <br/>Crie um tornado que puxa todos os inimigos pra dentro dele causando dano 3X de 
    100% do SP.ATK + 100% de arma + dano elemental.
    <br/><b>OBS:</b> Tem chance de stunar por 2 turnos.
    `,
  },
];

export default skills;
