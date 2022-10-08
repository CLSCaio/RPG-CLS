const subClasses = [
  {
    title: "Assassino",
    isInnerHtml: true,
    description: `
    <b> Assassinato ( Passiva ) </b>
    <br/>Cada ATK/abilidade diferente usada gera um ponto de "Assassinato", com 
    3 pontos de assasinato execute o alvo caso ele tenha menos de 15% de vida.
    <br/><b>Assassinato:</b> 0/5

    <br/><br/>

    <b> Corte profundo (Ativo) </b>
    <b>Mana:</b> 100
    <b>Carga:</b> 2
    <br/><b>Recarga:</b> 3 turnos
    <br/>Ataque o adversario com um corte profundo
    na garganta, cause dano igual a 150% de "ARMA + DEX" e aplique sangramento.
    <br/><b>Passiva:</b> Pode consumir pontos de "Assassinato" para aumentar o dano em 10% para cada um deles. 
    <br/><b>Passiva: </b> Caso o alvo esteja com sangramento o dano é dobrado.
  
    <br/><br/>

    <b> A morte vem de cima ( Ativo ) </b>
    <br/>Pula no alvo desferindo um golpe mortal causando 100% da FOR + DEX + arma + 5% 
    pra cada carga gasta e aplicando sangramento.
    <br/><b>Passiva:</b> Pode consumir 3 pontos de "Assassinato" para tentar executar o alvo. 

    <br/><br/>

    <b> Lótus Mortal ( Ultimate ) </b>
    <br/>Gira com as adagas causando um alvoroço gastando suas cargas e acertando todos os 
    inimigos e causando aos oponentes dano de 250% da arma e ATK, causa sangramento e 
    atordoamento por 2 turnos.
    <br/><b>Passiva:</b> consome 5 pontos de "Assassinato" para ter a chance de executar o 
    alvo.
    <br/><b>Passiva:</b> Caso o alvo morra, resete a ultimate.
    `,
  },
  {
    title: "Vigarista",
    isInnerHtml: true,
    description: `
    <b> Roubem Rude ( Passiva ) </b>
    <br/>Roube todos os objetos/itens, gold, almas de quem matar.

    <br/><br/>

    <b> Oculto ( Ativo ) </b>
    <b>Mana:</b> 100
    <b>Carga:</b> 2
    <br/><b>Recarga:</b> 3 turnos
    <br/>Ativa "Invisibilidade" e teleporta em alguma direção (podendo sair de combate).
    <br/>Ao sair da invisibilidade, recebe uma proteção
    das sombras que aumenta sua DEX em 100 por 2 turnos, todos os seus golpes causam 
    sangramento enquanto durar o efeito de proteção.

    <br/><br/>

    <b> Decisões rápidas ( Ativo ) </b>
    <b>Mana:</b> 100
    <b>Carga:</b> 2
    <br/><b>Recarga:</b> 3 turnos
    <br/>De um ataque rápido no alvo causando dano igual à 100% da DEX + ARMA, ganhando um buff
    de 25% em VEL e aprimorando seus reflexos.
    <br/><b>Passiva:</b>Caso receba um dano mortal no mesmo turno que usar essa skill, evite 
    o dano e saia do combate.

    <br/><br/>

    <b> Sussurro mortal ( Ultimate ) </b>
    <br/>Marca um alvo por 5 turnos com "Sussurro mortal".
    <br/><b>Ativo:</b> Pode reativar a ultimate para teletransportar até seu alvo marcado 
    atacando ele e causando dano em 300% + 100% de DEX.
    <br/><b>Passiva:</b> Caso o alvo esteja com sangramento causa 3X mais dano.
    <br/><b>Passiva:</b> Alvos marcados tem seus status reduzidos em 30%.

    `,
  },
  {
    title: "Duelista",
    isInnerHtml: true,
    description: `
    <b> Dominio ( Passiva ) </b>
    <br/>Caso esteja sozinho com o inimigo, seu dano aumenta em 150%.

    <br/><br/>

    <b> Corte sombrio ( Ativo ) </b>
    <br/>Avança em direção ao alvo causando 150% de ATK + Arma + 5% por carga usada
    e aplicando silenciar por 2 turnos.

    <br/><br/>

    <b> Campo gravitacional ( Ativo ) </b>
    <br/>Cria um campo de força em volta de você e do alvo reduzindo a VEL dele em 50% e 
    aumentando a sua em 25%.
    <br/><b>Passiva:</b> Impede que outros inimigos te ataque.

    <br/><br/>

    <b> Reino das sombras ( Ultimate ) </b>
    <br/>Envia você e o oponente alvo para o seu reino, roubando 30% dos atributos dele
    e aumentando todo o dano que ele recebe em 20% por 2 turnos.
    <br/><b>Passiva: </b> Se voce matar o alvo dentro do reino você 
    continua com o roubo de atributos até o final da batalha e se cure em 30% do HP do alvo.
    `,
  },
];

export default subClasses;
