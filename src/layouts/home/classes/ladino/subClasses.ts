const subClasses = [
  {
    title: "Assassino",
    isInnerHtml: true,
    description: `
    <b> Assassinato ( Passiva ) </b>
    <br/>Caso o alvo fique com menos de 15% de vida, execute-o.
    <br/><br/>
    <b> Pericia ( Ultimate ) </b>
    <br/>Gira com as adagas causando um alvoroço gastando suas cargas e acertando todos os 
    inimigos e causando aos oponentes dano de 250% da arma e ATK, causa sangramento e 
    atordoamento por 2 turnos.
    <br/>
    <br/><b>Causa 10% de dano para cada carga gasta.</b>
    `,
  },
  {
    title: "Ladrão",
    isInnerHtml: true,
    description: `
    <b> Roube tudo e todos ( Passiva ) </b>
    <br/>Roube todos os objetos/itens, gold, almas de quem matar.
    <br/><br/>
    <b> Oculto ( Ultimate ) </b>
    <br/>Ativa uma invisibilidade que dura 3 turnos.
    Ao sair da invisibilidade, recebe uma proteção
    das sombras que aumenta sua DEX em 100 por 2 turnos, todos os seus golpes causam 
    sangramento enquanto durar o efeito de proteção.

    <br/>
    <br/><b>Caso gaste 10 cargas aumenta a duração em 1 turno.</b>
    `,
  },
  {
    title: "Duelista",
    isInnerHtml: true,
    description: `
    <b> Dominio ( Passiva ) </b>
    <br/>Caso esteja sozinho com o inimigo, seu dano aumenta em 100%.
    <br/><br/>
    <b> Dança de pétalas ( Ultimate ) </b>
    <br/>Causa um alvoroço com a arma causando dano 3 vezes ao oponente de 200% de arma e ATK</b>

    <br/>
    <br/><b>Causa 5% de dano para cada carga gasta.</b>
    `,
  },
];

export default subClasses;
