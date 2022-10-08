const subClasses = [
  {
    title: "Mimico",
    description: `
    <b> Impostor ( Passiva ) </b>
    <br/>Ao entrar em combate escolha uma passiva no campo e copie ela.
   
    <br/><br/>
    
    <b> Refletir ( Ativo ) </b>
    <br/>Devolva o proximo dano recebido.
    <br/><b>1 ou 6: </b>Não devolva o dano.  
    <br/><b>2 à 5: </b>Multiplique o dano pelo número do dado. 
    <br/><b>Passiva: </b> Não se aplica a ultimates.
    
    <br/><br/>
    
    <b> Copiar ( Ativo ) </b>
    <br/>Copie uma habilidade do inimigo e jogue um dado.
    <br/><b>1 ou 6: </b>Cancele a habilidade.  
    <br/><b>2 à 5: </b>Multiplique o dano pelo número do dado. 
    <br/><b>Passiva: </b> Não pode copiar ultimates.

    <br/><br/>

    <b> Sabotagem ( Ultimate ) </b>
    <br/> Cria uma mimica sua para receber os golpes no seu lugar, se tornando inalvejavél.
    Todo turno "Jogue uma moeda".
    <br/><b>Acerto: </b>A mimica continua no campo.  
    <br/><b>Erro: </b>A mimica sai do campo. 
    <br/><b>Passiva: </b> Não pode copiar ultimates.
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

    Atras de você (Ativo)
    <b>Recarga:</b> 5 turnos
    <br/><b>"Jogue uma moeda"</b>
    <br/><b>Acerto:</b>Teletransporta-se para o alvo, caso seja um inimigo entre em combate
    e aplique veneno.
    <br/><b>Erro:</b>Essa habilidade não pode ser usada por 10 turnos.  
     
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
    <b> Substituir ( Passiva ) </b>
    <br/>Ao entrar em combate e nos proximos turnos.
    <br/><b>Acerto: </b>Crie um clone alvo para ficar no seu lugar na batalha, enquanto este clone estiver
    no campo, você se tornará inalvejavél, porem você pode atacar.
    <br/><b>Erro: </b>O clone sai do campo. 

    <br/><br/>

    <b> Dose letal  ( Ativo ) </b>
    <br/> Esfaquei o alvo causando dano igual a 15% do HP maximo dele e aplicando veneno. 
    <br/><b>Passiva:</b> Caso o alvo já esteja envenenado dobre o dano.

    <br/><br/>

    <b> Presente surpresa  ( Ativo ) </b>
    <br/> Coloque um presente para seus inimigos no campo, caso um deles lhe ataque ou pise, 
    cause dano igual a 15% do HP maximo deles e aplique veneno e paralisia. 

    <br/><br/>

    <b> Simulacro ( Ultimate ) </b>
    <br/> Faça um clone seu que copia todas as suas skills e ataques basicos durante 3 turnos.
    No final do terceiro turno o clone explode causando dano em area igual a 100% do dano que ele causou 
    enquanto estava ativo. 
  `,
  },
];

export default subClasses;
