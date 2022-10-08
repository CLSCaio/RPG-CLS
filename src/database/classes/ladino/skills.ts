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
  {
    title: "Corte profundo (Ativo)",
    isInnerHtml: true,
    description: `
    <b>Mana:</b> 100
    <b>Carga:</b> 2
    <br/><b>Recarga:</b> 3 turnos
    <br/>Ataque o adversario com um corte profundo
    na garganta, cause dano igual a 150% de "ARMA + DEX" e aplique sangramento.
    <br/><b>Passiva: </b> Caso o alvo esteja com sangramento o dano é dobrado.
    `,
  },
];

export default skills;
