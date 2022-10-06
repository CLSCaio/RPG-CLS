const skills = [
  {
    title: "Trevo de 4 folhas (Passiva)",
    isInnerHtml: true,
    description: `
    Sempre que for jogar um dado, jogue uma moeda.
    <br/><b>Acerto:</b>Bobo da corte joga um dado extra.
    <br/><b>Erro:</b>Bobo da corte perde 50% de PRO até o proximo turno. 

    <br/><br/>

    Ao entrar em combate gira uma moeda.
    <br/><b>Acerto:</b>Bobo da corte sempre atacará primeiro.
    <br/><b>Erro:</b>Bobo da corte sempre atacará por último. 
    
    <br/><br/>
 
    Sempre que atacar jogue uma moeda.
    <br/><b>Acerto:</b>Bobo da corte causa o dobro de dano.
    <br/><b>Erro:</b>Bobo da corte causa dano reduzido pela metade.  
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
    <br/>Troque de lugar com alguem e jogue uma moeda.
    <br/><b>Acerto:</b>Bobo da corte cause veneno e 20% do HP maximo dele como dano.
    <br/><b>Erro:</b>Bobo da corte recebe 40% do HP como dano.  

    <br/><br/><b>OBS:</b>Esta habilidade pode alterar os times.
    `,
  },
  {
    title: "Atras de você (Ativo)",
    isInnerHtml: true,
    description: `
    <b>Recarga:</b> 5 turnos
    <br/>"Jogue uma moeda"
    <br/><b>Acerto:</b>Bobo da corte teletransporta-se para o alvo, caso seja um inimigo entre em combate
    e aplique veneno.
    <br/><b>Erro:</b>Essa habilidade não pode ser usada por 10 turnos.  
    `,
  },
];

export default skills;
