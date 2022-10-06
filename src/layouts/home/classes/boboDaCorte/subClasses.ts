const subClasses = [
  {
    title: "Mimico",
    description: `
    <b> Amaldiçoado ( Passiva ) </b>
    <br/>Ganha acumulos de maldição sempre que matar um inimigo ou aplicar maldiçao.
    <br/>Toda abilidade usada tem chance de aplicar maldição.

    
    <br/><br/>
    
    <b> Copiar ( Ativo ) </b>
    <br/>Gire uma moeda, se acertar reduza o proximo dano levado a zero e copie e devolva a 
    abilidade inimiga com o dobro de dano, se errar diminua a propria PRO em 25%.

    <br/><br/>

    <b> Copiar ( Ultimate ) </b>
    <br/>Gire uma moeda, se acertar reduza o proximo dano levado a zero e copie e devolva a 
    abilidade inimiga com o dobro de dano, se errar diminua a propria PRO em 25%.
    `,
    isInnerHtml: true,
  },
  {
    title: "Arlequim",
    isInnerHtml: true,
    description: `
    <b> Insanidade ( Passiva ) </b>
    <br/>Ao entrar em combate gira dois dados, se eles cairem com o mesmo número.
    <br/><b>Acerto:</b>Arlequim executa o alvo.
    <br/><b>Erro:</b>"Insanidade" não ativará por 5 turnos.  

    <br/><br/>

    <b> Atirador de facas ( Ativo ) </b>
    <br/><b>Recarga:</b> 1 turnos
    <br/>Arlequim brinca com suas facas "jogue uma moeda"
    <br/><b>Acerto:</b>Arlequim às arremessa ao oponente
    causando dano igual a 50% do HP maximo do alvo e aplicando veneno
    <br/><b>Erro:</b>Arlequim se esfaqueia perdendo 50% do HP e aplicando veneno.  
  
    <br/><br/>

    <b> Trapaceiro ( Ultimate ) </b>
    <br/>"Jogue uma moeda"
    <br/><b>Passiva:</b>Esse efeito dura 2 turnos.
    <br/><b>Passiva:</b>Esse efeito pode ser usado fora de combate.  
    <br/><b>Acerto:</b>Arlequim faz com que todas as moedas sejam caras, e todos os dados sejam 6.
    <br/><b>Erro 1:</b>Arlequim jogue outra moeda porque é trapaceiro e tenta novamente.  
    <br/><b>Erro 2:</b>A ultimate entra em recarga. 


  `,
  },
  {
    title: "Bufão",
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
