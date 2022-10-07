const skills = [
  {
    title: "Reviver (Passiva)",
    isInnerHtml: true,
    description: `
    <b>Recarga: </b> 2 turnos
    <br/>Quando morre revive com 50% do HP, MANA e 5 cargas.
    `,
  },
  {
    title: "Benção divina (Ativo)",
    isInnerHtml: true,
    description: `
    <b>Mana: </b> 50 <b>Carga: </b> 2
    <br/><b>Recarga: </b> 2 turnos
    <br/>Cura um aliado e a si mesmo em 100 + 20% da MANA.
    <br/><b>Passiva:</b> Remove os status fratura e congelamento.
    `,
  },
  {
    title: "Ressurreição (Ativo)",
    isInnerHtml: true,
    description: `
    <b>Mana: </b> 50 <b>Carga: </b> 5
    <br/><b>Recarga: </b> 5 turnos
    <br/>Ativa uma proteção que dura por 2 turnos. 
    Essa proteção aumenenta sua PRO em 50% e protege você e os aliados da morte, 
    fazendo com que evite o dano fatal e recupere
    toda o HP, MANA e ganha 10 cargas.
    `,
  },
];

export default skills;
