const skills = [
  {
    title: "Roubar Alma (Passiva)",
    isInnerHtml: true,
    description: `Sempre que você finalizar um inimigo,
    <br/> roube a essencia de vida dele, tirando 30% 
    <br/> do xp e 20% do gold dele pra você. 
    <br/>  <b>OBS:</b> Caso for um npc, dobre o xp 
    <br/>ganho e chance de dropar recompensas.`,
  },
  {
    title: "Sombras (Passiva)",
    isInnerHtml: true,
    description: `Ao sair de "Invisibilidade" ganha um buff no 
    <br/> proximo ataque de 150% do ATK da 
    <br/>arma, caso você tenha vantagem em 
    <br/>velocidade ou atributo, esse bonus é 
    <br/>aumentado para 200%.
    <br/><b>OBS:</b> Este bonus é somado ao bonus da
    <br/> abilidade "Invisibilidade"`,
  },
  {
    title: "Invisibilidade (Ativo)",
    isInnerHtml: true,
    description: `
    <b>Mana:</b> 10
    <br/><b>Recarga:</b> 4 turnos
    <br/>Fica invisivel por 2 turnos, impossibilitando 
    <br/>ser atacado ou visto, ganha duas "cargas"
    <br/> podendo ultrapassar o maximo, caso
    <br/> ataque enquanto invisivel, de um bonus de
    <br/>100% da arma no ataque.
    `,
  },
  {
    title: "Roubo (Ativo)",
    isInnerHtml: true,
    description: `
    <b>Mana:</b> 20
    <br/><b>Recarga:</b> 2 turnos
    <br/>Roube o ataque do seu adversario, desviando 
    <br/>do golpe dele e atacando pelas costas, 
    <br/>causando 50% do dano que ele lhe causaria.
    <br/><b>OBS: </b> Caso o adversario nao use uma skill
    <br/>de dano, ataque ele e cause sangramento.
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
    <br/>na garganta, cause 100% do ATK + 150%
    <br/>do dano da arma e aplique sangramento.
    <br/><b>OBS: </b> Caso o alvo esteja com sangramento
    <br/>o dano é dobrado.
    `,
  },
];

export default skills;
