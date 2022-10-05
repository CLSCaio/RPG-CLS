type atributs = {
  hp: number;
  mana: number;
  carga: number;
  def: number;
  spDef: number;
  atk: number;
  spAtk: number;
  dex: number;
  vel: number;
};

export interface StatusProps {
  status: atributs;
  lvl: atributs;
}
