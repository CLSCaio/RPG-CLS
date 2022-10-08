const skills = [
  {
    title: "Sombras (Passiva)",
    isInnerHtml: true,
    description: `Ao entrar em "Invisibilidade" ganha um buff no 
    proximo ataque de 150% da DEX, caso você tenha vantagem em velocidade, esse bonus é aumentado para 200%.
    <br/><b>Passiva:</b> Usa DEX como fonte de dano.`,
  },
  {
    title: "Invisibilidade (Ativo)",
    isInnerHtml: true,
    description: `
    <b>Mana:</b> 50
    <br/><b>Recarga:</b> 4 turnos
    <br/>Fica invisivel por 2 turnos, impossibilitando 
    ser atacado ou visto, ganha duas cargas de "Espirito" podendo ultrapassar o maximo.
    `,
  },
  {
    title: "Passo sombrio (Ativo)",
    isInnerHtml: true,
    description: `
    <b>Mana:</b> 50
    <br/><b>Recarga:</b> 2 turnos
    <br/>Avança até o alvo e da um corte rapido na garganta,
    causando dano igual a "ARMA + DEX" e aplicando sangramento.
    <br/><b>Passiva: </b> Caso o alvo ja esteja com sangramento, aplique atordoamento.
    `,
  },
];

export default skills;
