const subClasses = [
  {
    title: "Paladino",
    isInnerHtml: true,
    description: `  
      <b> Aura de devoção (Passiva) </b>
      <br/>Ganha 50% da sua mana como escudo.
      <br/>Ganha 25% da sua mana como PRO.
      <br/>Sempre que receber uma cura 10% dela vira escudo, porem 
      se a cura exceder sua vida maxima, ganha toda a cura como escudo.

      <br/><br/>

      <b> Protetor justo ( Ativo ) </b>
      <b>Mana:</b> 100
      <br/><b>Recarga:</b> 3 turnos
      <br/> Se cure em 20% da MANA maxima e force os alvos a te atacarem por 3 turnos.
      <br/><b>Passiva:</b>Durante esses 3 turnos receba 25% de dano reduzido.


      <br/><br/>

      <b> Vingador divino ( Ativo ) </b>
      <b>Mana:</b> 100
      <br/><b>Recarga:</b> 2 turnos
      <br/> Aumente sua PRO em 10% e causa um dano no alvo igual a 100% da PRO + ARMA e aplique silenciar.
      <br/><b>Passiva:</b> Este buff pode ser acumulado até 5X.

      <br/><br/>

      <b> Baluarte da gloria ( Ultimate ) </b>
      <br/> Provoca todos os inimigos a te atacarem por 3 turnos e 
      ganha um escudo que absorve o dano recebido e ao final do ultimo turno explode
      causando dano a todos os inimigos igual ao dano absorvido. 
    `,
  },
  {
    title: "Apocalipse",
    isInnerHtml: true,
    description: `
      <b> Visões sombrias ( Passiva ) </b>
      <br/> Cause 10% HP/mana "qual for maior" como dano verdadeiro 
      nos seus alvos com todos os seus golpes.

      <br/><br/>

      <b> Queimadura da alma ( Ativo ) </b>
      <b>Mana:</b> 100
      <br/><b>Recarga:</b> 3 turnos
      <br/> Cause dano igual à 100% da INT + 20% HP/mana
      "qual for maior" do alvo e remova-a até 
      o fim do combate.


      <br/><br/>

      <b> Quebra mentes ( Ativo ) </b>
      <b>Mana:</b> 100
      <br/><b>Recarga:</b> 4 turnos
      <br/> Causa um dano massivo a mente do oponente com dano de 
      200% INT + 20% HP/mana "qual for maior" e aplica silenciar.

      <br/><br/>

      <b> Manipulação sombria ( Ultimate ) </b>
      <br/> Evoca os poderes das sombras dominando a mente do seu alvo,
      fazendo com que ele se corrompa, controlando-o por 3 turnos.
      <br/><b>Passiva:</b> Enquanto controlar o alvo dobre o seu dano.
      <br/><b>Passiva:</b> No final do terceiro turno, exploda o alvo 
      controlado por dentro causando 200% INT. 
  `,
  },
  {
    title: "Clerigo",
    isInnerHtml: true,
    description: `
    <b> Torrente de luz ( Passiva ) </b>
    <br/> Seus feitiços de cura e buffs tem chance de serem dobrados.

    <br/><br/>

    <b>Infusão de poder (Ativo)</b>
    <br/><b>Mana: </b> 50 <b>Carga: </b> 2
    <br/><b>Recarga: </b> 2 turnos
    <br/>Aumenta status primario em 50% e VEL em 30%.
    <br/><b>Passiva:</b> Não é acumulativo.
  
    <br/><br/>

    <b>Oração divina (Ativo)</b>
    <br/><b>Mana: </b> 50 <b>Carga: </b> 2
    <br/><b>Recarga: </b> 2 turnos
    <br/>Cura um aliado e a si mesmo em 30% do HP maximo do alvo.
    <br/><b>Passiva:</b> Remove os status fratura e congelamento.

    <br/><br/>
    
     <b> Santificar (Ultimate) </b>
    <br/>Envolve você e os alidos com asas santificadas, diminuindo o dano recebido em 25%
    e aumentando o dano causado em 50% e imunidade à status negativos por 3 turnos. 
    <br/><b>Passiva:</b>Enquanto o buff estiver ativo, cada final de turno 
    recupere 50% do HP e MANA dos alvos.
  `,
  },
];

export default subClasses;
