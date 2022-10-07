type list = {
  title: string;
  description: string;
  isInnerHtml?: boolean;
};

type atributs = {
  hp: number;
  mana: number;
  espirito: number;
  pro: number;
  for: number;
  int: number;
  dex: number;
  vel: number;
};

export interface ListItemsProps {
  skills: list[];
  subClasses: list[];
  status: atributs;
  lvl: atributs;
}
