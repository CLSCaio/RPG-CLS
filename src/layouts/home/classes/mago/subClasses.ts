const subClasses = [
  {
    title: "Clerigo",
    description: `
    <b> Reviver ( Passiva ) </b>
    <br/><b>Recarga: </b> 2 turnos
    <br/>Quando morre revive com 50% do HP, MANA e 5 cargas.
    <br/><br/>
    <b> Ressurreição ( Ultimate ) </b>
    <br/>Ativa uma proteção que dura até a abilidade for ativado. Essa proteção,
    protege você e os aliados da morte, fazendo com que evite o dano faltal e recupere
    toda o HP, MANA e ganha 10 cargas.
  `,
    isInnerHtml: true,
  },
  {
    title: "Necromancer",
    isInnerHtml: true,
    description: `
    <b> Amaldiçoado ( Passiva ) </b>
    <br/>Ganha acumulos de maldição sempre que matar um inimigo ou aplicar maldiçao.
    <br/>Toda abilidade usada tem chance de aplicar maldição.
    <br/><br/>
    <b> Invocação ( Ultimate ) </b>
    <br/>Gasta toda a maldição acumulada para invocar o Satanations</b>
  `,
  },
  {
    title: "Avatar",
    isInnerHtml: true,
    description: `
    <b> Domador dos 4 elementos ( Passiva ) </b>
    <br/>O avatar tem o dominio completo dos elementos da natureza, aumentando o dado elemental
    para 200%, alem disso 
    <br/><br/>
    <b> Fusão elemental ( Ultimate ) </b>
    <br/>Gasta toda a sua mana e carga para juntar o poder dos 4 elementos para jogar uma esfera de poder concentrada no inimigo causando dano
    igual a 300% do SP.ATK + 100% de arma + dano 4x elemental.
    OBS: Tem chance de aplicar queimação, paralização, congelamento e lentidão. 
  `,
  },
];

export default subClasses;
