const subClasses = [
  {
    title: "Druida",
    description: `
    <b> Benção de druida ( Passiva ) </b>
    <br/>Druidas são amigos dos animais, podendo acalma-los e ganhando auxilio no combate.
    Eles também recebem um bônus da natureza ganhando 50% da mana maxima como vida.
    <b>OBS:</b> Caso esteja acompanhado ganha 5% de buff em todos os status.

    <br/><br/>

    <b> Cura da natureza ( Ativo ) </b>
    <br/><b>Mana:</b> 100 <b>Carga:</b> 1 - 10
    <br/><b>Recarga:</b> 2 turnos
    <br/>Puxa energia da natureza para curar uma area em de 20% da vida maxima e 
    mais 5% para cada carga gasta.
    <b>Passiva: </b>Caso use 3 ou mais cargas também remove os status veneno, queimadura.
  
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
    <br/><b>Acumulos: </b> 0/50

    <br/><br/>

    <b> Comandar mortos-vivos ( Ativo ) </b>
    <br/><b>Mana:</b> 100 <b>Carga:</b> 1 - 10
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
    <b> Domador dos 4 elementos ( Passiva ) </b>
    <br/>O Elementalista tem o dominio completo dos elementos da natureza, aumentando o dado deles
    para 2X, alem disso não recebe dano dos 4 elementos.

    <br/><br/>

    <b> Fusão elemental ( Ativo ) </b>
    <br/>Gasta toda a sua mana e carga para juntar o poder dos 4 elementos para jogar uma esfera de poder concentrada no inimigo causando dano
    igual a 300% do SP.ATK + 100% de arma + dano 4x elemental.
    <br/>
    <b>OBS:</b> Tem chance de aplicar queimação, paralização, congelamento e lentidão. 

    <br/><br/>

    <b> Fusão elemental ( Ultimate ) </b>
    <br/>Gasta toda a sua mana e carga para juntar o poder dos 4 elementos para jogar uma esfera de poder concentrada no inimigo causando dano
    igual a 300% do INT + 100% de arma + dano 4x elemental.
    <br/><b>OBS:</b> Tem chance de aplicar queimação, paralização, congelamento e lentidão. 
  `,
  },
];

export default subClasses;
