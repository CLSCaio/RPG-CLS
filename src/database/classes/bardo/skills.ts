const skills = [
  {
    title: "Notas (Passiva)",
    isInnerHtml: true,
    description: `
    Para cada música diferente tocada ganhe uma 
    Nota. Para cada nota de ao bardo 2% a mais de PRO.
    <br/>Sempre que o bardo usar uma skill no alido, 
    ele também recebe o mesmo efeito.

    <br/><b>OBS:</b> Caso o bardo esteja sozinho, as skills  
    podem ser usadas nele.

    <br/><b>OBS:</b> As notas podem ser gastas para
    fortalecer o bardo.
    `,
  },
  {
    title: "Sinfonia (Ativo)",
    isInnerHtml: true,
    description: `
    <b>Carga:</b> 2
    <br/><b>Recarga:</b> 4 turnos / 2 turnos
    <br/><b>Aliado:</b>O bardo ecoa a sua sinfonia curando o 
    aliado em 20 + 10% da mana, 
    <b>Passiva: </b>caso tenha 10 "notas" também de xp na mesma quantia e remova paralisia e silenciar. 
    
    <br/><b>Inimigo:</b>O bardo ecoa a sua sinfonia causando 
    dano em 20 + 10% da vida, caso tenha 10 
    "notas" também silencie o alvo.
    `,
  },
  {
    title: "Hamelin (Ativo)",
    isInnerHtml: true,
    description: `
    <b>Mana:</b> 20
    <br/><b>Recarga:</b> 3 turnos
    <br/><b>Aliado:</b>O bardo toca seu instrumento
    aumentando os status do aliado em 10%.
    <br/><b>Inimigo:</b>O bardo toca seu instrumento
    infeitiçando seu inimigo e diminuindo os status 
    dele em 5%. 
    <br/><b>OBS:</b>Caso tenha 10 "notas" dobre o buff/debuff.
    `,
  },
  {
    title: "Partitura (Ativo)",
    isInnerHtml: true,
    description: `
    <b>Mana:</b> 20
    <b>Carga:</b> 3
    <br/><b>Recarga:</b> 5 turnos
    <br/>O bardo envolve seu aliado com notas musicais 
    protegendo-o de qualquer dano por 3 turnos.
    <br/><b>OBS:</b>Caso tenha 10 "notas" devolva 50% do 
    dano para o oponente e o atordoe.
    `,
  },
];

export default skills;
