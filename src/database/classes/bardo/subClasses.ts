const subClasses = [
  {
    title: "Dançarino",
    isInnerHtml: true,
    description: `
    <b> Conversão ( Passiva ) </b>
    <br/>Converte o bônus da passiva "Notas" para INT e VEL

    <br/><br/>

    <b> Dança dos pés ( Ativo ) </b>
    <br/>Dança até seus alvo chutando-o e causando dano a ele igual à
    200% INT + ARMA e acertando os alvos adjascentes em 50% do dano causando,
    caso acerta 2 ou mais inimigos atordoe eles.

    <br/><br/>
    
    <b> Notas explosivas ( Ultimate ) </b>
    <br/>Gasta todas as suas "notas" para causar
    um dano massivo ao oponente igual à 300% do dano de ARMA e INT
    e + 5% do HP maximo do alvo para cada "nota" gasta.
    `,
  },
  {
    title: "Lirico",
    isInnerHtml: true,
    description: `
    <b> Soprano ( Passiva ) </b>
    <br/>Sempre que dar uma cura ou buff para o alido, ele recebe 
    um escudo igual a 10% do HP maximo dele.

    <br/><br/>

    <b> Atração ( Ativo ) </b>
    <br/>Cante para seus aliados e inimigos hipnotizando-os.
    <br/><b> Aliados: </b> Diminui em 1 turnos todas as skills.
    <br/><b> Inimigos: </b> Aplica silenciar.

    <br/><br/>
    
    <b> Tenor ( Ultimate ) </b>
    <br/>Ecoa sua voz sobre os aliados curando você e eles em 300% PRO + ARMA,
    pode usar "nota" para aumentar a cura. Para "nota" gasta aumenta a cura em 10%,
    caso use 5 ou mais "notas" de um escudo igual a 50% da cura realizada.
    `,
  },
  {
    title: "Maestro",
    isInnerHtml: true,
    description: `
    <b> Orquestra ( Passiva ) </b>
    <br/>Ao entrar em combate e a cada turno subscequente aplique um buff
    nos aliados e um debuff nos inimigos.
    <br/><b> OBS: </b> O buff/Debuff aumenta/diminui o status primario do alvo em 5%.

    <br/><br/>

    <b> Regência ( Ativo ) </b>
    <br/>O Maestro rege seus aliados e inimigos dominando o campo e combate por 3 turnos.
    <br/><b> Inimigos: </b> Diminui o dano causando em 10% e você seleciona o alvo dos ataques.
    <br/><b> Aliados: </b> Aumenta o dano causado em 10%.

    <br/><br/>
    
    <b> Transcender ( Ultimate ) </b>
    <br/>O Maestro transcende o campo com a sua orquestra envolvendo os alidos com notas musicais,
    aumentando a PRO deles em 200% e diminuindo a PRO dos inimgos em 50% por 3 turnos.
    <br/><b> Passivo: </b> Para cada 5 "notas" gastas aumenta a duração em 1 turno.
    `,
  },
];

export default subClasses;
