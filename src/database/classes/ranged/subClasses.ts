const subClasses = [
  {
    title: "Domador",
    description: `
      <b> Companheiro animal ( Passiva ) </b>
      <br/>Ao entrar em combate e a cada turno subscequente, o caçador chama um
      ajudante para auxilia-lo, os ajudantes possuem 25% dos status do caçador. 

      <br/>Para cada ajudante ganhe 15% DEX/VEL/PRO.

      <br/>O caçador divide 10% do dano recebido na batalha com cada ajudante em campo.

      <br/>Sempre q um ajudante morrer o domador fica com raiva dobrando o dano da próxima skill.

      <br/><b>Ajudantes: </b> 0/3

      <br/><br/>

      <b> Comando para matar ( Ativo ) </b>
      <br/>O Domador incentiva seu ajudante a atacar o alvo causando 
      100% ARMA + DEX nele.
      <br/><b>Passiva: </b> Sempre que você atacar com um ATK Basico os seus ajudantes também atacam, 
      causando 50% do dano que você causou.

      <br/><br/>

      <b> Disparo tranquilizante  ( Ativo ) </b>
      <br/>O caçador dispara uma flecha com tranquilizante no alvo causando dano igual a 100% ARMA + DEX
      e aplicando sono, também remove um buff do alvo.

      <br/><br/>

      <b> Rebelião ( Ultimate ) </b>
      <br/>O domador envia todos seus ajudantes para atacar causando 300% ARMA + DEX 
      e aplicando paralisia, caso o domador nao possua ajudantes chame instantaneamente o 
      número máximo de ajudantes. 
      <br/><b>Passiva: </b>Se o domador ja possuir o número maximo de ajudantes dobre o 
      dano e cause atordoamento.
    `,
    isInnerHtml: true,
  },
  {
    title: "Arcano",
    isInnerHtml: true,
    description: `
    <b> Fluxo de energia ( Passiva ) </b>
    <br/>Converte DEX para INT.
    <br/>Usa INT como fonte de dano.
    <br/>Para cada 100 pontos de DEX convertido ganha 10% de aumento no dano.

    <br/><br/>

    <b> Flecha encantada ( Ativo ) </b>
    <br/>Encanta a flecha com um status, causando dano igual a 100% ARMA + INT
    e aplicando um status negativo dependendo de qual encanto usar, caso não usar encantamento
    o dano da flecha aumenta em 1.5X.
    <br/><b>Encantamentos </b>
    <br/><b>Paralisia: </b> Aplica paralisia.
    <br/><b>Gelo: </b> Aplica congelamento.
    <br/><b>Fogo: </b> Aplica queimação.
    <br/><b>Veneno: </b> Aplica veneno.
    <br/><b>Sonifero: </b> Aplica sono.

    <br/><br/>

    <b> Anulação de espirito ( Ativo ) </b>
    <br/>Atira uma flecha encantada com magia negra, removendo 50% do espirito do alvo e
    causando dano igual de 300 + 10% para cada espirito removido como dano verdadeiro.
  

    <br/><br/>

    <b> Flecha negativa ( Ultimate ) </b>
    <br/>Atira uma flecha usando o poder da alma no alvo causando dano 
    de 200% ARMA + INT e aplicando paralisia, queimação, congelamento, veneno e sono.
    <br/><b>Passiva: </b> Caso o alvo esteja com algum status negativo, o dano é dobrado.
  `,
  },
  {
    title: "Arqueiro",
    isInnerHtml: true,
    description: `
      <b> Atirador de elite ( Passiva ) </b>
      <br/>Cada turno que se passa o arqueiro fica melhor nas suas habilidades,
      ganhando um aumento de 5% de VEL e DEX.

      <br/><br/>

      <b> Tiro Concentrado ( Ativo ) </b>
      <br/>Carrega uma flecha poderesa por 3 turnos, causando 100% de ARMA + 200% de DEX + 50% por 
      cada turno carregado além do primeiro.
      <br/><b>Passiva:</b> Se a flecha for disparada com o maximo de turnos ela ignora 50% da PRO do alvo.

      
      <br/><br/>

      <b> Chuva de flechas ( Ativo ) </b>
      <br/>Atira uma saraivada de flechas pro alto que cai sobre os inimigos, causando 
      200% ARMA + 200% DEX.

      <br/><br/>

      <b> Tiro rápido ( Ultimate ) </b>
      <br/>Atira uma flecha rapida, causando 200% ARMA + 200% DEX + 200% VEL e causando atordoamento.
      <br/><b>Passiva:</b> Você sempre ataca primeiro.
    `,
  },
];

export default subClasses;
