const skills = [
  {
    title: "Inspiração (Passiva)",
    isInnerHtml: true,
    description: `
      Para cada aliado no campo você e seus alidados ganham 15% 
      de HP/MANA e 10% redução de dano.
    `,
  },
  {
    title: "Ressurreição (Ativo)",
    isInnerHtml: true,
    description: `
      <b>Recarga: </b> 3 turnos
      <br/>Ressucita um aliado com metade do HP, mana e espirito.
    `,
  },
  {
    title: "Luz da aurora (Ativo)",
    isInnerHtml: true,
    description: `
      <b>Recarga: </b> 2 turnos
      <br/>Cause dano igual a 100 + 100% INT.
      <br/><b>Passiva: </b> Caso seja no aliado cure na mesma quantia.
    `,
  },
];

export default skills;
