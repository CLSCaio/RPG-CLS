const skills = [
  {
    title: "Trevo de 4 folhas (Passiva)",
    isInnerHtml: true,
    description: `
    Sempre que for jogar um dado, jogue uma moeda.
    <br/><b>Acerto:</b>Jogue um dado extra.
    <br/><b>Erro:</b>Só ganhe o efeito do dado girado se cair 2, 4 ou 6. 

    <br/><br/>

    Ao entrar em combate gira uma moeda.
    <br/><b>Acerto:</b>Você sempre atacará primeiro.
    <br/><b>Erro:</b>Você sempre atacará por último. 

    <br/><br/>

    Sempre que atacar com ATK basico jogue uma moeda.
    <br/><b>Acerto:</b>Cause o dobro de dano.
    <br/><b>Erro:</b>Cause dano reduzido pela metade. 
    `,
  },
  {
    title: "Enganar a morte (Passiva)",
    isInnerHtml: true,
    description: `
    <b>Recarga:</b> 3 turnos
    <br/>Quando sofrer um dano que lhe mataria jogue uma moeda, se acertar, 
    reduza o dano para 0 e cure 100% da vida.
    `,
  },
  {
    title: "Estou aqui (Ativo)",
    isInnerHtml: true,
    description: `
    <b>Recarga:</b> 3 turnos
    <br/><b>"Jogue uma moeda"</b>
    <br/><b>Acerto:</b>Troque de lugar com alguem e caso for um inimigo cause
    veneno e 20% do HP maximo do alvo como dano.
    <br/><b>Erro:</b>Receba 30% do HP atual como dano.  

    <br/><br/><b>OBS:</b>Esta habilidade pode alterar os times.
    `,
  },
  {
    title: "Atras de você (Ativo)",
    isInnerHtml: true,
    description: `
    <b>Recarga:</b> 5 turnos
    <br/><b>"Jogue uma moeda"</b>
    <br/><b>Acerto:</b>Teletransporta-se para o alvo, caso seja um inimigo entre em combate
    e aplique veneno.
    <br/><b>Erro:</b>Essa habilidade não pode ser usada por 10 turnos.  
    `,
  },
];

export default skills;
