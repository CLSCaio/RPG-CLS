const subClasses = [
  {
    title: "Berserker",
    isInnerHtml: true,
    description: `
    <b> Furia ( Passiva ) </b>
    <br/>Sempre que ficar com menos de 20% de HP receba um buff nos status de 20% 
    e fica imune a status negativos por 1 turnos.
    <br/>Ganha 20% do HP como FOR.

    <br/><br/>

    <b> Frenesi ( Ativo ) </b>
    <br/><b>Carga:</b> 2
    <br/><b>Recarga:</b> 3 turnos
    <br/>Golpeia o alvo com 200% da FOR + Arma, aumentando a VEL em 20% por 3 turnos.

    <br/><br/>

    <b> Massacre (Ativo)</b>
    <br/><b>Carga:</b> 2
    <br/><b>Recarga:</b> 5 turnos
    <br/>Investe no alvo reduzindo a PRO dele em 25% e golpeando-o com 100% de FOR + 150% de Arma,
    reduzindo a cura recebida pelo alvo em 50% por 3 turnos.

    <br/><br/>

    <b> Golpe devastador ( Ultimate ) </b>
    <br/>Descarrega toda a força para dar um golpe brutal causando 300% de FOR + 
    300% de arma + 10% pra cada carga gasta.
    <br/><b>OBS:</b> Reduz a PRO em 50%. 
    <br/><b>OBS:</b> Berserker fica stunado. 
  `,
  },
  {
    title: "Lancer",
    isInnerHtml: true,
    description: ` 
    <b> Alabarda ( Passiva ) </b>
    <br/>Para cada inimigo ou alido por perto, ganha 15% em todos os status.

    <br/><br/>

    <b> Arremesso titanico ( Ativo ) </b>
    <br/>Lança sua arma no alvo empalando-o causando 100% da FOR e causando
    atordoamento.

    <br/><br/>

    <b> Estocada ( Ativo ) </b>
    <br/>Estoca o alvo perfurando-o causando 150% PRO + FOR 
    e recebendo um escudo igual a 10% da PRO e aplicando atordoamento.
    <br/><b>Passiva:</b>Caso tenha um aliado perto aumenta o escudo recebido em 25%.
    <br/><b>Passiva:</b>Caso tenha um aliado perto ele também receberá o escudo.

    <br/><br/>

    <b> Cataclisma ( Ultimate ) </b>
    <br/>Pula no alvo criando uma cratera no chão causando 100% PRO + FOR + 30% HP maximo 
    como dano e impossibilitando o inimigo de fugir por 3 turnos.
    <br/><b>Passiva:</b>Tem chance de aplicar fratura.
    `,
  },
  // {
  //   title: "Espadashim",
  //   isInnerHtml: true,
  //   description: `
  //   <b> Mestre das armas ( Passiva ) </b>
  //   <br/>Caso esteja sozinho com o inimigo, sua DEX aumenta em 100%.
  //   <br/>Utiliza DEX como fonte de dano.

  //   <br/><br/>

  //   <b> Corte rápido ( Ativo ) </b>
  //   <br/><b>Carga:</b> 4
  //   <br/><b>Recarga:</b> 2 turnos
  //   <br/>Desfere um golpe rapido causando 100% FOR + Arma + VEL
  //   e ganhando 25% de VEL ao final do ataque.
  //   <br/><b>Passiva:</b> Esta velocidade pode ser acumulada até 5 vezes.

  //   <br/><br/>

  //   <b> 1000 cortes ( Ultimate ) </b>
  //   <br/>Investe ao alvo em alta velocidade, cortando-o 1000 vezes,
  //   causando 200% FOR + Arma + 100% VEL e aplicando atordoamento.
  //   `,
  // },
  {
    title: "DragonSlayer",
    isInnerHtml: true,
    description: ` 
    <b> Fogo do dragão ( Passiva ) </b>
    <br/>Embui a arma com o fogo ardente, fazendo com que todos os tenha chance de aplicar queimadura.
    <br/>Ganha um bonus de 5% de redução de dano pra cada queimadura nos oponentes.
    <br/>O dragonSlayer pode stackar até 5 queimaduras em cada inimigo.
    <br/>O dragonSlayer pode absorver a alma dos dragões derrotados, ganhando 10% de todos os status
    por cada alma, ao absorver 5 almas ganha o elemento divino.
    <br/><b>Almas absorvidas: </b> 0

    <br/><br/>

    <b> Golpe colossal ( Ativo ) </b>
    <br/><b>Carga:</b> 3
    <br/><b>Recarga:</b> 2 turnos
    <br/>Esmaga a armadura do alvo causando 100% de FOR + ARMA reduzindo sua PRO em 25%.
    <br/><b>Passiva:</b>Caso o alvo esteja com queimadura dobre a redução de PRO.

    <br/><br/>

    <b> Golpe de escudo ( Ativo ) </b>
    <br/><b>Carga:</b> 3
    <br/><b>Recarga:</b> 2 turnos
    <br/>Golpeia o inimigo com o escudo causando dano igual a 250% da PRO
    e aplicando atordoamento, aumentando a PRO em 15% por 3 turnos.
    <br/><b>Passiva:</b>Aumenta o dano causando em 10% pra cada stack de quemadura no oponente.

    <br/><br/>

    <b> Sangue fervente ( Ultimate ) </b>
    <br/>Invoca o poder draconico, recebendo uma armadura que aumenta sua PRO em 100% e 
    bloqueando os proximos 3 ataques.
    <br/><b>Passiva:</b> Aplica queimadura no maximo em todos os oponentes.
    `,
  },
];

export default subClasses;
