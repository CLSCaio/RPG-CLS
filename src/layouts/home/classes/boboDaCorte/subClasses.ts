const subClasses = [
  {
    title: "Mimico",
    description: `
    <b> Amaldiçoado ( Passiva ) </b>
    <br/>Ganha acumulos de maldição sempre que matar um inimigo ou aplicar maldiçao.
    <br/>Toda abilidade usada tem chance de aplicar maldição.

    
    <br/><br/>
    
    <b> Copiar ( Ativo ) </b>
    <br/><b>"Jogue uma moeda"</b>
    <br/>se acertar reduza o dano a 0 e devolva a habilidade do oponente
    para ele mesmo com o dobro de dano, apos isso, essa habilidade tem a recarga 0 e se torna a habilidade do inimigo,
    se errar você leva o dobro de dano.

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
    <br/><b>Acerto:</b>Execute o alvo.
    <br/><b>Erro:</b>"Insanidade" não ativará por 5 turnos.  

    <br/><br/>

    <b> Atirador de facas ( Ativo ) </b>
    <br/><b>Recarga:</b> 1 turnos
    <br/><b>"Jogue uma moeda"</b>
    <br/>O palhaço brinca com suas facas. "jogue uma moeda"
    <br/><b>Acerto:</b>Arremesse as facas ao oponente
    causando dano igual a 50% do HP maximo dele e aplicando veneno.
    <br/><b>Erro:</b>Se esfaqueie com as facas perdendo 50% do HP.  
  
    <br/><br/>

    <b> Trapaceiro ( Ultimate ) </b>
    <br/><b>"Jogue uma moeda"</b>
    <br/><b>Passiva:</b>Esse efeito dura 2 turnos.
    <br/><b>Passiva:</b>Esse efeito pode ser usado fora de combate.  
    <br/><b>Acerto:</b>Faz com que todas as moedas sejam caras, e todos os dados sejam 6.
    <br/><b>Erro 1:</b>Jogue outra moeda porque você é trapaceiro e tente novamente.  
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
