type list = {
  title: string;
  description: string;
  isInnerHtml?: boolean;
};

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

export interface ListItemsProps {
  abilidades: list[];
  subClasses: list[];
  status: atributs;
  lvl: atributs;
  title: string;
  history: string;
  id: string;
}
