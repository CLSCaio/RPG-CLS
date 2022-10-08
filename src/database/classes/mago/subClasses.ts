const subClasses = [
  {
    title: "Druida",
    description: `
    <b> Benção de druida ( Passiva ) </b>
    <br/>Druidas são amigos dos animais, podendo acalma-los e ganhando auxilio no combate.
    Eles também recebem um bônus da natureza ganhando 50% da mana maxima como vida.
    <br/>Caso esteja acompanhado, ganhe 15% de buff em todos os status.
    <br/>Druidas são imunes a veneno, porem levam 1.5X a mais de dano de queimadura.

    <br/><br/>

    <b>  Chuva estelar / Surto estelar (Ativo) </b>
    <br/><b>Mana:</b> 40 <b>Espirito:</b> 2
    <br/><b>Recarga:</b> 5 turnos / 2 turnos
    <br/><b>Chuva estelar:</b> Envolve o alvo com a benção das entrelas aumentando a cura 
    recebida por turno em 2X e reduzindo todo o dano recebido em 25% por 3 turnos.
    <br/><b>Surto estelar:</b> Derrube uma estrela cadente nos inimigos
    na area causando 100 + 50% de INT.

    <br/><br/>

    <b> Cura da natureza ( Ativo ) </b>
    <br/><b>Mana:</b> 100 <b>Espirito:</b> 1 - 10
    <br/><b>Recarga:</b> 2 turnos
    <br/>Puxa energia da natureza para curar uma area em 20% da vida maxima e 
    mais 5% para cada carga gasta.
    <br/><b>Passiva: </b>Caso use 3 ou mais cargas também remove os status fratura e queimadura.
  
    <br/><br/>

    <b> Forma de arvore ( Ultimate ) </b>
    <br/> Transforma-se em uma arvore humanoide dobrando o buff da passiva, aumentando
    todas as fontes de curas em 20% e dobrando sua DEF, SP.DEF e HP por 3 turnos.
  `,
    isInnerHtml: true,
  },
  {
    title: "Necromancer",
    isInnerHtml: true,
    description: `
    <b> Amaldiçoado ( Passiva ) </b>
    <br/>Ganha acumulos de amaldiçoado sempre que matar um inimigo ou aplicar maldiçao.
    <br/>Toda abilidade usada tem chance de aplicar maldição.
    <br/>Necromancers são imunes a maldições.
    <br/><b>Acumulos: </b> 0/50

    <br/><br/>

    <b> Espiral da morte ( Ativo ) </b>
    <br/><b>Mana:</b> 100
    <br/><b>Recarga:</b> 2 turnos
    <br/> Causa 100 + 5% do HP maximo dos inimigos na area como dano por cada stack de maldição que eles tiverem.
    <br/><b>Passiva:</b> Aplica maldição.

    <br/><br/>

    <b> Comandar mortos-vivos ( Ativo ) </b>
    <br/><b>Mana:</b> 100 <b>Espirito:</b> 1 - 10
    <br/><b>Recarga:</b> 2 turnos
    <br/>Invoca os mortos para lutar ao seu lado, para cada morto-vivo invocado ganha um acumulo de amaldiçoado.
    <br/><b> Status morto-vivo: </b>
    <br/> 100 HP | 20 ATK | 10 DEF  
    <br/> 10 SP.DEF | 50 VEL
    <br/><b>OBS: </b> Invoca morto vivo dependendo do número de cargas usadas.
    <br/><b>Acumulos: </b> 0/10

    <br/><br/>

    <b> Invocação ( Ultimate ) </b>
    <br/>Gasta toda a amaldiçoado acumulada para invocar o Golem de carne.
    <br/><b> Status morto-vivo: </b>
    <br/> 200 HP | 35 ATK | 20 DEF  
    <br/> 30 SP.DEF | 30 VEL
    <br/><b>OBS: </b> Para cada amaldiçoado gasto ganha 2% de bônus nos atributos.
    <br/><b>OBS: </b> Caso gaste o maximo de amaldiçoado o bônus será dobrado.
  `,
  },
  {
    title: "Elementalista",
    isInnerHtml: true,
    description: `
    <b> Mago supremo ( Passiva ) </b>
    <br/>O Elementalista tem o dominio completo dos elementos da natureza,
    se tornando imune à queimação, fratura, congelamento e paralizia.

    <br/><br/>

    <b> Escudo de terra  / Meteoro (Ativo) </b>
    <br/><b>Mana:</b> 40 <b>Espirito:</b> 2
    <br/><b>Recarga:</b> 4 turnos / 2 turnos
    <br/><b>Escudo de terra:</b> Se protege com o poder da terra para reduzir todo o dano
    recebido em 50% por 2 turnos.
    <br/><b>Meteoro:</b> Derruba um meteoro do ceu na cabeça dos inimigos, causando um
    dano em area de 100% do INT + 100% de arma + dano elemental.
    <br/><b>Passiva:</b> Tem chance de causar fratura.

    <br/><br/>

    Bola de fogo (Ativo)
    <br/><b>Mana:</b> 20 <b>Espirito:</b> 1
    <br/><b>Recarga:</b> 2 turnos
    <br/> Joga uma bola de fogo gigante no oponente, causando 100% do INT + 100% de arma
    + dano elemental e aplicando queimação.
    
    <br/><br/>

    Maresia / Tsunami (Ativo)
    <br/> <b>Mana:</b> 20
    <br/><b>Recarga:</b> 3 turnos / 2 turnos
    <br/><b>Maresia:</b> Se cura em 25% da mana maxima e remove todos os status negativos.
    <br/><b>Tsunami:</b> Joga um tsunami nos oponentes causando 50% de INT + 100% de arma
    + dano elemental.
    <br/><b>Passiva:</b> Tem chance de causar congelamento.
    
    <br/><br/>

    Tornado (Ativo)
    <br/><b>Mana:</b> 100 <b>Espirito:</b> 3
    <br/><b>Recarga:</b> 4 turnos
    <br/>Crie um tornado que puxa todos os inimigos pra dentro dele causando dano 3X de 
    100% do INT + 100% de arma + dano elemental.
    <br/><b>Passiva:</b> Tem chance de causar paralisia.

    <br/><br/>

    <b> Fusão elemental ( Ultimate ) </b>
    <br/>Gasta toda a sua mana e carga para juntar o poder dos 4 elementos para jogar uma esfera de poder concentrada no inimigo causando dano
    igual a 300% do INT + 100% de arma + dano 4x elemental.
    <br/><b>Passiva:</b> Tem chance de aplicar queimação, paralização, congelamento e fratura. 
  `,
  },
  {
    title: "Alquimista",
    isInnerHtml: true,
    description: `
    <b> Poções magicas ( Passiva ) </b>
    <br/> Todo começo de turno o Alquimista usa uma poção recuperando 10% do HP e removendo
    um status negativo.

    <br/><br/>

    <b> Boost de adrenalina ( Ativo ) </b>
    <br/><b>Mana:</b> 100 <b>Espirito: </b> 1
    <br/><b>Recarga:</b> 2 turno
    <br/> O Alquimista usa uma poção ganhando 25% de buff em um status aleatorio.

    <br/><br/>

    <b> Toma uma poção ai ( Ativo ) </b>
    <br/><b>Mana:</b> 100 <b>Espirito: </b> 1
    <br/><b>Recarga:</b> 2 turno
    <br/> Joga uma poção no inimigo causando 150 + 5% do HP maximo dele como dano e aplicando um
    status negativo aleatorio.

    <br/><br/>

    <b> Quimico louco ( Ultimate ) </b>
    <br/>Joga poções nos alidos e inimigos.
    <br/><b>Aliados:</b> Jogue uma poção nos alidos removendo todos os status negativos no alvo e cure 10% de HP + 10% de HP
    para cada status negativo removido.
    <br/><b>Inimigos:</b> Joga 9 poções nos inimigos e para cada uma tenha chance de aplicar um status negativo aleatorio diferente.
    Causa 10% do HP maximo de alvo como dano + 10% para cada status negativo que o alvo tenha.
  `,
  },
];

export default subClasses;
