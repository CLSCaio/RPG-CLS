const skills = [
  {
    title: "Determinação (Passiva)",
    isInnerHtml: true,
    description: `
      Quando estiver com a vida acima de 50% ganha 20% de FOR/VEL.
      <br/>Quando estiver com a vida abaixo de 50% ganha 20% de HP/DEF.
    `,
  },
  {
    title: "Grito de batalha (Ativo)",
    isInnerHtml: true,
    description: `
    <b>Carga:</b> 2
    <br/><b>Recarga:</b> 2 turnos
    <br/>Grita aumentando sua FOR/HP em 20% por 2 turnos, 
    causando paralizia no inimigo e forçando-o a te atacar.
    `,
  },
  {
    title: "Cleave (Ativo)",
    isInnerHtml: true,
    description: `
    <b>Carga:</b> 2
    <br/><b>Recarga:</b> 2 turnos
    <br/>Desfere um golpe em area causando dano de 100% FOR + 20% do HP maximo do alvo e aplica fratura.
    <br/><b>Passiva:</b> Tem uma chance de entrar em estado de raiva aumentando dano 
    no proximo turno em 200%.
    `,
  },
];

export default skills;
