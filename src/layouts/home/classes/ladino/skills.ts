const skills = [
  {
    title: "Roubar Alma (Passiva)",
    isInnerHtml: true,
    description: `Sempre que você finalizar um inimigo,
    roube a essencia de vida dele, tirando 30% 
    do xp e 20% do gold dele pra você. 
    <br/>  <b>OBS:</b> Caso for um npc, dobre o xp 
    ganho e chance de dropar recompensas.`,
  },
  {
    title: "Sombras (Passiva)",
    isInnerHtml: true,
    description: `Ao sair de "Invisibilidade" ganha um buff no 
    proximo ataque de 150% do ATK da 
    arma, caso você tenha vantagem em velocidade ou atributo, 
    esse bonus é aumentado para 200%.
    <br/><b>OBS:</b> Este bonus é somado ao bonus da abilidade "Invisibilidade"`,
  },
  {
    title: "Invisibilidade (Ativo)",
    isInnerHtml: true,
    description: `
    <b>Mana:</b> 10
    <br/><b>Recarga:</b> 4 turnos
    <br/>Fica invisivel por 2 turnos, impossibilitando 
    ser atacado ou visto, ganha duas "cargas" podendo ultrapassar o maximo, caso
    ataque enquanto invisivel, de um bonus de 100% da arma no ataque.
    `,
  },
  {
    title: "Roubo (Ativo)",
    isInnerHtml: true,
    description: `
    <b>Mana:</b> 20
    <br/><b>Recarga:</b> 2 turnos
    <br/>Roube o ataque do seu adversario, desviando 
    do golpe dele e atacando pelas costas, 
    causando 50% do dano que ele lhe causaria.
    <br/><b>OBS: </b> Caso o adversario nao use uma skill
    de dano, ataque ele e cause sangramento.
    `,
  },
  {
    title: "Corte profundo (Ativo)",
    isInnerHtml: true,
    description: `
    <b>Mana:</b> 20
    <b>Carga:</b> 2
    <br/><b>Recarga:</b> 3 turnos
    <br/>Ataque o adversario com um corte profundo
    na garganta, cause 100% do ATK + 150% do dano da arma e aplique sangramento.
    <br/><b>OBS: </b> Caso o alvo esteja com sangramento o dano é dobrado.
    `,
  },
];

export default skills;
